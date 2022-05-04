

/* ==================MAIN===============*/

/* Tuan part */
// getDATA();
// document.getElementById("search-button").onclick = function(){
//     var input = document.getElementById("search-input").value;
//     console.log(input);
// }


// //JSON: Javascript Object Notation
// console.log("this is javascript");

// //fetch () return a PROMISE in RESOLVES status with the value RESPONSE for that request
// fetch ("data.json")
//         .then(response => response.json()) //must have to read the json file
//         .then(data =>{
//             console.log(data);
//             document.getElementById("demo").innerHTML = data.name;

//         });

// Import the functions you need from the SDKs you need
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


// // Implement DATA
var input = localStorage.getItem("userInput")

if(input != ""){
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
            document.getElementById("room-id").innerHTML = docSnap.data().location;
            document.getElementById("main-room-description").innerHTML = docSnap.data().mainDescription;
            document.getElementById("time-open-description").innerHTML = docSnap.data().timeOpen;
            document.getElementById("optional-usage").innerHTML = docSnap.data().optionalUsage;
            document.getElementById("room-rule-description").innerHTML = docSnap.data().rule;
            // display room name
            document.getElementById("display-mess").innerHTML = docSnap.data().roomName;

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

}
else{
    location.replace("index.html");
}




// key & value image
const str = getStorage(app);
// var imgRef_1 = buildingNum +'/' + roomNum +'.1.PNG';
// var imgRef_2 = buildingNum +'/' + roomNum +'.2.PNG';
// var imgRef_3 = buildingNum +'/' + roomNum +'.3.PNG';
// var imgRef_4 = buildingNum +'/' + roomNum +'.4.PNG';



// const storageRef_1 = ref(str, imgRef_1);
// const storageRef_2 = ref(str, imgRef_2);
// const storageRef_3 = ref(str, imgRef_3);
// const storageRef_4 = ref(str, imgRef_4);


// Implement picture into html file
try{
   
    for(let i=1; i<5; i++){
        var imgRef_ = buildingNum +'/' + roomNum +"."+i+'.PNG';

        const storageRef_result = ref(str, imgRef_)
        
        getDownloadURL(storageRef_result).then(
            function(url){
                console.log(url);
                document.getElementById("room-img-"+i).setAttribute("src", url);
        }
    )
    }
}
catch(e){
    console.log(err);
} 
    // getDownloadURL(storageRef_2).then(
    //     function(url2){
    //         console.log(url2);
    //         document.getElementById("room-img-2").setAttribute("src", url2);
    // }
    
    // )




    
// try{
//     getDownloadURL(storageRef_2).then(
//         function(url){
//             console.log(url);
//             document.getElementById("room-img-2").setAttribute("src", url);
//             }
//     )
// }
// catch(e){
//     console.log(err);
// }    

// try{
//     getDownloadURL(storageRef_3).then(
//         function(url){
//             console.log(url);
//             document.getElementById("room-img-3").setAttribute("src", url);
//         }
//     )
//     }
// catch(e){
//     console.log(err);
// }

// try{
//     getDownloadURL(storageRef_4).then(
//             function(url){
//                 console.log(url);
//                 document.getElementById("room-img-4").setAttribute("src", url);
//         }
//     )
//     }
// catch(e){
//     console.log(err);
// }
            

/*=====Duan part====*/ 
// Get the image and insert it into the modal

// Image 1
var img = document.getElementById("room-img-1")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 2
var img = document.getElementById("room-img-2")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 3
var img = document.getElementById("room-img-3")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 4
var img = document.getElementById("room-img-4")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}