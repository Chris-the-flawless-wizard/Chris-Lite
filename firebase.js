import { initializeApp } from 
"https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";


import {getStorage}
from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";


import {getFirestore}
from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


const firebaseConfig = {

apiKey:"YOUR KEY",

authDomain:"YOUR DOMAIN",

projectId:"YOUR PROJECT",

storageBucket:"YOUR BUCKET",

messagingSenderId:"YOUR ID",

appId:"YOUR APP ID"

};


const app = initializeApp(firebaseConfig);


export const storage=getStorage(app);

export const db=getFirestore(app);
