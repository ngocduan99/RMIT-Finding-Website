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
   

     //Asian data
     const docRefasian = doc(db,"F&B","Asian");
     const docSnapasian = await getDoc(docRefasian);
         document.getElementById("asian-location").innerHTML = docSnapasian.data().location;
         document.getElementById("asian-description").innerHTML = docSnapasian.data().mainDescription;
         document.getElementById("asian-price").innerHTML = docSnapasian.data().price;
        
         document.getElementById("asian-rules").innerHTML = docSnapasian.data().rule;
         document.getElementById("asian-time").innerHTML = docSnapasian.data().timeOpen;

  //Bobby Brewers data
  const docRefbb = doc(db,"F&B","Bobby_Brewers");
  const docSnapbb = await getDoc(docRefbb);
      document.getElementById("Bobby_Brewers-location").innerHTML = docSnapbb.data().location;
      document.getElementById("Bobby_Brewers-description").innerHTML = docSnapbb.data().mainDescription;
      document.getElementById("Bobby_Brewers-price").innerHTML = docSnapbb.data().price;
   
      document.getElementById("Bobby_Brewers-rules").innerHTML = docSnapbb.data().rule;
      document.getElementById("Bobby_Brewers-time").innerHTML = docSnapbb.data().timeOpen;

        //Boost data
  const docRefboost = doc(db,"F&B","Boost");
  const docSnapboost = await getDoc(docRefboost);
      document.getElementById("boost-location").innerHTML = docSnapboost.data().location;
      document.getElementById("boost-description").innerHTML = docSnapboost.data().mainDescription;
      document.getElementById("boost-price").innerHTML = docSnapboost.data().price;
   
      document.getElementById("boost-rules").innerHTML = docSnapboost.data().rule;
      document.getElementById("boost-time").innerHTML = docSnapboost.data().timeOpen;

        //Catina data
        const docRefcat = doc(db,"F&B","Catina");
  const docSnapcat = await getDoc(docRefcat);
      document.getElementById("cat-location").innerHTML = docSnapcat.data().location;
      document.getElementById("cat-description").innerHTML = docSnapcat.data().mainDescription;
      document.getElementById("cat-price").innerHTML = docSnapcat.data().price;
      
      document.getElementById("cat-rules").innerHTML = docSnapcat.data().rule;
      document.getElementById("cat-time").innerHTML = docSnapcat.data().timeOpen;

      //Circle_K
      const docRefck = doc(db,"F&B","Circle_K");
      const docSnapck = await getDoc(docRefck);
          document.getElementById("ck-location").innerHTML = docSnapck.data().location;
          document.getElementById("ck-description").innerHTML = docSnapck.data().mainDescription;
          document.getElementById("ck-price").innerHTML = docSnapck.data().price;
    
          document.getElementById("ck-rules").innerHTML = docSnapck.data().rule;
          document.getElementById("ck-time").innerHTML = docSnapck.data().timeOpen;
    
          //Curry_Hut
          const docRefch = doc(db,"F&B","Curry_Hut");
      const docSnapch = await getDoc(docRefch);
          document.getElementById("ch-location").innerHTML = docSnapch.data().location;
          document.getElementById("ch-description").innerHTML = docSnapch.data().mainDescription;
          document.getElementById("ch-price").innerHTML = docSnapch.data().price;
          
          document.getElementById("ch-rules").innerHTML = docSnapch.data().rule;
          document.getElementById("ch-time").innerHTML = docSnapch.data().timeOpen;

          //Global Cafe
          const docRefgc = doc(db,"F&B","Global");
          const docSnapgc = await getDoc(docRefgc);
              document.getElementById("gc-location").innerHTML = docSnapgc.data().location;
              document.getElementById("gc-description").innerHTML = docSnapgc.data().mainDescription;
              document.getElementById("gc-price").innerHTML = docSnapgc.data().price;
             
              document.getElementById("gc-rules").innerHTML = docSnapgc.data().rule;
              document.getElementById("gc-time").innerHTML = docSnapgc.data().timeOpen;

        // Highland Cafe
        const docRefhl = doc(db,"F&B","HighLand");
        const docSnaphl = await getDoc(docRefhl);
            document.getElementById("highland-location").innerHTML = docSnaphl.data().location;
            document.getElementById("highland-description").innerHTML = docSnaphl.data().mainDescription;
            document.getElementById("highland-price").innerHTML = docSnaphl.data().price;
          
            document.getElementById("highland-rules").innerHTML = docSnaphl.data().rule;
            document.getElementById("highland-time").innerHTML = docSnaphl.data().timeOpen;

            // Lyon
        const docReflygon = doc(db,"F&B","Lygon");
        const docSnaplygon = await getDoc(docReflygon);
            document.getElementById("lygon-location").innerHTML = docSnaplygon.data().location;
            document.getElementById("lygon-description").innerHTML = docSnaplygon.data().mainDescription;
            document.getElementById("lygon-price").innerHTML = docSnaplygon.data().price;
           
            document.getElementById("lygon-rules").innerHTML = docSnaplygon.data().rule;
            document.getElementById("lygon-time").innerHTML = docSnaplygon.data().timeOpen;

             // Nine
             const docRef9 = doc(db,"F&B","Nine");
             const docSnap9 = await getDoc(docRef9);
                 document.getElementById("9-location").innerHTML = docSnap9.data().location;
                 document.getElementById("9-description").innerHTML = docSnap9.data().mainDescription;
                 document.getElementById("9-price").innerHTML = docSnap9.data().price;
              
                 document.getElementById("9-rules").innerHTML = docSnap9.data().rule;
                 document.getElementById("9-time").innerHTML = docSnap9.data().timeOpen;

             // Noodles
             const docRefnoodle = doc(db,"F&B","Noodles");
             const docSnapnoodle = await getDoc(docRefnoodle);
                 document.getElementById("noodle-location").innerHTML = docSnapnoodle.data().location;
                 document.getElementById("noodle-description").innerHTML = docSnapnoodle.data().mainDescription;
                 document.getElementById("noodle-price").innerHTML = docSnapnoodle.data().price;
    
                 document.getElementById("noodle-rules").innerHTML = docSnapnoodle.data().rule;
                 document.getElementById("noodle-time").innerHTML = docSnapnoodle.data().timeOpen;

             // Sorento
             const docRefsorento = doc(db,"F&B","Sorento");
             const docSnapsorento = await getDoc(docRefsorento);
                 document.getElementById("sorento-location").innerHTML = docSnapsorento.data().location;
                 document.getElementById("sorento-description").innerHTML = docSnapsorento.data().mainDescription;
                 document.getElementById("sorento-price").innerHTML = docSnapsorento.data().price;
            
                 document.getElementById("sorento-rules").innerHTML = docSnapsorento.data().rule;
                 document.getElementById("sorento-time").innerHTML = docSnapsorento.data().timeOpen;

             // Vua Banh Mi
             const docRefvbm = doc(db,"F&B","Vua_Banh_Mi");
             const docSnapvbm = await getDoc(docRefvbm);
                 document.getElementById("vbm-location").innerHTML = docSnapvbm.data().location;
                 document.getElementById("vbm-description").innerHTML = docSnapvbm.data().mainDescription;
                 document.getElementById("vbm-price").innerHTML = docSnapvbm.data().price;
                
                 document.getElementById("vbm-rules").innerHTML = docSnapvbm.data().rule;
                 document.getElementById("vbm-time").innerHTML = docSnapvbm.data().timeOpen;

            //Xiao Ban
            const docRefxiao = doc(db,"F&B","Xiao_Ban");
            const docSnapxiao = await getDoc(docRefxiao);
                document.getElementById("xiao-location").innerHTML = docSnapxiao.data().location;
                document.getElementById("xiao-description").innerHTML = docSnapxiao.data().mainDescription;
                document.getElementById("xiao-price").innerHTML = docSnapxiao.data().price;
          
                document.getElementById("xiao-rules").innerHTML = docSnapxiao.data().rule;
                document.getElementById("xiao-time").innerHTML = docSnapxiao.data().timeOpen;

            //Corners
            const docRefcorners = doc(db,"F&B","Corner");
            const docSnapcorners = await getDoc(docRefcorners);
                document.getElementById("corners-location").innerHTML = docSnapcorners.data().location;
                document.getElementById("corners-description").innerHTML = docSnapcorners.data().mainDescription;
                document.getElementById("corners-price").innerHTML = docSnapcorners.data().price;
          
                document.getElementById("corners-rules").innerHTML = docSnapcorners.data().rule;
                document.getElementById("corners-time").innerHTML = docSnapcorners.data().timeOpen;
}
catch(err) {
    console.log(err);
}


const str = getStorage(app);
try{
    // Asian
    for(let i=1; i<5; i++){
        var imgRef_ = "f&b" +'/' + "asian" +"."+i+'.PNG';

        const storageRef_result = ref(str, imgRef_)
        
        getDownloadURL(storageRef_result).then(
            function(url){
                console.log(url);
                document.getElementById("asian-"+i).setAttribute("src", url);
        }
    )
    }

    //Bobby Brewers
    for(let i=1; i<5; i++){
        var imgRef_ = "f&b" +'/' + "bobbybrewers" +"."+i+'.PNG';

        const storageRef_result = ref(str, imgRef_)
        
        getDownloadURL(storageRef_result).then(
            function(url){
                console.log(url);
                document.getElementById("bobbybrewers-"+i).setAttribute("src", url);
        }
    )
    }

    //Boost
     for(let i=1; i<5; i++){
        var imgRef_ = "f&b" +'/' + "boost" +"."+i+'.PNG';

        const storageRef_result = ref(str, imgRef_)
        
        getDownloadURL(storageRef_result).then(
            function(url){
                console.log(url);
                document.getElementById("boost-"+i).setAttribute("src", url);
        }
    )
    }

    //Catina
    for(let i=1; i<5; i++){
        var imgRef_ = "f&b" +'/' + "lacantina" +"."+i+'.PNG';

        const storageRef_result = ref(str, imgRef_)
        
        getDownloadURL(storageRef_result).then(
            function(url){
                console.log(url);
                document.getElementById("catina-"+i).setAttribute("src", url);
        }
    )
    }
    //Circle K
    for(let i=1; i<5; i++){
        var imgRef_ = "f&b" +'/' + "circlek" +"."+i+'.PNG';

        const storageRef_result = ref(str, imgRef_)
        
        getDownloadURL(storageRef_result).then(
            function(url){
                console.log(url);
                document.getElementById("circle-k-"+i).setAttribute("src", url);
        }
    )
    }

    //Curry Hut
    for(let i=1; i<5; i++){
        var imgRef_ = "f&b" +'/' + "curry" +"."+i+'.PNG';

        const storageRef_result = ref(str, imgRef_)
        
        getDownloadURL(storageRef_result).then(
            function(url){
                console.log(url);
                document.getElementById("curry-hut-"+i).setAttribute("src", url);
        }
    )
    }

    //Global Cafe
    for(let i=1; i<5; i++){
        var imgRef_ = "f&b" +'/' + "global" +"."+i+'.PNG';

        const storageRef_result = ref(str, imgRef_)
        
        getDownloadURL(storageRef_result).then(
            function(url){
                console.log(url);
                document.getElementById("global-cafe-"+i).setAttribute("src", url);
        }
    )
    }

    //Highland
    for(let i=1; i<5; i++){
        var imgRef_ = "f&b" +'/' + "highland" +"."+i+'.PNG';

        const storageRef_result = ref(str, imgRef_)
        
        getDownloadURL(storageRef_result).then(
            function(url){
                console.log(url);
                document.getElementById("highland-"+i).setAttribute("src", url);
        }
    )
    }

    //Lygon
    for(let i=1; i<5; i++){
        var imgRef_ = "f&b" +'/' + "lygon" +"."+i+'.PNG';

        const storageRef_result = ref(str, imgRef_)
        
        getDownloadURL(storageRef_result).then(
            function(url){
                console.log(url);
                document.getElementById("lygon-"+i).setAttribute("src", url);
        }
    )
    }

    //Nine
    for(let i=1; i<5; i++){
        var imgRef_ = "f&b" +'/' + "nine" +"."+i+'.PNG';

        const storageRef_result = ref(str, imgRef_)
        
        getDownloadURL(storageRef_result).then(
            function(url){
                console.log(url);
                document.getElementById("nine-"+i).setAttribute("src", url);
        }
    )
    }

    //Noodles
    for(let i=1; i<5; i++){
        var imgRef_ = "f&b" +'/' + "noodle" +"."+i+'.PNG';

        const storageRef_result = ref(str, imgRef_)
        
        getDownloadURL(storageRef_result).then(
            function(url){
                console.log(url);
                document.getElementById("noodles-"+i).setAttribute("src", url);
        }
    )
    }

    //Sorento
    for(let i=1; i<5; i++){
        var imgRef_ = "f&b" +'/' + "sorento" +"."+i+'.PNG';

        const storageRef_result = ref(str, imgRef_)
        
        getDownloadURL(storageRef_result).then(
            function(url){
                console.log(url);
                document.getElementById("sorento-"+i).setAttribute("src", url);
        }
    )
    }

    //Vua Banh Mi
    for(let i=1; i<5; i++){
        var imgRef_ = "f&b" +'/' + "vuabanhmi" +"."+i+'.PNG';

        const storageRef_result = ref(str, imgRef_)
        
        getDownloadURL(storageRef_result).then(
            function(url){
                console.log(url);
                document.getElementById("vbm-"+i).setAttribute("src", url);
        }
    )
    }

    //Xiao Ban
    for(let i=1; i<5; i++){
        var imgRef_ = "f&b" +'/' + "xiaoban" +"."+i+'.PNG';

        const storageRef_result = ref(str, imgRef_)
        
        getDownloadURL(storageRef_result).then(
            function(url){
                console.log(url);
                document.getElementById("xiao-"+i).setAttribute("src", url);
        }
    )
    }

    //Corners
    for(let i=1; i<5; i++){
        var imgRef_ = "f&b" +'/' + "corner" +"."+i+'.PNG';

        const storageRef_result = ref(str, imgRef_)
        
        getDownloadURL(storageRef_result).then(
            function(url){
                console.log(url);
                document.getElementById("corners-"+i).setAttribute("src", url);
        }
    )
    }
}
catch(err) {
    console.log(err);
}

function popup(){
// Asian
// Image 1
var img = document.getElementById("asian-1")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 2
var img = document.getElementById("asian-2")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 3
var img = document.getElementById("asian-3")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 4
var img = document.getElementById("asian-4")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

//Bobby Brewers
// Image 1
var img = document.getElementById("bobbybrewers-1")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 2
var img = document.getElementById("bobbybrewers-2")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 3
var img = document.getElementById("bobbybrewers-3")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 4
var img = document.getElementById("bobbybrewers-4")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

//Boost
// Image 1
var img = document.getElementById("boost-1")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 2
var img = document.getElementById("boost-2")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 3
var img = document.getElementById("boost-3")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 4
var img = document.getElementById("boost-4")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

//La Catina
// Image 1
var img = document.getElementById("catina-1")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 2
var img = document.getElementById("catina-2")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 3
var img = document.getElementById("catina-3")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 4
var img = document.getElementById("catina-4")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

//Circle K
// Image 1
var img = document.getElementById("circle-k-1")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 2
var img = document.getElementById("circle-k-2")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 3
var img = document.getElementById("circle-k-3")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 4
var img = document.getElementById("circle-k-4")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

//Curry Hut
// Image 1
var img = document.getElementById("curry-hut-1")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 2
var img = document.getElementById("curry-hut-2")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 3
var img = document.getElementById("curry-hut-3")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 4
var img = document.getElementById("curry-hut-4")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

//Global Cafe
// Image 1
var img = document.getElementById("global-cafe-1")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 2
var img = document.getElementById("global-cafe-2")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 3
var img = document.getElementById("global-cafe-3")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 4
var img = document.getElementById("global-cafe-4")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

//Highland
// Image 1
var img = document.getElementById("highland-1")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 2
var img = document.getElementById("highland-2")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 3
var img = document.getElementById("highland-3")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 4
var img = document.getElementById("highland-4")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}


//Lygon
// Image 1
var img = document.getElementById("lygon-1")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 2
var img = document.getElementById("lygon-2")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 3
var img = document.getElementById("lygon-3")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 4
var img = document.getElementById("lygon-4")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

//Nine
// Image 1
var img = document.getElementById("nine-1")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 2
var img = document.getElementById("nine-2")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 3
var img = document.getElementById("nine-3")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 4
var img = document.getElementById("nine-4")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

//Noodles
// Image 1
var img = document.getElementById("noodles-1")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 2
var img = document.getElementById("noodles-2")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 3
var img = document.getElementById("noodles-3")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 4
var img = document.getElementById("noodles-4")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

//Sorento
// Image 1
var img = document.getElementById("sorento-1")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 2
var img = document.getElementById("sorento-2")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 3
var img = document.getElementById("sorento-3")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 4
var img = document.getElementById("sorento-4")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}


//Vua Banh Mi
// Image 1
var img = document.getElementById("vbm-1")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 2
var img = document.getElementById("vbm-2")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 3
var img = document.getElementById("vbm-3")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 4
var img = document.getElementById("vbm-4")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

//XiaoBan
// Image 1
var img = document.getElementById("xiao-1")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 2
var img = document.getElementById("xiao-2")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 3
var img = document.getElementById("xiao-3")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 4
var img = document.getElementById("xiao-4")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

//Corners
// Image 1
var img = document.getElementById("corners-1")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 2
var img = document.getElementById("corners-2")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 3
var img = document.getElementById("corners-3")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

// Image 4
var img = document.getElementById("corners-4")
var modalImg = document.getElementById("modal-img")
img.onclick = function(){
    modalImg.src = this.src;
}

}




popup();