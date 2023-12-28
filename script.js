document.addEventListener("DOMContentLoaded", function () {
    const scrollIndicator = document.getElementById("scrollIndicator");
  
    window.onscroll = function () {
      updateScrollIndicator();
    };
  
    function updateScrollIndicator() {
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.clientHeight;
      const scrolled = window.scrollY;
  
      const scrollPercentage = (scrolled / (fullHeight - windowHeight)) * 100;
      scrollIndicator.style.height = `${scrollPercentage}%`;
    }
});
  