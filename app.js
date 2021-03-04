//animations header and text//

(function() {
  let elements;
  let windowHeight;
  let text;

  function init() {
    elements = document.querySelectorAll('.hidden');
    texts=document.querySelectorAll('.animate')
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= 0) {
        element.classList.add('fade-in-element');
        element.classList.remove('hidden');  
      }
    }
  }


  function checkPositionAnimate() {
    for (var i = 0; i < texts.length; i++) {
      var element = texts[i];
      var positionFromTop = texts[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= 0) {
        element.classList.add('move-down-element');
        element.classList.remove('animate');  
      }
    }
  }

  window.addEventListener('scroll', checkPosition);
   window.addEventListener('scroll', checkPositionAnimate);
  window.addEventListener('resize', init);


  init();
  checkPosition();
})();

//scrolling menu efect//
const links = document.querySelectorAll(".navigation a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}

