
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


// building 1 Rooms
var b1Arr = ["B1.01.08","B1.01.09","B1.01.10", "B1.01.11", "B1.01.13", "B1.01.14", "B1.01.15", "B1.01.17", "B1.01.18", "B1.01.19", "B1.01.20", "B1.01.22", 
"B1.01.23", "B1.01.24", "B1.01.30", "B1.01.31", "B1.01.32", "B1.01.32", "B1.01.33", "B1.01.34", "B1.01.37", "B1.01.38", "B1.01.38", "B1.01.39", "B1.01.40",
 "B1.02.03", "B1.02.04", "B1.02.05", "B1.02.06", "B1.02.07","B1.02.08", "B1.02.09", "B1.02.10", "B1.02.13", "B1.02.14", "B1.02.15", "B1.02.16", "B1.02.17", 
 "B1.02.18", "B1.02.19", "B1.02.21", "B1.02.22", "B1.02.22A", "B1.02.23", "B1.02.24", "B1.02.25", "B1.02.26", "B1.02.30", "B1.02.35", "B1.02.36", "B1.03.01", 
 "B1.03.02", "B1.03.03", "B1.03.04", "B1.03.05", "B1.03.06", "B1.03.07", "B1.03.08", "B1.03.09", "B1.03.10","B1.03.12", "B1.03.13", "B1.03.14", "B1.03.16", 
 "B1.03.17", "B1.03.18", "B1.03.19", "B1.03.20", "B1.03.22", "B1.03.23", "B1.03.30", "B1.03.31", "B1.03.32", "B1.03.33", "B1.04.01","B1.04.02", "B1.04.03", 
 "B1.04.05", "B1.04.06", "B1.04.07", "B1.04.08", "B1.04.09", "B1.04.10", "B1.04.11", "B1.04.12", "B1.04.13", "B1.04.14", "B1.04.15", "B1.04.16", "B1.04.17"
,"B1.04.19", "B1.04.20", "B1.04.21", "B1.04.32", "B1.04.33", "B1.04.34", "B1.04.35", "B1.04.37", "B1.05.02", "B1.05.03", "B1.05.04", "B1.05.05", "B1.05.06", 
"B1.05.08", "B1.05.09", "B1.05.10", "B1.05.11", "B1.05.12", "B1.05.13", "B1.05.14", "B1.05.15", "B1.05.16", "B1.05.17", "B1.05.18", "B1.05.19", "B1.05.20"]

// document.getElementById("search-input").onkeyup= function(){
    
//Suggestion list hư css
//     var values = document.getElementById("search-input").value;
//     console.log(values);
//     const inputArr = [];
//     for (let i= 0; i < 3; i++) {
//         inputArr[i] = values.split(".")[i];
//     }
//     // console.log(inputArr[0]);
//     // console.log(inputArr[1]+"."+inputArr[2]);
    
//     var buildingNum = inputArr[0];
//     var roomNum =inputArr[1]+"."+inputArr[2];

    
//     if(inputArr[0].toUpperCase() == "B1"){
//         console.log("Hi");
//        let ul = document.createElement('ul')
//        ul.setAttribute("id","myUL")
//        ul.style.listStyleType = "none"
//        document.getElementById("result").appendChild(ul);
//         b1Arr.forEach(function(room) {
//             let li= document.createElement('li');
//             li.setAttribute("id","list")
//             ul.appendChild(li);
//             let a = document.createElement('a');
//             li.appendChild(a);
//             a.innerHTML += "B1."+room;
//             li.style.display = "none";
//             a.setAttribute("href", "displayPage.html")  
//           })
//           //


      

//          }
//     }


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
    }) 

   function renderResults(results){
        if(!results.length){
            return searchWrapper.classList.remove('show');  
        }
        let content = results.map((item) => {
            return `<li style="padding: 4px;"><a href = "displayPage.html" style = "text-decoration: none">${item}</a></li>`;
        }).join('')
        console.log(content);

        searchWrapper.classList.add('show');
        resultsWrapper.innerHTML = `<ul style= "list-style-type: none; background-color: white; width: 500px;">${content}</ul>`
   }