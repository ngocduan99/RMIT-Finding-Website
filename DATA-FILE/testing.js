console.log("this is javascript");
//JSON: Javascript Object Notation
fetch ("data.json")
        .then(response => response.json()) //must have to read the json file
        .then(data =>{
            console.log(data);
            document.getElementById("demo").innerHTML = data.name;
        });


//fetch () return a PROMISE in RESOLVES status with the value RESPONSE for that request
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
// import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"; //using Firestore database for test
import { collection, doc, getDoc, setDoc, getFirestore } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";
import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-storage.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = ({
  apiKey: "AIzaSyDvYxzHNNlNv5wsAuBaAY7_nnCMBlxTZ6Q",
  authDomain: "testing2-4bb02.firebaseapp.com",
  projectId: "testing2-4bb02",
  storageBucket: "gs://testing2-4bb02.appspot.com",
  messagingSenderId: "905228859838",
  appId: "1:905228859838:web:5e9a5d3e15d27b13e461ef",
  measurementId: "G-GTDY3N9CK9"
});

//------------Initialize Firebase and Firebase-services-----------
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// const testing2 = collection(db, "building1");


//------For pulling pictures from the storage to the web-------------
// var ImgName, ImgUrl;

//-----------------Import data to the system----------------------------
// const querySnapshot = await collection(db, "building1").get();
// if (querySnapshot.exists()){
//     console.log(querySnapshot);
// }else {console.log("ngum")}
// await setDoc(doc(testing2, "2ndfloor"), {
//     name: "San Francisco", 
//     state: "CA", 
//     country: "USA",
//     capital: false, population: 860000,
//     regions: ["west_coast", "norcal"] });


//var docRef = collection(db, "building1");
//var myCol = collection(docRef, "2ndfloor");
// docRef.get().then((doc) => {
//     if (doc.exists) {
//         console.log("Document data:", doc.data());
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
// }).catch((error) => {
//     console.log("Error getting document:", error);
// });

// const docRef = doc(db, "building1", "2ndfloor");

// const querySnapshot = await getDoc(docRef);



    // doc.data() is never undefined for query doc s
//------------------Pulling the data from the database down to the webpage------------


var input = "B2.02.02";
// var input = "B1.01.01";

const inputArr = [];
for (let index = 0; index < 3; index++) {
    inputArr[index] = input.split(".")[index];
}
console.log(input);
console.log(inputArr[0]);
console.log(inputArr[1]+"."+inputArr[2]);

var buildingNum = inputArr[0];
var roomNum =inputArr[1]+"."+inputArr[2];


try{
    const docRef = doc(db, buildingNum, roomNum);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    document.getElementById("main-room-description").innerHTML = docSnap.data().mainDescription;
    document.getElementById("time-open-description").innerHTML = docSnap.data().timeOpen;
    document.getElementById("room-rule-description").innerHTML = docSnap.data().rule;
    } else {
    // doc.data() will be undefined in this case
    console.log("Invalid input");
    document.getElementById("room-rule-description").innerHTML = "Invalid Input";
    }
}
catch(err) {
console.log(err);
}
// document.getElementById("demo").innerHTML = docSnap.data().country


//----------References to storage-------------
const str = getStorage(app);
var imgRef = buildingNum +'/' + roomNum +'.png';
const storageRef = ref(str, imgRef);

// const storageRef = ref(str, 'building1/1stfloor/B2.1.10/0101.png');
// const storageRef = ref(str, 'gs://testing2-4bb02.appspot.com/building1/1stfloor/B2.1.10/Screen Shot 2022-04-16 at 1.43.57 AM.png');


// document.getElementById("demo3").setAttribute("src", )


//-------------Implement picture into html file----------------
try{
getDownloadURL(storageRef).then(
        function(url){
            console.log(url);
            document.getElementById("demo3").setAttribute("src", url);
    }
)
}catch(e){
    console.log(e);
}


// getDownloadURL(ref(str, 'building1/1stfloor/B2.1.10/Screen Shot 2022-04-16 at 9.20.50 PM.png')).then(
//     function(url){
//         document.getElementById("demo4").setAttribute("src", url);
//     });
// console.log("asdasdasd")