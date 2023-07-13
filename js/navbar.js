const navigation=document.querySelector(".navbar");
const menuBtn=document.querySelector(".menu-btn");

menuBtn.addEventListener("click",()=>{
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("passive");
    console.log("tıklandı")
})