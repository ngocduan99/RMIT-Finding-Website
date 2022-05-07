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
    //IT Desk data
    const docRefIT = doc(db,"service","IT_service");
    const docSnapIT = await getDoc(docRefIT);
        document.getElementById("IT-service-location").innerHTML = docSnapIT.data().location;
        document.getElementById("IT-service-description").innerHTML = docSnapIT.data().mainDescription;
        document.getElementById("IT-service-rule").innerHTML = docSnapIT.data().rule;
        document.getElementById("IT-service-permission").innerHTML = docSnapIT.data().permission;
        document.getElementById("IT-service-roomID").innerHTML = docSnapIT.data().roomID;
        document.getElementById("IT-service-time").innerHTML = docSnapIT.data().timeOpen;

    //SAS Data
    const docRefSAS = doc(db,"service","SAS");
    const docSnapSAS = await getDoc(docRefSAS);
    document.getElementById("SAS-location").innerHTML = docSnapSAS.data().location;
    document.getElementById("SAS-description").innerHTML = docSnapSAS.data().mainDescription;
    document.getElementById("SAS-rule").innerHTML = docSnapSAS.data().rule;
    document.getElementById("SAS-permission").innerHTML = docSnapSAS.data().permission;
    document.getElementById("SAS-roomID").innerHTML = docSnapSAS.data().roomID;
    document.getElementById("SAS-time").innerHTML = docSnapSAS.data().timeOpen;

    //SOS Data
    const docRefSOS = doc(db,"service","SOS");
    const docSnapSOS = await getDoc(docRefSOS);
    document.getElementById("SOS-location").innerHTML = docSnapSOS.data().location;
    document.getElementById("SOS-description").innerHTML = docSnapSOS.data().mainDescription;
    document.getElementById("SOS-rule").innerHTML = docSnapSOS.data().rule;
    document.getElementById("SOS-permission").innerHTML = docSnapSOS.data().permission;
    document.getElementById("SOS-roomID").innerHTML = docSnapSOS.data().roomID;
    document.getElementById("SOS-time").innerHTML = docSnapSOS.data().timeOpen;

    //Connect Data
    const docRefConnect = doc(db,"service","connect");
    const docSnapConnect= await getDoc(docRefConnect);
    document.getElementById("RMIT-Connect-location").innerHTML = docSnapConnect.data().location;
    document.getElementById("RMIT-Connect-description").innerHTML = docSnapConnect.data().mainDescription;
    document.getElementById("RMIT-Connect-rule").innerHTML = docSnapConnect.data().rule;
    document.getElementById("RMIT-Connect-permission").innerHTML = docSnapConnect.data().permission;
    document.getElementById("RMIT-Connect-roomID").innerHTML = docSnapConnect.data().roomID;
    document.getElementById("RMIT-Connect-time").innerHTML = docSnapConnect.data().timeOpen;

    //LNF Data
    const docRefLNF = doc(db,"service","lostandfound");
    const docSnapLNF= await getDoc(docRefLNF);
    document.getElementById("LNF-location").innerHTML = docSnapLNF.data().location;
    document.getElementById("LNF-description").innerHTML = docSnapLNF.data().mainDescription;
    document.getElementById("LNF-rule").innerHTML = docSnapLNF.data().rule;
    document.getElementById("LNF-permission").innerHTML = docSnapLNF.data().permission;
    document.getElementById("LNF-roomID").innerHTML = docSnapLNF.data().roomID;
    document.getElementById("LNF-time").innerHTML = docSnapLNF.data().timeOpen;

    //SD Data
    const docRefSD = doc(db,"service","service_desk");
    const docSnapSD= await getDoc(docRefSD);
    document.getElementById("SD-location").innerHTML = docSnapSD.data().location;
    document.getElementById("SD-description").innerHTML = docSnapSD.data().mainDescription;
    document.getElementById("SD-rule").innerHTML = docSnapSD.data().rule;
    document.getElementById("SD-permission").innerHTML = docSnapSD.data().permission;
    document.getElementById("SD-roomID").innerHTML = docSnapSD.data().roomID;
    document.getElementById("SD-time").innerHTML = docSnapSD.data().timeOpen;

    //Sporthall data
    const docRefsport = doc(db,"service","sporthall");
    const docSnapsport= await getDoc(docRefsport);
    document.getElementById("Sporthall-location").innerHTML = docSnapsport.data().location;
    document.getElementById("Sporthall-description").innerHTML = docSnapsport.data().mainDescription;
    document.getElementById("Sporthall-rule").innerHTML =docSnapsport.data().rule;
    document.getElementById("Sporthall-permission").innerHTML = docSnapsport.data().permission;
    document.getElementById("Sporthall-roomID").innerHTML = docSnapsport.data().roomID;
    document.getElementById("Sporthall-time").innerHTML = docSnapsport.data().timeOpen;

    //Wellbeing
    const docRefWellbeing= doc(db,"service","well_being");
    const docSnapWellbeing= await getDoc(docRefWellbeing);
    document.getElementById("Wellbeing-location").innerHTML = docSnapWellbeing.data().location;
    document.getElementById("Wellbeing-description").innerHTML = docSnapWellbeing.data().mainDescription;
    document.getElementById("Wellbeing-rule").innerHTML =docSnapWellbeing.data().rule;
    document.getElementById("Wellbeing-permission").innerHTML = docSnapWellbeing.data().permission;
    document.getElementById("Wellbeing-roomID").innerHTML = docSnapWellbeing.data().roomID;
    document.getElementById("Wellbeing-time").innerHTML = docSnapWellbeing.data().timeOpen;

}
catch(err) {
    console.log(err);
}