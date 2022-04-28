
/*================SEARCHBAR==================*/

/* Alert function (Duan part test) */
// const searchButton = document.getElementById('search-button');
// const searchInput = document.getElementById('search-input');
// searchButton.addEventListener('click', () => {
//   const inputValue = searchInput.value;
//   alert(inputValue);
// });


// Get user input
// localStorage.clear();

// document.getElementById("search-button").onclick =function(){
//     var input = document.getElementById("search-input").value;
    
//     if(input != ""){
//         var data = input.toUpperCase();
//         localStorage.setItem("userInput",data);
//         location.replace("displayPage.html")
//     }
//     else{
//         alert("Please input Room Number or School service")
//         location.reload();
//     }
// };



function checkdone(){
    var input = document.getElementById("search-input").value;
    
    if(input != ""){
        var data = input.toUpperCase();
        localStorage.setItem("userInput",data);
        location.replace("displayPage.html")
    }
    else{
        alert("Please input Room Number or School service")
        location.reload();
    }
}

document.getElementById("search-button").onclick =function(){
    var elem = document.getElementById("search-input").value;
    var re = /^[bB]+[1-9"10"]+\.+[0][1-5]+\.+[0-9][0-9]$/;

    if(re.test(elem)){
       checkdone();
    }
    else{
        alert("Wrong input type")
        location.reload();
    }
  
}



//check not null, bắt đầu bằng "B","b", 8-9 kí tự
// mỗi trường hợp sai sẽ đưa ra lỗi đó 
// document.getElementById("search-button").onclick =function(){
// var input = document.getElementById("search-input").value;
// var pattern = elem.getAttribute("B+[0-9]+\.+[0-9]+\.+[0-9]+{8}");
//         var re = new RegExp(pattern);
// if(re.test(input)){

//     localStorage.clear();
//     var input = document.getElementById("search-input").value;
//     if(input != ""){
//         var data = input.toUpperCase();
//         localStorage.setItem("userInput",data);
//         location.replace("displayPage.html");
//     }
//     else{
//         alert("Please input Room Number or School service");
//         location.reload();
//     };

// }
// else{
//     alert("Wrong");
// }
// };

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

var inputValue = document.getElementById("search-input").value;

let room= doc(db,'B1/01.01');

console.log(room);
console.log(collection);