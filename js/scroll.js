$(document).ready(function () {
  //滾動頁面導覽列會縮放
  $(window)
    .scroll(function () {
      if ($(this).scrollTop() >= 200) {
        $(".nav__brand")
          .css("padding", "5px 0px")
          .css("font-size", "1.5em")
          .css("transition", ".50s ease");
        $(".nav__bg").css("box-shadow", "0px 5px 5px rgba(0, 0, 0, 0.5)");
      } else {
        $(".nav__brand")
          .css("padding", "25px 0px")
          .css("font-size", "1.8em")
          .css("transition", ".50s ease");
        $(".nav__bg").css("box-shadow", "0px 5px 5px rgba(0, 0, 0, 0)");
      }
    })
    .scroll();
});
