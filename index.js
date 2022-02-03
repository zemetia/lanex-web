/* FIREBASE INIT */
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHLzL_4lQYJA79VhfFv_qFeNN1jjfRmQQ",
  authDomain: "webyessitorus.firebaseapp.com",
  databaseURL: "https://webyessitorus-default-rtdb.firebaseio.com",
  projectId: "webyessitorus",
  storageBucket: "webyessitorus.appspot.com",
  messagingSenderId: "259351088189",
  appId: "1:259351088189:web:72bafe396df83be0d6ee54",
  measurementId: "G-P9556BYXQD"
};

// Initialize Firebase
initializeApp(firebaseConfig);

/* External Modules */
const EXPRESS = require("express");
const PATH = require("path");
const PUG = require("pug");


/* App Variable */
const APP = EXPRESS();
const PORT = process.env.PORT || "8000";


/* App Config */
APP.engine("pug", PUG.__express);
APP.set("views", PATH.join(__dirname, "views"));
APP.set("view engine", "pug");
APP.use(EXPRESS.static(PATH.join(__dirname, "public")));


/* Routes Def */
APP.get("/", (req, res) => {
    res.render("index", {
        appName: "Lanex",
        appDesc: "Language Exchange",
        author: "Yoel Mountanus Sitorus"
    });
})


/* Server Activation */
APP.listen(PORT);