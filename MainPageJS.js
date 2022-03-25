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
            li[i].style.display = "";
        } 
        else {
            li[i].style.display = "none";
        }

    }
};