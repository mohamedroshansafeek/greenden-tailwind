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
