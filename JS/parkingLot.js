import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { collection, doc, getDoc, setDoc, getFirestore } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";
import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-storage.js";

// firebaseConfig
const firebaseConfig = ({
    apiKey: "AIzaSyAYuccRNRZU-JUI5HqF-Pr4_q14d_gn5mE",
    authDomain: "rmit-finding.firebaseapp.com",
    projectId: "rmit-finding",
    storageBucket: "rmit-finding.appspot.com",
    messagingSenderId: "588772101914",
    appId: "1:588772101914:web:57858d4a30dc76d4fca6a3"
});

// Initialize Firebase and Firebase-services
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

try{
    const docRef = doc(db,"Parking","Motorbike");
    const docSnap = await getDoc(docRef);
    const docCar = doc(db,"Parking","Car");
    const docSnapCar = await getDoc(docCar);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        document.getElementById("motor-location").innerHTML = docSnap.data().location;
        document.getElementById("motor-description").innerHTML = docSnap.data().description;
        document.getElementById("motor-rule").innerHTML = docSnap.data().rules;
        document.getElementById("motor-fee").innerHTML = docSnap.data().fee;
        document.getElementById("motor-time").innerHTML = docSnap.data().time;

        document.getElementById("car-location").innerHTML = docSnapCar.data().location;
        document.getElementById("car-description").innerHTML = docSnapCar.data().description;
        document.getElementById("car-rule").innerHTML = docSnapCar.data().rules;
        document.getElementById("car-fee").innerHTML = docSnapCar.data().fee;
        document.getElementById("car-time").innerHTML = docSnapCar.data().time;
    } 
    else {
        // doc.data() will be undefined in this case
        // window.location.replace("index.html");
        document.getElementById("display-mess").innerHTML = "Invalid Input";
        alert("Room ID input not valid ! Please try again");
        location.replace("index.html");
    }
}
catch(err) {
    console.log(err);
}