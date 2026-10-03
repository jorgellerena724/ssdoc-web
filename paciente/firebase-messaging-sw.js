// Service worker de las notificaciones push en la web (Firebase Cloud
// Messaging). Cada app (app/ y paciente/) lo registra en su carpeta y le pasa
// la configuración pública de Firebase en la query de la URL (ver
// lib/src/core/push_notifications.dart), así no hace falta generarlo en el
// deploy. Sin configuración no hace nada.
//
// La versión del SDK tiene que coincidir con la de firebase_core_web
// (supportedFirebaseJsSdkVersion).
importScripts('https://www.gstatic.com/firebasejs/12.19.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.19.0/firebase-messaging-compat.js');

const params = new URL(self.location).searchParams;
if (params.get('projectId')) {
  firebase.initializeApp({
    apiKey: params.get('apiKey'),
    projectId: params.get('projectId'),
    messagingSenderId: params.get('messagingSenderId'),
    appId: params.get('appId'),
  });
  // Con la app cerrada, el SDK muestra la notificación que manda el backend.
  firebase.messaging();
}

// Tocar la notificación abre la app en la pantalla del aviso (data.route),
// o enfoca la pestaña que ya estaba abierta.
self.addEventListener('notificationclick', (event) => {
  const message = event.notification.data && event.notification.data.FCM_MSG;
  const route = (message && message.data && message.data.route) || '';
  event.notification.close();
  const url = new URL(route.replace(/^\//, ''), self.registration.scope).href;
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((windows) => {
      for (const client of windows) {
        if (client.url.startsWith(self.registration.scope) && 'focus' in client) {
          client.navigate(url);
          return client.focus();
        }
      }
      return clients.openWindow(url);
    }),
  );
});
