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
    const docRefreception = doc(db,"service","reception");
    const docSnapreception= await getDoc(docRefreception);
    document.getElementById("reception-location").innerHTML = docSnapreception.data().location;
    document.getElementById("reception-description").innerHTML = docSnapreception.data().mainDescription;
    document.getElementById("reception-rule").innerHTML = docSnapreception.data().rule;
    document.getElementById("reception-permission").innerHTML = docSnapreception.data().permission;
    document.getElementById("reception-roomID").innerHTML = docSnapreception.data().roomID;
    document.getElementById("reception-time").innerHTML = docSnapreception.data().timeOpen;

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

    //library
    // const docReflib= doc(db,"service","library");
    // const docSnaplib= await getDoc(docReflib);
    // document.getElementById("library-location").innerHTML = docSnaplib.data().location;
    // document.getElementById("library-description").innerHTML = docSnaplib.data().mainDescription;
    // document.getElementById("library-rule").innerHTML =docSnaplib.data().rule;
    // document.getElementById("library-permission").innerHTML = docSnaplib.data().permission;
    // document.getElementById("library-roomID").innerHTML = docSnaplib.data().roomID;
    // document.getElementById("library-time").innerHTML = docSnaplib.data().timeOpen;
}
catch(err) {
    console.log(err);
}

const str = getStorage(app);

try{
   
    //IT DESK
    for(let i=1; i<5; i++){
        var imgRef_ = "service" +'/' + "it_desk" +"."+i+'.PNG';

        const storageRef_result = ref(str, imgRef_)
        
        getDownloadURL(storageRef_result).then(
            function(url){
                console.log(url);
                document.getElementById("it-"+i).setAttribute("src", url);
        }
    )
    }

    //sas
    for(let i=1; i<5; i++){
        var imgRef_ = "service" +'/' + "sas" +"."+i+'.PNG';

        const storageRef_result = ref(str, imgRef_)
        
        getDownloadURL(storageRef_result).then(
            function(url){
                console.log(url);
                document.getElementById("sas-"+i).setAttribute("src", url);
        }   
    )
    }

    //sos
    for(let i=1; i<5; i++){
        var imgRef_ = "service" +'/' + "sos" +"."+i+'.PNG';

        const storageRef_result = ref(str, imgRef_)
        
        getDownloadURL(storageRef_result).then(
            function(url){
                console.log(url);
                document.getElementById("sos-"+i).setAttribute("src", url);
        }
    )
    }

    //CONNECT
    for(let i=1; i<5; i++){
        var imgRef_ = "service" +'/' + "connect" +"."+i+'.PNG';

        const storageRef_result = ref(str, imgRef_)
        
        getDownloadURL(storageRef_result).then(
            function(url){
                console.log(url);
                document.getElementById("connect-"+i).setAttribute("src", url);
        }
    )
    }

    //LNF
    for(let i=1; i<5; i++){
        var imgRef_ = "service" +'/' + "lost&found" +"."+i+'.PNG';

        const storageRef_result = ref(str, imgRef_)
        
        getDownloadURL(storageRef_result).then(
            function(url){
                console.log(url);
                document.getElementById("lnf-"+i).setAttribute("src", url);
        }
    )
    }

    //Reception
    for(let i=1; i<5; i++){
        var imgRef_ = "service" +'/' + "reception" +"."+i+'.PNG';

        const storageRef_result = ref(str, imgRef_)
        
        getDownloadURL(storageRef_result).then(
            function(url){
                console.log(url);
                document.getElementById("reception-"+i).setAttribute("src", url);
        }
    )
    }

    //Sporthall
    for(let i=1; i<5; i++){
        var imgRef_ = "service" +'/' + "sporthall" +"."+i+'.PNG';

        const storageRef_result = ref(str, imgRef_)
        
        getDownloadURL(storageRef_result).then(
            function(url){
                console.log(url);
                document.getElementById("sporthall-"+i).setAttribute("src", url);
        }
    )
    }

    //Wellbeing
    for(let i=1; i<5; i++){
        var imgRef_ = "service" +'/' + "wellbeing" +"."+i+'.PNG';

        const storageRef_result = ref(str, imgRef_)
        
        getDownloadURL(storageRef_result).then(
            function(url){
                console.log(url);
                document.getElementById("wellbeing-"+i).setAttribute("src", url);
        }
    )
    }

        // //library
        // for(let i=1; i<5; i++){
        //     var imgRef_ = "service" +'/' + "library" +"."+i+'.PNG';
    
        //     const storageRef_result = ref(str, imgRef_)
            
        //     getDownloadURL(storageRef_result).then(
        //         function(url){
        //             console.log(url);
        //             document.getElementById("library-"+i).setAttribute("src", url);
        //     }
        // )
        // }

}
catch(e){
    console.log(err);
} 

function popup(){
// IT service desk image
// Image 1
var img = document.getElementById("it-1")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 2
var img = document.getElementById("it-2")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 3
var img = document.getElementById("it-3")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 4
var img = document.getElementById("it-4")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}


//SAS IMAGE POPUP
// Image 1
var img = document.getElementById("sas-1")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 2
var img = document.getElementById("sas-2")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 3
var img = document.getElementById("sas-3")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 4
var img = document.getElementById("sas-4")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

//SOS IMAGE POPUP
// Image 1
var img = document.getElementById("sos-1")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 2
var img = document.getElementById("sos-2")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 3
var img = document.getElementById("sos-3")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 4
var img = document.getElementById("sos-4")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

//Connect IMAGE POPUP
// Image 1
var img = document.getElementById("connect-1")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 2
var img = document.getElementById("connect-2")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 3
var img = document.getElementById("connect-3")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 4
var img = document.getElementById("connect-4")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

//LNF IMAGE POPUP
// Image 1
var img = document.getElementById("lnf-1")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 2
var img = document.getElementById("lnf-2")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 3
var img = document.getElementById("lnf-3")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 4
var img = document.getElementById("lnf-4")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

//reception IMAGE POPUP
// Image 1
var img = document.getElementById("reception-1")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 2
var img = document.getElementById("reception-2")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 3
var img = document.getElementById("reception-3")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 4
var img = document.getElementById("reception-4")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

//Sprothall IMAGE POPUP
// Image 1
var img = document.getElementById("sporthall-1")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 2
var img = document.getElementById("sporthall-2")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 3
var img = document.getElementById("sporthall-3")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 4
var img = document.getElementById("sporthall-4")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

//Wellbeing IMAGE POPUP
// Image 1
var img = document.getElementById("wellbeing-1")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 2
var img = document.getElementById("wellbeing-2")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 3
var img = document.getElementById("wellbeing-3")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 4
var img = document.getElementById("wellbeing-4")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

//library IMAGE POPUP
// Image 1
// var img = document.getElementById("library-1")
// var modalImg = document.getElementById("modal-img")
// img.onclick = function(){
//     modalImg.src = this.src;
// }

// // Image 2
// var img = document.getElementById("library-2")
// var modalImg = document.getElementById("modal-img")
// img.onclick = function(){
//     modalImg.src = this.src;
// }

// // Image 3
// var img = document.getElementById("library-3")
// var modalImg = document.getElementById("modal-img")
// img.onclick = function(){
//     modalImg.src = this.src;
// }

// // Image 4
// var img = document.getElementById("library-4")
// var modalImg = document.getElementById("modal-img")
// img.onclick = function(){
//     modalImg.src = this.src;
// }

}
popup();



