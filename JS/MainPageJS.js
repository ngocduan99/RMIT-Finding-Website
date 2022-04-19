
/*================SEARCHBAR==================*/

/* Alert function (Duan part test) */
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
searchButton.addEventListener('click', () => {
  const inputValue = searchInput.value;
  alert(inputValue);
});

// This is the model function alert in boostrap, Nick dua theo ma lam nhoa






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

// get user input
localStorage.clear();
document.getElementById("btsearch").onclick =function(){
    var input = document.getElementById("search-bar-main").value;
    var data = input.toUpperCase();
    console.log(input);
    localStorage.setItem("userInput",data);
    location.replace("displayPage.html")
};

// if(buildingNum != ""){
//    
// }
// else{
//     location.reload();
// }
// Initialize Firebase and Firebase-services

   