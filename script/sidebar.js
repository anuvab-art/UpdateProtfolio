
// // new script

//  const sections = document.querySelectorAll("section");
//   const navLi = document.querySelectorAll(".navbar .nav-pills .sidebar");
//   window.addEventListener("scroll", () => {
//     let current = "";
//     sections.forEach((section) => {
//       const sectionTop = section.offsetTop;
//       const sectionHeight = section.clientHeight;
//       if (pageYOffset >= sectionTop - sectionHeight / 3) {
//         current = section.getAttribute("id");
//       }
//     });

//     navLi.forEach((li) => {
//       li.classList.remove("current");
//       if (li.classList.contains(current)) {
//         li.classList.add("current");
//       }
//     });
//   });


    $(document).on('click','ul li',function(){
      $(this).addClass('current').siblings().removeClass('current')
    });


  //   $(window).scroll(function() {
  //     var scrollDistance = $(window).scrollTop();
      
  //   // Assign active class to nav links while scolling
  //   $('.page-section2').each(function(i) {
  //     if ($(this).position().top <= scrollDistance + 300) {
  //       $('.navbar .nav-pills .sidebar.current').removeClass('current');
  //       $('.navbar .nav-pills .sidebar').eq(i).addClass('current');
  //     }
  //   });
  // }).scroll();