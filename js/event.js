let sideBarWidth = $(".sideBar").innerWidth();
$(".openSideBar").css("left", `-${sideBarWidth}px`);
$(".fa-window-close").click(function () {
  $(".openSideBar").animate({ left: `-${sideBarWidth}` }, 1000);
});
$(".listItem a").click(function () {
  let reference = $(this).attr("href");
  let mySectionOffset = $(reference).offset().top;
  $("body,html").animate({ scrollTop: mySectionOffset }, 1500);
});
$(".singerClass h4").click(function (e) {
  e.preventDefault();
  let whichOne = $(this).text();
  if (whichOne == "Singer One") {
    $(".one").slideToggle();
    $(".two").slideUp();
    $(".three").slideUp();
  } else if (whichOne == "Singer Two") {
    $(".two").slideToggle();
    $(".one").slideUp();
    $(".three").slideUp();
  } else {
    $(".three").slideToggle();
    $(".two").slideUp();
    $(".one").slideUp();
  }
});
$(".open").click(function () {
  $(".openSideBar").animate({ left: 0 }, 1000);
});

function eventsDate(month, day, year, hr, mins) {
  let eventsDateObject = new Date(`${month} ${day},${year} ${hr}:${mins}`);

  let timer = setInterval(function () {
    let todaysDateObject = new Date();
    let remainingDays = eventsDateObject - todaysDateObject;
    let d = Math.floor(remainingDays / 86400000);
    let h = Math.floor(
      (remainingDays % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let m = Math.floor((remainingDays % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((remainingDays % (1000 * 60)) / 1000);
    $(".days").text(`${d} Days`);
    $(".hours").text(`${h} Hours`);
    $(".min").text(`${m} Min`);
    $(".sec").text(`${s} Sec`);
    if (remainingDays < 0) {
      clearInterval(timer);
      $(".remove").css("display", "none");
      $(".timeDiv")
        .html(`<h2 class="expired">Sorry our event is expired. Stay tuned for upcoming events</h2>
      <div class="timeOverlayDiv p-md-5 text-center"></div>
      `);
    }
  }, 1000);
}
eventsDate(1, 7, 2021, 10, 13);
$("#intro button").click(function () {
  $("html,body").animate({ scrollTop: 0 }, 1000);
});
let singersSectionPosition = $("#time").offset().top;
$(window).scroll(function () {
  let fromTop = $(window).scrollTop();
  if (fromTop > singersSectionPosition) {
    $("#intro button").fadeIn(1000);
  } else {
    $("#intro button").fadeOut(1000);
  }
});
let number = $("#characters span").text();
$("#textarea").keyup(function () {
  let text = `${$(this).val()}`;
  textLength = text.length;
  let leftChar = number - textLength;
  $("#characters span").text(leftChar);
  if (leftChar < 0) {
    $("#characters p").html(
      "<span>You are allowed to enter just 100 characters</span>"
    );
  }
});

// $(".first").css("display", "block");
// $(".toggle").click(function (e) {
//   e.preventDefault();

//   let $this = $(this);

//   if ($this.next().hasClass("show")) {
//     $this.next().removeClass("show");
//     $this.next().slideUp(350);
//   } else {
//     $this.parent().parent().find(".inner").removeClass("show");
//     $this.parent().parent().find(".inner").slideUp(350);
//     $this.next().toggleClass("show");
//     $this.next().slideToggle(350);
//   }
// });
