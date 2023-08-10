importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyBqRWLoR8YhSQb8AO4QLVqyVZI2WTJd_QY",
  authDomain: "svp-terminal-flutter.firebaseapp.com",
  projectId: "svp-terminal-flutter",
  storageBucket: "svp-terminal-flutter.appspot.com",
  messagingSenderId: "998411144923",
  appId: "1:998411144923:web:bf34cf12962d14dbf4c6fe",
  measurementId: "G-P87RCJ5W4R",
};
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});
