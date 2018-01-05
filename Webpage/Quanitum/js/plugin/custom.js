/* ----- Custom Scripts for Pilot template ----- */

jQuery(function($) {
  "use strict";

  // get the value of the bottom of the #main element by adding the offset of that element plus its height, set it as a variable
    var mainbottom = $('#main').offset().top;
    // on scroll,
    $(window).on('scroll', function(){
    // we round here to reduce a little workload
    stop = Math.round($(window).scrollTop());
    if (stop > mainbottom) {
        $('.navbar').addClass('past-main');
        $('.navbar').addClass('effect-main')
    } else {
        $('.navbar').removeClass('past-main');
      }
    });

  // Collapse navbar on click

  $(document).on('click.nav','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
    $(this).removeClass('in').addClass('collapse');
   }
  });

  /*----- Preloader ----- */

  $(window).load(function() {

    setTimeout(function() {
      $('#loading').fadeOut('slow', function() {
      });
    }, 300);

  });

  /* --------- Wow Init -------*/

    new WOW().init();

  /* ------- Magnific Popup ---------*/

    $('.popup').magnificPopup({
      disableOn: 0,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false
    });

  /*-------- Owl Carousel ---------- */

    $(".reviews").owlCarousel({
      items: 3,
      singleItem: false,
      autoPlay : false,
      pagination : true
    });

  /* ------ Clients Section Owl Carousel ----- */

    $(".clients").owlCarousel({
      slideSpeed : 200,
      items: 5,
      singleItem: false,
      autoPlay : true,
      pagination : false
    });


    /* ----- Counter Up ----- */

    $('.counter').counterUp({
        delay: 150,
        time: 1500
    });

  /*----------- Scroll To Top ---------------*/2

    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 1000) {
          $('#back-top').fadeIn();
          // additional buttons
          $('#go-discord').fadeIn();
          $('#go-telegram').fadeIn();
          $('#go-twitter').fadeIn();
      } else {
          $('#back-top').fadeOut();
          // additional buttons
          $('#go-discord').fadeOut();
          $('#go-telegram').fadeOut();
          $('#go-twitter').fadeOut();
      }
    });
    // scroll body to 0px on click
    $('#back-top').on('click', function () {
      $('#back-top').tooltip('hide');
      $('body,html').animate({
          scrollTop: 0
      }, 1500);
      return false;
    });

  /* ------ Countdown ----- */

    $('#countdown').countdown({
      date: '03/29/2018 12:00:00',
      offset: +2,
      day: 'Day',
      days: 'Days'
     }, function () {
      alert('Done!');
    });

  /* ------ jQuery for Easing min -- */

    $(function() {
    $('a.page-scroll').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
      });
    });

  /*----- Subscription Form ----- */

  // $(document).ready(function() {
  //   // jQuery Validation
  //   $("#signup").validate({
  //     // if valid, post data via AJAX
  //     submitHandler: function(form) {
  //       $.post("assets/php/subscribe.php", { email: $("#email").val() }, function(data) {
  //         $('#response').html(data);
  //       });
  //     },
  //     // all fields are required
  //     rules: {
  //       email: {
  //         required: true,
  //         email: true
  //       }
  //     }
  //   });
  // });

  $('#signup > input.right.inputnew'). click(function(e){
    e.preventDefault();

    var email = $('#signup > #email').val();

    if (email == "") {
      $('#signup > #email').focus();
      $('#subscribe-error').fadeOut();
      $('#subscribe-success').fadeOut();
    } else if (!email.includes("@") || !email.includes(".")) {
      $('#subscribe-success').fadeOut();
      $('#subscribe-error').fadeIn();
      $('#signup > #email').focus();
    } else {
      $.ajax({
          type: 'POST',
          url: 'https://script.google.com/macros/s/AKfycbwQdWC8wVKsaw4Srf8UaCXuJxyN75PhD1e9BtFsbv1vYvIrZpsY/exec',
          data: { email: email, form: 'subscribe' }
      });
      $('#subscribe-error').hide();
      $('#subscribe-success').fadeIn();
      $('#signup > #email').val("");
    }

  });

  $(document).ready(function() {
    $('.accordion a').click(function(){
      $(this).toggleClass('active');
      $(this).next('.content').slideToggle(400);
     });
  });

  /*----- Countdown Clock ----- */

  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
      var t = getTimeRemaining(endtime);

      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
  let endDate = new Date(Date.parse('03/29/2018 12:00:00'));
  initializeClock('clockdiv', endDate);


  /*----- Block input text to alpha numeric ----- */

  $('#check-coins input[type="text"]').bind('input', function(e) { 
      var str = $(this).val();
      var regex = new RegExp("^[a-zA-Z0-9]+$");
      if (regex.test(str)) {
         return true;
      }

      e.preventDefault();
      $(this).val("");
      return false;
  });

  $('.conversion-check #eth-count').bind('input', function() { 
      var str = $(this).val();
      $('.conversion-check #spk-count').val(str*850);
  });

  $('.conversion-check #spk-count').bind('input', function() { 
      var str = $(this).val();
      $('.conversion-check #eth-count').val(str/850);
  });

  /*----- Scroll Coin Numbers ----- */

  // $('.coin_meter').waypoint(function(direction) {
  //   // UpdateCoinNumbers();
  // }, {
  //   offset: '70%'
  // })

  // $('.coin_meter p span').each(function () {
  //     $(this).prop('Counter',0).animate({
  //         Counter: parseFloat($(this).text())
  //     }, {
  //         duration: 1000,
  //         easing: 'swing',
  //         step: function (now) {
  //             $(this).text(now.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
  //         }
  //     });
  // });


  /*----- Select text area on click ----- */

  function selectText(containerid) {
      if (document.selection) {
          var range = document.body.createTextRange();
          range.moveToElementText(document.getElementById(containerid));
          range.select();
      } else if (window.getSelection) {
          var range = document.createRange();
          range.selectNode(document.getElementById(containerid));
          window.getSelection().removeAllRanges();
          window.getSelection().addRange(range);
      }
  }

  var max_height_boxes = 0;

  $('div.box-inner').each(function () {
    var temp = $(this).outerHeight() + 16;
    if (temp > max_height_boxes) {
      max_height_boxes = $(this).outerHeight() + 16;
    }
  });
  
  setTimeout( function () {
    $('div.max-height').css('height', max_height_boxes);
  }, 2000);


  /*----- Create description pop up for team members ----- */
  // $('.pricing-section .table-left, .pricing-section .table-right').click(function(e) {

  //   e.preventDefault();

  //   console.log($( this ).find(".pricing-details h2").text());

  // });


  /*----- Save Pre Sale emails ----- */
  $('#presalesignup-submit').click(function(e) {

    e.preventDefault();

    var email = $('#presalesignup-email').val();

    if (email == "") {
      $('#presalesignup-email').focus();
      $('#presalesignup-success').fadeOut();
      $('#presalesignup-success').fadeOut();
    } else if (!email.includes("@") || !email.includes(".")) {
      $('#presalesignup-error').fadeIn();
      $('#presalesignup-email').focus();
    } else {
      $('#popup_signup_presale #email').val(email);
      $('#popup_signup_presale').fadeIn(250);
      $('.overlay').fadeIn(250);
    }

  });

  $("#popup_signup_presale form").submit(function(e){     
      e.preventDefault();

      $("#popup_signup_presale .g-btn").button('loading');
      $("#popup_signup_presale form").css('opacity', '0.5');
      var email = $("#popup_signup_presale #email").val();
      var name = $("#popup_signup_presale #name").val();
      var contact = $("#popup_signup_presale #contact").val();
      var social = $('#popup_signup_presale select').val();
      var referer = $('#popup_signup_presale #referer').val();

      $.ajax({
          type: 'get',
          url: 'https://script.google.com/macros/s/AKfycbwQdWC8wVKsaw4Srf8UaCXuJxyN75PhD1e9BtFsbv1vYvIrZpsY/exec',
          data: 'contact='+social+': '+contact+'&name='+name+'&email='+email+'&referer='+referer
      });

      setTimeout(function() {
       $("#popup_signup_presale form").css('opacity', '1');
       $("#popup_signup_presale .g-btn").button('reset');
       $('#popup_signup_presale').fadeOut(250);
       $('.overlay').fadeOut(250);
       $('#presalesignup-error').hide();
       $('#presalesignup-success').fadeIn();
       $('#presalesignup-email').val("");
      }, 1000);

      fbq('track', 'CompleteRegistration');

  });

  // $('.flip-container').mouseout(function() {
  //   $(this).slideUp();
  //   $(this).show();
  // });

  /* -------------------------------------------------------
  --------------------- Graphs JS --------------------------
  ---------------------------------------------------------*/

  function pieTooltipOn(rotateArm, rotateText, sliceSize) {
    var text = Math.round((sliceSize/360)*100) + "%";
    $(".pie-chart__tooltip").css({
      'transform': "rotate("+rotateArm+"deg)",
      'opacity': 1
    });
    $(".pie-chart__tooltip .tooltip__inner").css({
      'transform': "rotate("+rotateText+"deg)"
    });
    $(".pie-chart__tooltip .tooltip__inner").text(text);
  }

  function pieTooltipOff() {
    $(".pie-chart__tooltip").css({
      'opacity': 0
    });
  }

  function sliceSize(dataNum, dataTotal) {
    return (dataNum / dataTotal) * 360;
  }

  function addSlice(id, sliceSize, pieElement, offset, sliceID, color, tooltipRotation, text) {
    $(pieElement).append("<div class='slice "+ sliceID + "'><span></span></div>");
    var offset = offset - 1;
    var sizeRotation = -179 + sliceSize;

    $(id + " ." + sliceID).css({
      "transform": "rotate(" + offset + "deg) translate3d(0,0,0)"
    });

    $(id + " ." + sliceID + " span").css({
      "transform"       : "rotate(" + sizeRotation + "deg) translate3d(0,0,0)",
      "background-color": color
    });

    // slice hover effect
    $(id + " ." + sliceID + " span").mouseover(function() {
      pieTooltipOn(tooltipRotation, -tooltipRotation, text);
    });
    $(id + " ." + sliceID + " span").mouseout(function() {
      pieTooltipOff();
    });

  }

  function iterateSlices(id, sliceSize, pieElement, offset, dataCount, sliceCount, color, tooltipRotation) {
    var
      maxSize = 179,
      sliceID = "s" + dataCount + "-" + sliceCount;

    if( sliceSize <= maxSize ) {
      addSlice(id, sliceSize, pieElement, offset, sliceID, color, tooltipRotation, sliceSize);
    } else {
      addSlice(id, maxSize, pieElement, offset, sliceID, color, tooltipRotation, sliceSize);
      iterateSlices(id, sliceSize-maxSize, pieElement, offset+maxSize, dataCount, sliceCount+1, color);
    }
  }

  function createPie(id) {
    //console.log (id);
    var
      listData      = [],
      listTotal     = 0,
      offset        = 0,
      i             = 0,
      pieElement    = id + " .pie-chart__pie",
      dataElement   = id + " .pie-chart__legend",

      color         = [
        "tomato",
        "turquoise",
        "orange",
        "crimson",
        "cornflowerblue",
        "forestgreen",
        "purple",
        "olivedrab",
        "navy"
      ];

    // color = shuffle( color );

    $(dataElement+" span").each(function() {
      listData.push(Number($(this).html()));
    });

    // Legend span
    // $(dataElement+" span").mouseover(function() {
    //   alert();
    // });

    for(i = 0; i < listData.length; i++) {
      listTotal += listData[i];
    }

    // keep track of cumulative rotation
    var prevRotate = -90;
    // loop through all slices
    for(i=0; i < listData.length; i++) {
      var size = sliceSize(listData[i], listTotal);
      var tooltipRotation = (size/2) + prevRotate;
      iterateSlices(id, size, pieElement, offset, i, 0, color[i], tooltipRotation);
      $(dataElement + " li:nth-child(" + (i + 1) + ")").css("border-color", color[i]);
      offset += size;
      prevRotate += size;
    }
  }

  function shuffle(a) {
      var j, x, i;
      for (i = a.length; i; i--) {
          j = Math.floor(Math.random() * i);
          x = a[i - 1];
          a[i - 1] = a[j];
          a[j] = x;
      }

      return a;
  }

  function createPieCharts() {
    createPie('.pieID--token-distribution' );
    createPie('.pieID--categories' );
  }

  createPieCharts();
  /* -------------------------------------------------------
  ------------------- END Graphs JS ------------------------
  ---------------------------------------------------------*/

  // ------------- HORIZONTAL BAR GRAPH STYLES --------------

  function createHBarGraph(){
    var
      listData      = [],
      listTotal     = 0,
      offset        = 0,
      i             = 0,
      graphEl = '#h-bar-chart .graph',
      dataElement = '#h-bar-chart .h-bar-legend',

      color         = [
        "crimson",
        "tomato",
        "cornflowerblue",
        "purple",
        "turquoise",
        "forestgreen",
        "navy"
      ];

    $(dataElement+" span").each(function() {
      listData.push(Number($(this).html()));
    });

    // Legend span
    // $(dataElement+" span").mouseover(function() {
    //   alert();
    // });

    for(i = 0; i < listData.length; i++) {
      listTotal += listData[i];
    }

    // loop through all slices
    for(i=0; i < listData.length; i++) {
      var perc = (listData[i] * 100 /listTotal);
      $(graphEl).append("<div class='block' style='width: "+ perc
        +"%; background: "+ color[i] +";'><span class='tooltip'>"+ perc +"%</span></div>");
      $(dataElement + " li:nth-child(" + (i + 1) + ")").css("border-color", color[i]);
    }
  }

  createHBarGraph();


}); // end of jQuery Function


