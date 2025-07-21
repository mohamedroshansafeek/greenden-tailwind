//selecting side navbar, Menu icon

var sidenav = document.getElementById("sidenav")
var menuicone = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")

menuicone.addEventListener("click",function()
{
    sidenav.style.right = 0
})

closenav.addEventListener("click",function()
{
    sidenav.style.right = "-50%"
})

//product search functionality

var seedcontainer = document.getElementById("seed-container")
var search = document.getElementById("search")
var seedlist = seedcontainer.querySelectorAll("div")

    search.addEventListener("keyup",function(){
        var valueEntered = event.target.value.toUpperCase()

        for(count=0; count<seedlist.length; count=count+1)
        {
            var productname = seedlist[count].querySelector("h1").textContent

            if(productname.toUpperCase().indexOf(valueEntered)<0)
            {
                seedlist[count].style.display="none"
            }
            else{
                seedlist[count].style.display="block"
            }
        }
    })