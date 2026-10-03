// Páginas legales públicas (/legal/...): el texto vigente se pide a la API
// (GET /legal/documents/{tipo}), así se lee justo la versión que se acepta en
// la app. El tipo viene en <main data-legal="...">.
// El texto es plano: "1. TÍTULO" y "2.1. Subtítulo" son encabezados, las
// líneas con "- " son listas y una línea en blanco separa párrafos. Todo se
// pone con textContent.
(function () {
  var API = 'https://ssdoc-api.shirkasoft.net/api/v1';
  var main = document.querySelector('[data-legal]');
  var body = document.querySelector('[data-legal-body]');
  var year = document.querySelector('[data-year]');
  if (year) year.textContent = String(new Date().getFullYear());
  if (!main || !body) return;

  function el(tag, cls, text) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text != null) node.textContent = text;
    return node;
  }

  function fmtDate(iso) {
    var date = new Date(iso);
    if (isNaN(date)) return iso;
    return date.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
  }

  var heading = /^(\d+(?:\.\d+)*)\.\s+\S/;

  function render(text) {
    var fragment = document.createDocumentFragment();
    text.trim().split(/\n\s*\n/).forEach(function (block, index) {
      var lines = block.split('\n');
      // La cabecera del texto (título, versión, rol) repite lo de arriba:
      // va aparte, una línea por renglón.
      if (index === 0 && !heading.test(lines[0].trim())) {
        var preamble = el('p', 'legal-preamble');
        lines.forEach(function (line, i) {
          if (i) preamble.appendChild(document.createElement('br'));
          preamble.appendChild(document.createTextNode(line.trim()));
        });
        fragment.appendChild(preamble);
        return;
      }
      var list = null;
      var paragraph = [];
      function flush() {
        if (paragraph.length) fragment.appendChild(el('p', null, paragraph.join(' ')));
        paragraph = [];
      }
      lines.forEach(function (raw) {
        var line = raw.trim();
        if (!line) return;
        var match = line.match(heading);
        if (match && line.length < 140) {
          flush();
          list = null;
          var level = match[1].split('.').length;
          fragment.appendChild(el(level > 1 ? 'h3' : 'h2', null, line));
        } else if (line.indexOf('- ') === 0) {
          flush();
          if (!list) list = fragment.appendChild(el('ul'));
          list.appendChild(el('li', null, line.slice(2)));
        } else {
          list = null;
          paragraph.push(line);
        }
      });
      flush();
    });
    return fragment;
  }

  function fail() {
    body.textContent = '';
    body.appendChild(el('p', 'legal-error',
      'No pudimos cargar el documento. Revisa tu conexión y vuelve a intentarlo.'));
    var retry = el('button', 'btn btn-sm', 'Reintentar');
    retry.type = 'button';
    retry.addEventListener('click', load);
    body.appendChild(retry);
  }

  function load() {
    body.textContent = 'Cargando…';
    fetch(API + '/legal/documents/' + main.getAttribute('data-legal'))
      .then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return res.json();
      })
      .then(function (doc) {
        if (doc.title) {
          document.querySelector('[data-legal-title]').textContent = doc.title;
          document.title = doc.title + ' — SSDoc';
        }
        var meta = [];
        if (doc.version) meta.push('Versión ' + doc.version);
        if (doc.effective_at) meta.push('vigente desde el ' + fmtDate(doc.effective_at));
        document.querySelector('[data-legal-meta]').textContent = meta.join(' · ');
        body.textContent = '';
        body.appendChild(render(doc.content || ''));
      })
      .catch(fail);
  }

  load();
})();
