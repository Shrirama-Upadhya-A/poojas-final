$('.slider').slick({
  infinite: true,
	dots: true,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 3000,
	fade: true,
	fadeSpeed: 1000
});

function myFunction() {
  var x = document.getElementById("centered_nav");
  if (x.className === "rc_nav") {
      x.className += " responsive";
  } else {
      x.className = "rc_nav";
  }
}

