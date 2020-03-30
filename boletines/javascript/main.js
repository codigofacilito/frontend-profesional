(function(){
  const links = document.querySelectorAll(".close-me");

  links.forEach(el =>{
    el.addEventListener("click",function(ev){
      let container = document.querySelector(".content");
      ev.preventDefault();
      container.classList.remove("fadeInDown");
      container.classList.remove("animated");
      container.classList.add("fadeOutUp");
      container.classList.add("animated");
      setTimeout(()=>{
        location.href = this.href;
      },600);
      return false;
    })
  })

})();
