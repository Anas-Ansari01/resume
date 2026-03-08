importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyCwF699KQYTx9m-fZPK38GP3OQIIomuuF4",
  authDomain: "hibiscus-health-dev.firebaseapp.com",
  projectId: "hibiscus-health-dev",
  storageBucket: "hibiscus-health-dev.appspot.com",
  messagingSenderId: "211246712089",
  appId: "1:211246712089:web:08471f0eb8646065a63188",
  measurementId: "G-K5H592SFBB"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('📩 Received background message:', payload);

  const notificationTitle = payload.notification?.title || "New Notification";
  const notificationOptions = {
    body: payload.notification?.body || "You have a new message.",
    icon: "/logo.svg",
    badge: "/logo.svg",
    data: payload.data || {},
    actions: [{ action: "open_app", title: "Open App" }]
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

// Handle Notification Clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true }).then((clientList) => {
      if (clientList.length > 0) {
        clientList[0].focus();
      } else {
        clients.openWindow('/'); // Open the app
      }
    })
  );
});
