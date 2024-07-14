// Spinner
$(document).ready(function () {
    $(".loader").fadeOut(500, function () {
      $(".loading").fadeOut(300, function () {
        $("body").css({ overflow: "auto" });
      });
    });
  });
  
  // nav switch
  $(".open-nav").on("click", function () {
    $(".close-nav").css({ display: "block" });
    $(".open-nav").css({ display: "none" });
    $(".page-item").animate({ top: "0" }, 1000);
    let x = $(".side-nav").innerWidth();
    $(".side-nav").animate({ left: `${0}` }, 1000);
  });
  
  $(".close-nav").on("click", function () {
    $(".close-nav").css({ display: "none" });
    $(".open-nav").css({ display: "block" });
    $(".page-item").animate({ top: "300" }, 1000);
    let x = $(".side-nav").innerWidth();
    $(".side-nav").animate({ left: `${-x + 60}` }, 1000);
  });
  // Sites navigation
  $(".img-frame").on("click", function (e) {
    $(".site-header").addClass("d-none");
    $(".meal").removeClass("d-none");
  });
  
  $(".c-frame").on("click", function (e) {
    $(".c-meal").addClass("d-none");
    $(".category").removeClass("d-none");
  });
  
  $(".img-frame").on("click", function (e) {
    $(".category").addClass("d-none");
    $(".meal").removeClass("d-none");
  });
  $(".country").on("click", function (e) {
    $(".area").addClass("d-none");
    $(".area-meal").removeClass("d-none");
  });
  $(".img-frame").on("click", function (e) {
    $(".area-meal").addClass("d-none");
    $(".meal").removeClass("d-none");
  });
  $(".i-frame").on("click", function (e) {
    $(".ingredients").addClass("d-none");
    $(".ingredient").removeClass("d-none");
  });
  $(".img-frame").on("click", function (e) {
    $(".ingredient").addClass("d-none");
    $(".meal").removeClass("d-none");
  });

  
  function validateName() {
    var regex = /^[a-zA-Z,'.\-\s]*$/;
    if (regex.test(uName.value) == true) {
      nameAlert.style.display = "none";
      return true;
    } else {
      nameAlert.style.display = "block";
    }
  }
  function validateEmail() {
    var regex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    if (regex.test(email.value) == true) {
      emailAlert.style.display = "none";
      return true;
    } else {
      emailAlert.style.display = "block";
    }
  }
  function validatePhone() {
    var regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if (regex.test(phone.value) == true) {
      phoneAlert.style.display = "none";
      return true;
    } else {
      phoneAlert.style.display = "block";
    }
  }
  function validateAge () {
    var regex = /^[0-9]{1,3}$/;
    if (regex.test(age.value) == true) {
      ageAlert.style.display = "none";
      return true;
    } else {
      ageAlert.style.display = "block";
    }
  }
  function validatePass () {
    var regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
    if (regex.test(password.value) == true) {
      passAlert.style.display = "none";
      return true;
    } else {
      passAlert.style.display = "block";
    }
  }
  function validateRePass () {
    if (password.value === rePassword.value) {
      rePassAlert.style.display = "none";
      return true;
    } else {
      rePassAlert.style.display = "block";
    }
  }

  // if (validateName() &&
//         validateEmail() &&
//         validatePhone() &&
//         validateAge() &&
//         validatePass() &&
//         validateRePass()) {
//         submitBtn.removeAttribute("disabled")
//     } else {
//         submitBtn.setAttribute("disabled", true)
//     }