
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
document.getElementById("search-button").onclick =function(){
    var input = document.getElementById("search-input").value;
    var data = input.toUpperCase();
    localStorage.setItem("userInput",data);
    location.replace("displayPage.html")
};


//check not null, bắt đầu bằng "B","b", 8-9 kí tự
// mỗi trường hợp sai sẽ đưa ra lỗi đó 
// 