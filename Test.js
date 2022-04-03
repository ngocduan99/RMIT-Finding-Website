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
