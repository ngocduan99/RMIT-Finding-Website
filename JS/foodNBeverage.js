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
         document.getElementById("asian-name").innerHTML = docSnapasian.data().roomName;
         document.getElementById("asian-rules").innerHTML = docSnapasian.data().rule;
         document.getElementById("asian-time").innerHTML = docSnapasian.data().timeOpen;

  //Bobby Brewers data
  const docRefbb = doc(db,"F&B","Bobby_Brewers");
  const docSnapbb = await getDoc(docRefbb);
      document.getElementById("Bobby_Brewers-location").innerHTML = docSnapbb.data().location;
      document.getElementById("Bobby_Brewers-description").innerHTML = docSnapbb.data().mainDescription;
      document.getElementById("Bobby_Brewers-price").innerHTML = docSnapbb.data().price;
      document.getElementById("Bobby_Brewers-name").innerHTML = docSnapbb.data().roomName;
      document.getElementById("Bobby_Brewers-rules").innerHTML = docSnapbb.data().rule;
      document.getElementById("Bobby_Brewers-time").innerHTML = docSnapbb.data().timeOpen;

        //Boost data
  const docRefboost = doc(db,"F&B","Bobby_Brewers");
  const docSnapboost = await getDoc(docRefboost);
      document.getElementById("boost-location").innerHTML = docSnapboost.data().location;
      document.getElementById("boost-description").innerHTML = docSnapboost.data().mainDescription;
      document.getElementById("boost-price").innerHTML = docSnapboost.data().price;
      document.getElementById("boost-name").innerHTML = docSnapboost.data().roomName;
      document.getElementById("boost-rules").innerHTML = docSnapboost.data().rule;
      document.getElementById("boost-time").innerHTML = docSnapboost.data().timeOpen;

        //Catina data
        const docRefcat = doc(db,"F&B","Catina");
  const docSnapcat = await getDoc(docRefcat);
      document.getElementById("cat-location").innerHTML = docSnapcat.data().location;
      document.getElementById("cat-description").innerHTML = docSnapcat.data().mainDescription;
      document.getElementById("cat-price").innerHTML = docSnapcat.data().price;
      document.getElementById("cat-name").innerHTML = docSnapcat.data().roomName;
      document.getElementById("cat-rules").innerHTML = docSnapcat.data().rule;
      document.getElementById("cat-time").innerHTML = docSnapcat.data().timeOpen;

      //Circle_K
      const docRefck = doc(db,"F&B","Circle_K");
      const docSnapck = await getDoc(docRefck);
          document.getElementById("ck-location").innerHTML = docSnapck.data().location;
          document.getElementById("ck-description").innerHTML = docSnapck.data().mainDescription;
          document.getElementById("ck-price").innerHTML = docSnapck.data().price;
          document.getElementById("ck-name").innerHTML = docSnapck.data().roomName;
          document.getElementById("ck-rules").innerHTML = docSnapck.data().rule;
          document.getElementById("ck-time").innerHTML = docSnapck.data().timeOpen;
    
          //Curry_Hut
          const docRefch = doc(db,"F&B","Curry_Hut");
      const docSnapch = await getDoc(docRefch);
          document.getElementById("ch-location").innerHTML = docSnapch.data().location;
          document.getElementById("ch-description").innerHTML = docSnapch.data().mainDescription;
          document.getElementById("ch-price").innerHTML = docSnapch.data().price;
          document.getElementById("ch-name").innerHTML = docSnapch.data().roomName;
          document.getElementById("ch-rules").innerHTML = docSnapch.data().rule;
          document.getElementById("ch-time").innerHTML = docSnapch.data().timeOpen;

          //Global Cafe
          const docRefgc = doc(db,"F&B","Global");
          const docSnapgc = await getDoc(docRefgc);
              document.getElementById("gc-location").innerHTML = docSnapgc.data().location;
              document.getElementById("gc-description").innerHTML = docSnapgc.data().mainDescription;
              document.getElementById("gc-price").innerHTML = docSnapgc.data().price;
              document.getElementById("gc-name").innerHTML = docSnapgc.data().roomName;
              document.getElementById("gc-rules").innerHTML = docSnapgc.data().rule;
              document.getElementById("gc-time").innerHTML = docSnapgc.data().timeOpen;

        // Highland Cafe
        const docRefhl = doc(db,"F&B","HighLand");
        const docSnaphl = await getDoc(docRefhl);
            document.getElementById("highland-location").innerHTML = docSnaphl.data().location;
            document.getElementById("highland-description").innerHTML = docSnaphl.data().mainDescription;
            document.getElementById("highland-price").innerHTML = docSnaphl.data().price;
            document.getElementById("highland-name").innerHTML = docSnaphl.data().roomName;
            document.getElementById("highland-rules").innerHTML = docSnaphl.data().rule;
            document.getElementById("highland-time").innerHTML = docSnaphl.data().timeOpen;

            // Lyon
        const docReflygon = doc(db,"F&B","Lygon");
        const docSnaplygon = await getDoc(docReflygon);
            document.getElementById("lygon-location").innerHTML = docSnaplygon.data().location;
            document.getElementById("lygon-description").innerHTML = docSnaplygon.data().mainDescription;
            document.getElementById("lygon-price").innerHTML = docSnaplygon.data().price;
            document.getElementById("lygon-name").innerHTML = docSnaplygon.data().roomName;
            document.getElementById("lygon-rules").innerHTML = docSnaplygon.data().rule;
            document.getElementById("lygon-time").innerHTML = docSnaplygon.data().timeOpen;

             // Nine
             const docRef9 = doc(db,"F&B","Nine");
             const docSnap9 = await getDoc(docRef9);
                 document.getElementById("9-location").innerHTML = docSnap9.data().location;
                 document.getElementById("9-description").innerHTML = docSnap9.data().mainDescription;
                 document.getElementById("9-price").innerHTML = docSnap9.data().price;
                 document.getElementById("9-name").innerHTML = docSnap9.data().roomName;
                 document.getElementById("9-rules").innerHTML = docSnap9.data().rule;
                 document.getElementById("9-time").innerHTML = docSnap9.data().timeOpen;

             // Noodles
             const docRefnoodle = doc(db,"F&B","Noodles");
             const docSnapnoodle = await getDoc(docRefnoodle);
                 document.getElementById("noodle-location").innerHTML = docSnapnoodle.data().location;
                 document.getElementById("noodle-description").innerHTML = docSnapnoodle.data().mainDescription;
                 document.getElementById("noodle-price").innerHTML = docSnapnoodle.data().price;
                 document.getElementById("noodle-name").innerHTML = docSnapnoodle.data().roomName;
                 document.getElementById("noodle-rules").innerHTML = docSnapnoodle.data().rule;
                 document.getElementById("noodle-time").innerHTML = docSnapnoodle.data().timeOpen;

             // Sorento
             const docRefsorento = doc(db,"F&B","Sorento");
             const docSnapsorento = await getDoc(docRefsorento);
                 document.getElementById("sorento-location").innerHTML = docSnapsorento.data().location;
                 document.getElementById("sorento-description").innerHTML = docSnapsorento.data().mainDescription;
                 document.getElementById("sorento-price").innerHTML = docSnapsorento.data().price;
                 document.getElementById("sorento-name").innerHTML = docSnapsorento.data().roomName;
                 document.getElementById("sorento-rules").innerHTML = docSnapsorento.data().rule;
                 document.getElementById("sorento-time").innerHTML = docSnapsorento.data().timeOpen;

             // Vua Banh Mi
             const docRefvbm = doc(db,"F&B","Vua_Banh_Mi");
             const docSnapvbm = await getDoc(docRefvbm);
                 document.getElementById("vbm-location").innerHTML = docSnapvbm.data().location;
                 document.getElementById("vbm-description").innerHTML = docSnapvbm.data().mainDescription;
                 document.getElementById("vbm-price").innerHTML = docSnapvbm.data().price;
                 document.getElementById("vbm-name").innerHTML = docSnapvbm.data().roomName;
                 document.getElementById("vbm-rules").innerHTML = docSnapvbm.data().rule;
                 document.getElementById("vbm-time").innerHTML = docSnapvbm.data().timeOpen;

            //Xiao Ban
            const docRefxiao = doc(db,"F&B","Xiao_Ban");
            const docSnapxiao = await getDoc(docRefxiao);
                document.getElementById("xiao-location").innerHTML = docSnapxiao.data().location;
                document.getElementById("xiao-description").innerHTML = docSnapxiao.data().mainDescription;
                document.getElementById("xiao-price").innerHTML = docSnapxiao.data().price;
                document.getElementById("xiao-name").innerHTML = docSnapxiao.data().roomName;
                document.getElementById("xiao-rules").innerHTML = docSnapxiao.data().rule;
                document.getElementById("xiao-time").innerHTML = docSnapxiao.data().timeOpen;
}
catch(err) {
    console.log(err);
}