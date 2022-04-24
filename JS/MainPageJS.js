
/*================SEARCHBAR==================*/

/* Alert function (Duan part test) */
// const searchButton = document.getElementById('search-button');
// const searchInput = document.getElementById('search-input');
// searchButton.addEventListener('click', () => {
//   const inputValue = searchInput.value;
//   alert(inputValue);
// });


// Get user input
localStorage.clear();

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
    var re = /^[Bb]+[0-10]+\.+[0][1-5]+\.+[0-9][0-9]$/;

    if(re.test(elem)){
       checkdone();
    }
    else{
        alert("Your Input is Wrong. The input must have 8-9 letters and start with B. Example:B1.01.01" )
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

