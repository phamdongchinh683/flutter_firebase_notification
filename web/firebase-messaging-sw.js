importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyDIjR1LLHlJYMpMm_Wzan5idHSoiyHbpJs",
  authDomain: "notification-53aa3.firebaseapp.com",
  projectId: "notification-53aa3",
  storageBucket: "notification-53aa3.firebasestorage.app",
  messagingSenderId: "856037366349",
  appId: "1:856037366349:web:e94fa03759ee5c0426da04",
  measurementId: "G-PVWV2L0NY6",
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});
