$(document).ready(function () {
  $("li.active").removeClass("active");
  $('a[href="' + location.pathname + '"]')
    .closest("li")
    .addClass("active");
});


const nav = document.querySelector(".Navbar");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("navbar-active");
  } else {
    nav.classList.remove("navbar-active");
  }
}


var owl = $(".owl");
owl.owlCarousel({
  items: 1,
  navigation: true,
  loop: true,
  rewind: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: false,
  dots: false,
  smartSpeed: 450,
  // animateIn: "fadeIn",
  // animateOut: "fadeOut",
  navText: [
    "<i class='fa fa-chevron-left nav-left'></i>",
    "<i class='fa fa-chevron-right nav-right'></i>",
  ],
  responsiveClass: true,
  responsive: {
    350: {
      items: 1,
      nav: true,
    },
    380: {
      items: 1,
      nav: true,
    },
    400: {
      items: 1,
      nav: true,
    },
    768: {
      items: 1,
      nav: true,
    },
    1200: {
      items: 1,
      nav: false,
    },
    1600: {
      items: 1,
      nav: true,
      loop: false,
    },
  },
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [5000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});

// $(function () {
// $("#hello").hover(function(){
//   $('.dropdown-menu').click();
//   if (!$(this).next().hasClass("show")) {
//     $(this)
//       .parents(".dropdown-menu")
//       .first()
//       .find(".show")
//       .removeClass("show");
//   }
//   var $subMenu = $(this).next(".dropdown-menu");
//   $subMenu.toggleClass("show"); // appliqué au ul
//   $(this).parent().toggleClass("show"); // appliqué au li parent

//   $(this)
//     .parents("li.nav-item.dropdown.show")
//     .on("hidden.bs.dropdown", function (e) {
//       $(".dropdown-submenu .show").removeClass("show"); // appliqué au ul
//       $(".dropdown-submenu.show").removeClass("show"); // appliqué au li parent
//     });
//   return false;
// });
// });

$(function () {
  $(".dropdown-menu a.dropdown-toggle").on("mouseover", function (e) {
    if (!$(this).next().hasClass("show")) {
      $(this)
        .parents(".dropdown-menu")
        .first()
        .find(".show")
        .removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass("show"); // appliqué au ul
    $(this).parent().toggleClass("show"); // appliqué au li parent

    $(this)
      .parents("li.nav-item.dropdown.show")
      .on("hidden.bs.dropdown", function (e) {
        $(".dropdown-submenu .show").removeClass("show"); // appliqué au ul
        $(".dropdown-submenu.show").removeClass("show"); // appliqué au li parent
      });
    return false;
  });
});

// const tabs = document.querySelectorAll('.tab');
// const tabContents = document.querySelectorAll('.tab-content-item');

// tabs.forEach(tab => {
//   tab.addEventListener('click', function() {
//     // remove active class from all tabs and tab content
//     tabs.forEach(tab => tab.classList.remove('active'));
//     tabContents.forEach(content => content.classList.remove('active'));

//     // add active class to current tab and its corresponding tab content
//     this.classList.add('active');
//     document.getElementById(this.dataset.tabContent).classList.add('active');
//   });
// });

// Open the Modal
function openModal() {
  // document.getElementById("myModal").style.display = "block";
  $("#myModal").show("slow");
}

function openModal2() {
  // document.getElementById("myModal2").style.display = "block";
  $("#myModal2").show("slow");
}

function openModal3() {
  // document.getElementById("myModal3").style.display = "block";
  $("#myModal3").show("slow");
}

// Close the Modal
function closeModal() {
  // document.getElementById("myModal").style.display = "none";
  $("#myModal").hide("slow");
}

function closeModal2() {
  // document.getElementById("myModal2").style.display = "none";
  $("#myModal2").hide("slow");
}

function closeModal3() {
  // document.getElementById("myModal3").style.display = "none";
  $("#myModal3").hide("slow");
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Next/previous controls
function plusSlides2(n) {
  showSlides2((slideIndex += n));
}

// Next/previous controls
function plusSlides3(n) {
  showSlides3((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

// Thumbnail image controls
function currentSlide2(n) {
  showSlides2((slideIndex = n));
}

// Thumbnail image controls
function currentSlide3(n) {
  showSlides3((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides2");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

function showSlides3(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides3");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

function openCity(evt, cityName) {
  document.getElementById("defaultOpen").click();
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

$(document).ready(function () {
  $("#btn1").click(function () {
    console.log("ccc");
    $(".slider_right-icon1").show();
  });
});



$('#toshowtwo').click(function () {
  $('#form2').show('slow');
  $('#form1').hide('slow');
});