
/*================SEARCHBAR==================*/

/* Alert function (Duan part test) */
// const searchButton = document.getElementById('search-button');
// const searchInput = document.getElementById('search-input');
// searchButton.addEventListener('click', () => {
//   const inputValue = searchInput.value;
//   alert(inputValue);
// });


// Get user input


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

localStorage.clear();

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
//check not null, bắt đầu bằng "B","b", 8-9 kí tự
// mỗi trường hợp sai sẽ đưa ra lỗi đó 
document.getElementById("search-button").onclick =function(){
    var elem = document.getElementById("search-input").value;
    var re = /^[bB]+[1-9"10"]+\.+[0][1-5]+\.+[0-9][0-9"A"]$/;

    if(re.test(elem)){
       checkdone();
    }
    else{
        alert("Wrong input type")
        location.reload();
    }
  
}



// All Rooms List
var b1Arr = ["B1.01.02", "B1.01.13", "B1.01.14", "B1.01.15", "B1.01.17", "B1.01.18", "B1.01.19", "B1.01.20", "B1.01.22", 
"B1.01.23", "B1.01.24", "B1.01.30", "B1.01.31", "B1.01.32", "B1.01.32", "B1.01.33", "B1.01.34", "B1.01.37", "B1.01.38", "B1.01.38", "B1.01.39", "B1.01.40",
 "B1.02.03", "B1.02.04", "B1.02.05", "B1.02.06", "B1.02.07","B1.02.08", "B1.02.09", "B1.02.10", "B1.02.13", "B1.02.14", "B1.02.15", "B1.02.16", "B1.02.17", 
 "B1.02.18", "B1.02.19", "B1.02.21", "B1.02.22", "B1.02.22A", "B1.02.23", "B1.02.24", "B1.02.25", "B1.02.26", "B1.02.30", "B1.02.35","B2.02.36", "B1.02.36", "B1.03.01", 
 "B1.03.02", "B1.03.03", "B1.03.04", "B1.03.05", "B1.03.06", "B1.03.07", "B1.03.08", "B1.03.09", "B1.03.10","B1.03.12", "B1.03.13", "B1.03.14", "B1.03.16", 
 "B1.03.17", "B1.03.18", "B1.03.19", "B1.03.20", "B1.03.22", "B1.03.23", "B1.03.30", "B1.03.31", "B1.03.32", "B1.03.33", "B1.04.01","B1.04.02", "B1.04.03", 
 "B1.04.05", "B1.04.06", "B1.04.07", "B1.04.08", "B1.04.09", "B1.04.10", "B1.04.11", "B1.04.12", "B1.04.13", "B1.04.14", "B1.04.15", "B1.04.16", "B1.04.17"
,"B1.04.19", "B1.04.20", "B1.04.21", "B1.04.32", "B1.04.33", "B1.04.34", "B1.04.35", "B1.04.37", "B1.05.02", "B1.05.03", "B1.05.04", "B1.05.05", "B1.05.06", 
"B1.05.08", "B1.05.09", "B1.05.10", "B1.05.11", "B1.05.12", "B1.05.13", "B1.05.14", "B1.05.15", "B1.05.16", "B1.05.17", "B1.05.18", "B1.05.19", "B1.05.20",
"B2.01.01", "B2.01.02","B2.01.04", "B2.01.05","B2.01.06","B2.01.07","B2.01.08","B2.01.09","B2.01.10","B2.01.11","B2.01.13", "B2.02.01","B2.02.02","B2.02.03",
"B2.02.04","B2.02.05","B2.02.06","B2.02.07","B2.02.08","B2.03.01","B2.03.04","B2.03.05","B2.03.06","B2.03.07","B2.03.08","B2.04.01","B2.04.02","B2.04.03","B2.04.04",
"B2.04.05","B2.04.06","B2.04.07","B2.04.08","B2.04.27","B2.04.40","B2.04.41","B2.04.44","B2.05.01","B2.05.02","B2.05.03","B2.05.04","B2.05.05","B2.05.06","B2.05.07",
"B2.05.08","B2.05.49","B10.01.08","B10.01.11","B10.02.06","B10.02.07","B10.02.08","B10.02.09","B10.02.10","B10.02.11","B8.01.01","B8.01.02","B8.02.01","B8.02.02","B8.02.03",
"B8.02.04","B8.02.05","B8.02.06","B8.02.07","B8.02.08","B8.02.09","B8.03.01","B8.03.02","B8.03.03","B8.03.04","B8.03.06","B8.03.07","B8.04.01","B8.04.01","B8.04.02",
"B8.04.03","B8.04.04","B8.04.05","B8.04.06","B8.04.07","B8.04.08"]


    const searchInput = document.getElementById("search-input");
    const searchWrapper = document.querySelector('.wrapper');
    const resultsWrapper = document.querySelector('.results')

    searchInput.addEventListener('keyup', () => {
         let results = [];
    let input = searchInput.value;
     if(input.length){
        results = b1Arr.filter((item) => {
            return item.toLowerCase().includes(input.toLowerCase());
        })
      
    }
    else{
        resultsWrapper.innerHTML="";
    }
    
    renderResults(results);

    $("#rooms li").click(function() {
        localStorage.setItem("userInput",this.id);
    });

    

    
    }) 

   function renderResults(results){
        if(!results.length){
            return searchWrapper.classList.remove('show');  
        }

        let content = results.map((item) => {
            return `<li style="padding-bottom: 8px;" id="${item}"  data-value="${item}"><a href = "displayPage.html" style = "text-decoration: none; color: black;">${item}</a></li>`;
        }).join('');
      
      

        searchWrapper.classList.add('show');
        resultsWrapper.innerHTML = `<ul id="rooms" style= "list-style-type: none; background-color: white; width:auto;">${content}</ul>`;

       
   };