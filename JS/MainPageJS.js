/*=============NAV MENU SHOW===============*/
const showMenu = (headerToggle,navbarID) =>{
    const toggleBtn = document.getElementById(headerToggle),
    nav = document.getElementById(navbarID)

    if(headerToggle && navbarID){
        toggleBtn.addEventListener('click', () => {
            //add show_menu class to nav_menu class
            nav.classList.toggle('show_menu')

            //Change icon
            toggleBtn.classList.toggle('bx-x')
        })
    }
}

showMenu('toggle','navbar')


/*=============CHANGE COLOR===============*/
const linkColor = document.querySelectorAll('.nav_link')

function colorLink(){
    linkColor.forEach(l => l.classList.remove('active'))
    this.classList.add('active')
}

linkColor.forEach(l => l.addEventListener('click',colorLink))

/*================SEARCHBAR==================*/

/* Searchbar filter function */
// function SearchBar(){
//     var searchbarinput = document.getElementById("searchbar");
//     var filter = searchbarinput.value.toUpperCase();
//     var ul= document.getElementById("myUL");
//     var li = ul.getElementsByTagName("li");
//     var i;
//     var a;
//     var Inputvalue;
//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByTagName("a")[0];
//         Inputvalue = a.textContent || a.innerText;
//         if (Inputvalue.toUpperCase().indexOf(filter)>-1) {
//             li[i].style.display="";
//             li[i].style.visibility = "visible";
//         }
//         else {
//             li[i].style.display="none";
//             li[i].style.visibility = "hidden";
//         };
//     };
// };
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";

import { collection, doc, getDoc, setDoc, getFirestore } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";
import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyAYuccRNRZU-JUI5HqF-Pr4_q14d_gn5mE",
    authDomain: "rmit-finding.firebaseapp.com",
    projectId: "rmit-finding",
    storageBucket: "rmit-finding.appspot.com",
    messagingSenderId: "588772101914",
    appId: "1:588772101914:web:57858d4a30dc76d4fca6a3"
  };



  var buildingNum , roomNum;

  document.getElementById("btsearch").onclick =function(){
    var input = document.getElementById("search-bar-main").value;  
    console.log(input);
     localStorage.setItem("userInput",input);
   

    const inputArr = [];
    for (let index = 0; index < 3; index++) {
        inputArr[index] = input.split(".")[index];
    }

     buildingNum = inputArr[0];
    roomNum =inputArr[1]+"."+inputArr[2];
    console.log(buildingNum);
    console.log(roomNum);
    
  };


  
  
    // firebaseConfig
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
        try{
            const docRec = doc(db, buildingNum, roomNum);
            const docSnap = await getDoc(docRec);
            if(docSnap.exists()){
            location.replace("displayPage.html");
                
            }
            else{
            location.reload();
                
            }
        }
        catch(err) {
            console.log("Error");
        };



// if(buildingNum != ""){
//    
// }
// else{
//     location.reload();
// }
// Initialize Firebase and Firebase-services

   