// Rellena la landing con datos vivos:
//  - downloads/version.json (lo escribe .github/workflows/deploy.yml):
//    versión, tamaño y sha256 de cada APK (apps.clinica y apps.paciente, una
//    tarjeta [data-app] por cada una), y las novedades. Si una app todavía no
//    tiene APK publicado, su botón de descarga queda deshabilitado.
//  - GET /tenants/plans de la API (pública): la sección de planes. Si la API
//    no responde (o no admite el origen por CORS), la sección no se muestra.
// Todo el texto que viene de fuera se pone con textContent.
(function () {
  var API = 'https://ssdoc-api.shirkasoft.net/api/v1';

  function $$(selector) { return document.querySelectorAll(selector); }

  function setText(selector, text) {
    $$(selector).forEach(function (node) { node.textContent = text; });
  }

  function el(tag, cls, text) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text != null) node.textContent = text;
    return node;
  }

  function fmtSize(bytes) {
    return (bytes / (1024 * 1024)).toFixed(1).replace('.', ',') + ' MB';
  }

  function fmtDate(iso) {
    var date = new Date(iso);
    if (isNaN(date)) return iso;
    return date.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
  }

  setText('[data-year]', String(new Date().getFullYear()));

  // ---- Descargas y novedades ----

  function inCard(card, selector, fn) {
    card.querySelectorAll(selector).forEach(fn);
  }

  function markUnavailable(card) {
    inCard(card, '[data-download]', function (node) {
      node.setAttribute('aria-disabled', 'true');
      node.removeAttribute('href');
      var label = node.querySelector('[data-label]');
      if (label) label.textContent = 'Disponible muy pronto';
    });
    inCard(card, '[data-version]', function (node) { node.textContent = 'próximamente'; });
    inCard(card, '[data-download32]', function (node) {
      node.closest('.alt-download').hidden = true;
    });
    inCard(card, '.sha', function (node) { node.hidden = true; });
  }

  function fillCard(card, apk, info) {
    if (!apk) return markUnavailable(card);
    inCard(card, '[data-download]', function (node) { node.setAttribute('href', 'downloads/' + apk.file); });
    inCard(card, '[data-download32]', function (node) { node.setAttribute('href', 'downloads/' + apk.file32); });
    inCard(card, '[data-version]', function (node) { node.textContent = info.version; });
    inCard(card, '[data-size]', function (node) { node.textContent = fmtSize(apk.sizeBytes); });
    inCard(card, '[data-date]', function (node) { node.textContent = fmtDate(info.builtAt); });
    inCard(card, '[data-sha]', function (node) { node.textContent = apk.sha256; });
  }

  var cards = document.querySelectorAll('[data-app]');

  var KIND = { 'new': 'Nuevo', improved: 'Mejora', fixed: 'Arreglo' };
  var AUDIENCES = [['staff', 'SSDoc Clínica'], ['patient', 'SSDoc para pacientes']];

  function renderChangelog(releases) {
    var body = document.querySelector('[data-changelog-body]');
    if (!body || !releases || !releases.length) return;
    releases.slice(0, 3).forEach(function (release) {
      var items = [];
      AUDIENCES.forEach(function (pair) {
        (release[pair[0]] || []).forEach(function (item) { items.push(item); });
      });
      if (!items.length) return;
      var h = el('h4', null, 'Versión ' + release.version);
      if (release.date) h.appendChild(el('small', null, fmtDate(release.date + 'T12:00:00')));
      body.appendChild(h);
      var ul = el('ul');
      items.forEach(function (item) {
        var li = el('li');
        li.appendChild(el('span', 'kind', (KIND[item.kind] || '') + ': '));
        li.appendChild(document.createTextNode(item.text));
        ul.appendChild(li);
      });
      body.appendChild(ul);
    });
    if (body.children.length) document.querySelector('[data-changelog]').hidden = false;
  }

  fetch('downloads/version.json', { cache: 'no-cache' })
    .then(function (res) {
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return res.json();
    })
    .then(function (info) {
      cards.forEach(function (card) {
        fillCard(card, info.apps && info.apps[card.getAttribute('data-app')], info);
      });
      renderChangelog(info.changelog);
    })
    .catch(function () { cards.forEach(markUnavailable); });

  // ---- Planes ----

  function limit(value, unit) {
    return value == null ? 'Ilimitado' : value + (unit || '');
  }

  fetch(API + '/tenants/plans')
    .then(function (res) {
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return res.json();
    })
    .then(function (data) {
      var plans = (Array.isArray(data) ? data : data.items || []).filter(function (p) {
        return p.is_active !== false;
      });
      if (!plans.length) return;
      var list = document.querySelector('[data-plans-list]');
      plans.forEach(function (plan) {
        var card = el('article', 'card plan');
        card.appendChild(el('h3', null, plan.name || plan.code));
        var price = el('div', 'price');
        if (plan.price_monthly == null) {
          price.textContent = 'A pactar';
        } else {
          price.textContent = '$' + plan.price_monthly + ' ';
          price.appendChild(el('small', null, '/ mes'));
        }
        card.appendChild(price);
        var ul = el('ul');
        ul.appendChild(el('li', null, 'Pacientes: ' + limit(plan.max_patients)));
        ul.appendChild(el('li', null, 'Médicos: ' + limit(plan.max_doctors)));
        ul.appendChild(el('li', null, 'Personal: ' + limit(plan.max_users)));
        ul.appendChild(el('li', null, 'Almacenamiento: ' + limit(plan.max_storage_mb, ' MB')));
        card.appendChild(ul);
        list.appendChild(card);
      });
      $$('[data-plans]').forEach(function (node) { node.hidden = false; });
    })
    .catch(function () { /* sin planes: la sección sigue oculta */ });
})();
