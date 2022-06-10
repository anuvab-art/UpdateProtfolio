  const skils = document.getElementById('skils')
  const checkIsVisible = (element) => {
    const rect = element.getBoundingClientRect ();
    if (rect. top <= window. innerHeight) {
      // console. log('I see you! ');
      // alert('bbn');
      load()

    }
  };
  document.addEventListener('scroll', () => {
    checkIsVisible(skils);
  });




  function load(){
     load = function(){}; // kill it as soon as it was called
     // console.log('call once and never again!');

     let progressBar1 = document.querySelector("#circular-progress1");
     let valueContainer1 = document.querySelector("#value-container1");

     let progressValue1 = 0;
     let progressEndValue1 = 80;
     let speed1 = 40;

     let progress1 = setInterval(() => {
      progressValue1++;
      valueContainer1.textContent = `${progressValue1}%`;
      progressBar1.style.background = `conic-gradient(
      #4d5bf9 ${progressValue1 * 3.6}deg,
      #cadcff ${progressValue1 * 3.6}deg
      )`;
      if (progressValue1 == progressEndValue1) {
        clearInterval(progress1);
      }
    }, speed1);

     let progressBar2 = document.querySelector("#circular-progress2");
     let valueContainer2 = document.querySelector("#value-container2");

     let progressValue2 = 0;
     let progressEndValue2 = 60;
     let speed2 = 60;

     let progress2 = setInterval(() => {
      progressValue2++;
      valueContainer2.textContent = `${progressValue2}%`;
      progressBar2.style.background = `conic-gradient(
      #4d5bf9 ${progressValue2 * 3.6}deg,
      #cadcff ${progressValue2 * 3.6}deg
      )`;
      if (progressValue2 == progressEndValue2) {
        clearInterval(progress2);
      }
    }, speed2);


     let progressBar3 = document.querySelector("#circular-progress3");
     let valueContainer3 = document.querySelector("#value-container3");

     let progressValue3 = 0;
     let progressEndValue3 = 40;
     let speed3 = 60;

     let progress3 = setInterval(() => {
      progressValue3++;
      valueContainer3.textContent = `${progressValue3}%`;
      progressBar3.style.background = `conic-gradient(
      #4d5bf9 ${progressValue3 * 3.6}deg,
      #cadcff ${progressValue3 * 3.6}deg
      )`;
      if (progressValue3 == progressEndValue3) {
        clearInterval(progress3);
      }
    }, speed3);



     $('#myBar1').delay(1000).queue(function () {
      $(this).css('width', '90%')
    });

     $('#myBar2').delay(1000).queue(function () {
      $(this).css('width', '70%')
    });

     $('#myBar3').delay(1000).queue(function () {
      $(this).css('width', '40%')
    });

     $('#myBar4').delay(1000).queue(function () {
      $(this).css('width', '40%')
    });

     $('#myBar5').delay(1000).queue(function () {
      $(this).css('width', '50%')
    });

     $('#myBar6').delay(1000).queue(function () {
      $(this).css('width', '50%')
    });


   };



  const card2 = document.getElementById('card2')
  const checkIsVisible2 = (element) => {
    const rect = element.getBoundingClientRect ();
    if (rect. top <= window. innerHeight) {
      // console. log('I see you! ');
      // alert('bbn');
      load2()

    }
  };
  document.addEventListener('scroll', () => {
    checkIsVisible2(card2);
  });


   function load2(){
     load2 = function(){}; // kill it as soon as it was called
     // console.log('call once and never again!');

     let valueContainer5 = document.querySelector("#number_count2");

     let progressValue5 = 0;
     let progressEndValue5 = 10;
     let speed5 = 270;

     let progress5 = setInterval(() => {
      progressValue5++;
      valueContainer5.textContent = `${progressValue5}`;

      if (progressValue5 == progressEndValue5) {
        clearInterval(progress5);
      }
    }, speed5);

     let valueContainer6 = document.querySelector("#number_count3");

     let progressValue6 = 0;
     let progressEndValue6 = 150;
     let speed6 = 10;

     let progress6 = setInterval(() => {
      progressValue6++;
      valueContainer6.textContent = `${progressValue6}`;

      if (progressValue6 == progressEndValue6) {
        clearInterval(progress6);
      }
    }, speed6);

     let valueContainer7 = document.querySelector("#number_count4");

     let progressValue7 = 0;
     let progressEndValue7 = 102;
     let speed7 = 30;

     let progress7 = setInterval(() => {
      progressValue7++;
      valueContainer7.textContent = `${progressValue7}`;

      if (progressValue7 == progressEndValue7) {
        clearInterval(progress7);
      }
    }, speed7);


     let valueContainer8 = document.querySelector("#number_count5");

     let progressValue8 = 0;
     let progressEndValue8 = 200;
     let speed8 = 10;

     let progress8 = setInterval(() => {
      progressValue8++;
      valueContainer8.textContent = `${progressValue8}`;

      if (progressValue8 == progressEndValue8) {
        clearInterval(progress8);
      }
    }, speed8);

   };



 const pronumber = document.getElementById('pronumber')
  const checkIsVisible3 = (element) => {
    const rect = element.getBoundingClientRect ();
    if (rect. top <= window. innerHeight) {
      // console. log('I see you! ');
      // alert('bbn');
      load3()

    }
  };
  document.addEventListener('scroll', () => {
    checkIsVisible3(pronumber);
  });


   function load3(){
     load3 = function(){}; // kill it as soon as it was called
     // console.log('call once and never again!');

$(window).one('scroll', function() {
  if ($('#pronumber').is(':visible')) {
         // do your special stuff here

     let valueContainer4 = document.querySelector("#number_count1");

        let progressValue4 = 0;
        let progressEndValue4 = 12;
        let speed4 = 350;

        let progress4 = setInterval(() => {
          progressValue4++;
          valueContainer4.textContent = `${progressValue4}`;

          if (progressValue4 == progressEndValue4) {
            clearInterval(progress4);
          }
        }, speed4);

}
});
};
