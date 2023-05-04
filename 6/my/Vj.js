let menuBTn = document.querySelector('.btn');
let Tlinks = document.querySelector('nav');

menuBTn.onclick = function () {
  Tlinks.classList.toggle("open");

};
document.addEventListener("click", (e) =>{

  if (e.target !== menuBTn && e.target !== Tlinks) {
    if (Tlinks.classList.contains("open")){

      Tlinks.classList.toggle("open");
    }

  }
});
