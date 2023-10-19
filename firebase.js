const firebaseConfig = {
    apiKey: window.env.apiKey,
    authDomain: window.env.authDomain,
    projectId: window.env.projectId,
    storageBucket: window.env.storageBucket,
    messagingSenderId: window.env.messagingSenderId,
    appId: window.env.appId,
};

firebase.initializeApp(firebaseConfig);
