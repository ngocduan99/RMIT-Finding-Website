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
function SearchBar(){
    var searchbarinput = document.getElementById("searchbar");
    var filter = searchbarinput.value.toUpperCase();
    var ul= document.getElementById("myUL");
    var li = ul.getElementsByTagName("li");
    var i;
    var a;
    var Inputvalue;
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        Inputvalue = a.textContent || a.innerText;
        if (Inputvalue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display="";
            li[i].style.visibility = "visible";
        } 
        else {
            li[i].style.display="none";
            li[i].style.visibility = "hidden";
        }

    }
};




/* ==================MAIN===============*/

/*Change image Slider*/
let thumbnails = document.getElementsByClassName('thumbnail')

let activeImages = document.getElementsByClassName('active')

for (var i=0; i < thumbnails.length; i++){

    thumbnails[i].addEventListener('mouseover', function(){
        console.log(activeImages)
        
        if (activeImages.length > 0){
            activeImages[0].classList.remove('active')
        }
        

        this.classList.add('active')
        document.getElementById('featured').src = this.src
    })
}


let buttonRight = document.getElementById('slideRight');
let buttonLeft = document.getElementById('slideLeft');

buttonLeft.addEventListener('click', function(){
    document.getElementById('slider').scrollLeft -= 180
})

buttonRight.addEventListener('click', function(){
    document.getElementById('slider').scrollLeft += 180
})


/* Tuan part */

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

// var input = "B2.02.02";
// var input = "B1.01.01";

var input = document.getElementById("searchbar").value;  
console.log(input);
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

// //

try{
    const docRef = doc(db, buildingNum, roomNum);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    document.getElementById("main-room-description").innerHTML = docSnap.data().mainDescription;
    document.getElementById("time-open-description").innerHTML = docSnap.data().timeOpen;
    document.getElementById("optional-usage").innerHTML = docSnap.data().optionalUsage;
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

// // key & value image
const str = getStorage(app);
var imgRef = buildingNum +'/' + roomNum +'.png';
const storageRef = ref(str, imgRef);

// Implement picture into html file
try{
    getDownloadURL(storageRef).then(
            function(url){
                console.log(url);
                document.getElementById("test-image").setAttribute("src", url);
        }
    )

    }catch(e){
        console.log(err);
    }
