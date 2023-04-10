document.getElementById("contact").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Merci pour votre message !");
  });
  console.log("wael")
  const burger = document.getElementById("burger");
  const header = document.getElementById("navbar");
  var menu = document.getElementById("element1");

 let etat = -1;

  var navBefore = document.querySelector("#navitems");
  var menu = document.getElementById("element1");
  var ul = document.querySelector(".navitems2");
  const quitterMenu = document.getElementById("quitter");
  const quitterMenuForced = document.querySelectorAll("ul li");
                items =`<li><a href="#home">Home</a></li>
                <li><a href="#NosProduits">Nos produits</a></li>
                <li><a href="#gallerie">Galerie</a></li>
                <li><a href="#spec">About us</a></li>
                <li><a href="#contact">Contact</a></li>
                <li id="quitter">Quitter le menu</li>`
/*apparition et disparition*/


burger.addEventListener("click", ()=>{
    
    burger.classList.toggle("actif");
    navbar.classList.toggle("actif");
    menu.classList.toggle("actif");
    etat=etat*-1;
    console.log(etat); 
    if (etat==1) {
        ul.innerHTML = items;}
        else{
            ul.innerHTML = "";
        }
    
    document.getElementById("quitter").addEventListener("click", ()=>{
            console.log("clicked");
            burger.classList.remove("actif");
            navbar.classList.remove("actif");
            menu.classList.remove("actif");
            etat=-1;
            if (etat==1) {
                ul.innerHTML = items;}
                else{
                    ul.innerHTML = "";
                }
        })  
        
        document.querySelectorAll("ul li")[5].addEventListener("click", ()=>{
            console.log("clicked");
            burger.classList.remove("actif");
            navbar.classList.remove("actif");
            menu.classList.remove("actif");
            etat=-1;
            if (etat==1) {
                ul.innerHTML = items;}
                else{
                    ul.innerHTML = "";
                }
        })  
        document.querySelectorAll("ul li")[6].addEventListener("click", ()=>{
            console.log("clicked");
            burger.classList.remove("actif");
            navbar.classList.remove("actif");
            menu.classList.remove("actif");
            etat=-1;
            if (etat==1) {
                ul.innerHTML = items;}
                else{
                    ul.innerHTML = "";
                }
        }) 
        document.querySelectorAll("ul li")[7].addEventListener("click", ()=>{
            console.log("clicked");
            burger.classList.remove("actif");
            navbar.classList.remove("actif");
            menu.classList.remove("actif");
            etat=-1;
            if (etat==1) {
                ul.innerHTML = items;}
                else{
                    ul.innerHTML = "";
                }
        }) 
        document.querySelectorAll("ul li")[8].addEventListener("click", ()=>{
            console.log("clicked");
            burger.classList.remove("actif");
            navbar.classList.remove("actif");
            menu.classList.remove("actif");
            etat=-1;
            if (etat==1) {
                ul.innerHTML = items;}
                else{
                    ul.innerHTML = "";
                }
        }) 
        document.querySelectorAll("ul li")[9].addEventListener("click", ()=>{
            console.log("clicked");
            burger.classList.remove("actif");
            navbar.classList.remove("actif");
            menu.classList.remove("actif");
            etat=-1;
            if (etat==1) {
                ul.innerHTML = items;}
                else{
                    ul.innerHTML = "";
                }
        })    
})


//fin

    
// if (ul.querySelectorAll("li").length > 0) {
//     console.log("The ul contains at least one li.");
//   } else {
//     console.log("The ul does not contain any li.");
//   }



