const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".nav-menu ul");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active2");
    navmenu.classList.toggle("active"); 
});

document.querySelectorAll(".nav-links").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active2");
    navmenu.classList.remove("active");
}));

// typing Animation
var typed = new Typed('#typed', {
    strings: ['Backend Developer.', 'Java Developer.'],
    typeSpeed: 100,
    backDelay: 2000,
    loop: true
  });


// jquery
$(".nav-menu ul li a").click(function(e){
    e.preventDefault();
    
    let top=$(this).attr("href");
    let offset=$(top).offset().top;


    $("html,body").animate({
      scrollTop:offset-100
    })
});


// work section 
$("#work .btn").click(function(){
    $("#work .btn").removeClass("active");
    $(this).addClass("active");

    if( $(this).text()=="All" ){
        $("#work .col-4:has(.work)").fadeIn();
    }
    else  if( $(this).text()=="FETCH API" ){
        $("#work .col-4:has(.work)").fadeOut();
        $("#work .col-4:has(.work):eq(0),#work .col-4:has(.work):eq(1),#work .col-4:has(.work):eq(2)").fadeIn();
    }
    if( $(this).text()=="JavaScript" ){
        $("#work .col-4:has(.work)").fadeOut();
        $("#work .col-4:has(.work):eq(3),#work .col-4:has(.work):eq(4),#work .col-4:has(.work):eq(5)").fadeIn();
    }

});



// ----------------------------

const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
