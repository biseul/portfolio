$(function () {
  //alert('경고')

  // 1200 이상 되면 원래 html로 이동하기
  let resizeTimeout;

  window.addEventListener('resize', function () {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function () {
      if (window.innerWidth > 1024 && !window.location.href.includes('index.html')) {
        window.location.href = 'index.html';
      }
    }, 300);
  });

  // 스크롤 내리면 header 클래스 추가하기
  window.addEventListener('scroll', function () {
    if (this.window.scrollY > 0) {
      document.querySelector('nav').classList.add('on');
    } else {
      document.querySelector('nav').classList.remove('on');
    }
  });

  // header 에 버튼 누르면 해당하는 곳으로 이동하기 =
  const animationMove = function (selector) {
    const targerEl = document.querySelector(selector);
    const bsy = window.scrollY;
    const targets = targerEl.getBoundingClientRect().top + bsy;
    // scrollTO 는 위치로 이동
    window.scrollTo({
      top: targets,
      behavior: 'smooth',
    });
  };
  const scrollMove = document.querySelectorAll('[data-animation-scroll="true"]');
  for (let i = 0; i < scrollMove.length; i++) {
    scrollMove[i].addEventListener('click', function () {
      const target = this.dataset.target;
      animationMove(target);
    });
  }

  // gotop효과
  // window 스크롤 하면 할일
  $(window).scroll(function () {
    // 300px 전 gotop 안보이고
    if ($(window).scrollTop() >= 300) {
      $('.top').fadeIn();
    } else {
      $('.top').fadeOut();
    }
    // 300px 넘으면 gotop 보이고
  });

  // gotop을 클릭했을 때 할일
  $('.top').click(function (e) {
    e.preventDefault();
    // html, body 스크롤 0
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      500,
    );
  });

  $('.nav-logo').click(function (e) {
    e.preventDefault();
    // html, body 스크롤 0
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      500,
    );
  });


  // scroll 이벤트 함수 정의
  function checkScroll() {
    if ($(window).scrollTop() >= 300) {
      $('.top').fadeIn();
    } else {
      $('.top').fadeOut();
    }
  }

  // 스크롤 이벤트 발생 시 실행
  $(window).scroll(checkScroll);

  // 페이지 로드 시에도 한 번 실행
  checkScroll();

  // Go Top 버튼 클릭 시
  $('.top, .nav-logo').click(function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 500);
  });


  const spanEl = document.querySelector('main h2 span');
  const txtArr = ['Graphic Designer', 'Web Publisher', 'Video Editor', 'Photographer'];

  let index = 0;
  let currentTxt = txtArr[index].split('');

  function writeTxt() {
    spanEl.textContent += currentTxt.shift();

    if (currentTxt.length !== 0) {
      // 아직 출력할게 남았을 때
      // floor는 정수 내림
      // random은 0~1미만인 수 아무거나 나옴
      setTimeout(writeTxt, Math.floor(Math.random() * 100));
    } else {
      // 다출력되었을 때
      currentTxt = spanEl.textContent.split('');
      // 텍스트를 지우기 위해서 화면에 표시된 텍스트를 다시 한글자 단위로 분리해서 가져오기
      // 3초 = 3000
      setTimeout(deleteTxt, 3000);
    }
  }

  function deleteTxt() {
    // pop은 뒤에서 부터 지움
    currentTxt.pop();
    spanEl.textContent = currentTxt.join('');
    if (currentTxt.length !== 0) {
      // 덜 삭제됐다
      setTimeout(deleteTxt, Math.floor(Math.random() * 100));
    } else {
      // 다 삭제됐다
      index = (index + 1) % txtArr.length;
      currentTxt = txtArr[index].split('');
      writeTxt();
    }
  }
  writeTxt();

  //nav 누르면 class의 탑으로 보내기
  function scrollToElement(selector) {
    const elementTop = $(selector).offset().top;
    const headerHeight = $('header>nav').outerHeight();
    console.log(elementTop, headerHeight);
    $('html, body').animate({ scrollTop: elementTop - headerHeight }, 500);
  }

  $('#profile-nav').click(() => {
    scrollToElement('#profile');
  });
  $('#portfolio-nav').click(() => {
    scrollToElement('#portfolio');
  });
  $('#contact-nav').click(() => {
    scrollToElement('#contact');
  });

  // 첫 번째 유성우

  $(window).on('load', function () {
    var screenWidth = $(window).width();
    var screenHeight = $(window).height() * 1.5;

    var image = $('#movingImage');

    var degree = Math.atan2(screenHeight, screenWidth) * (180 / Math.PI) - 52; // 대각선 각도 계산
    image.css('transform', 'translate(-50%, -' + (50 * screenHeight) / screenWidth + '%) rotate(' + degree + 'deg)');
    image.css('transform-origin', '0 0');
  });

  // 화면 크기에 따라서 유성우 각도 변경하기
  $(window).on('resize', function () {
    var screenWidth = $(window).width();
    var screenHeight = $(window).height() * 1.5;

    var image = $('#movingImage');

    var degree = Math.atan2(screenHeight, screenWidth) * (180 / Math.PI) - 52; // 대각선 각도 계산
    image.css('transform', 'translate(-50%, -' + (50 * screenHeight) / screenWidth + '%) rotate(' + degree + 'deg)');
    image.css('transform-origin', '0 0'); // 회전 기준점 설정
  });

  // 유성우 움직이기
  $(window).on('scroll', function () {
    var scrollTop = $(window).scrollTop();
    var maxScroll = $(window).height() * 1.5;

    var image = $('#movingImage');
    var screenWidth = $(window).width();

    if (scrollTop > 0 && scrollTop < maxScroll + 100) {
      var ratio = 2 * (scrollTop / maxScroll);
      var newTop = ratio * maxScroll;
      var newLeft = ratio * screenWidth;

      image.css({
        top: newTop + 'px',
        left: newLeft + 'px',
      });
    }
  });

  // 두 번째 유성우
  $(window).on('load', function () {
    var screenWidth = $(window).width();
    var screenHeight = $(window).height() * 1.3;

    var image = $('#movingImage2');

    var degree = -Math.atan2(screenHeight, screenWidth) * (180 / Math.PI) + 52; // 대각선 각도 계산
    image.css('transform', 'translate(50%, ' + (50 * screenHeight) / screenWidth + '%) rotate(' + degree + 'deg)');
    image.css('transform-origin', '0 0');
  });

  // 화면 크기에 따라서 유성우 각도 변경하기
  $(window).on('resize', function () {
    var screenWidth = $(window).width();
    var screenHeight = $(window).height() * 1.3;

    var image = $('#movingImage2');

    var degree = -Math.atan2(screenHeight, screenWidth) * (180 / Math.PI) + 52; // 대각선 각도 계산
    image.css('transform', 'translate(50%, ' + (50 * screenHeight) / screenWidth + '%) rotate(' + degree + 'deg)');
    image.css('transform-origin', '0 0');
  });

  // 유성우 움직이기
  $(window).on('scroll', function () {
    var startTop = $(document).height() * 0.35;

    var scrollTop = $(window).scrollTop() + $(window).height() * 0.3 - startTop;
    var maxScroll = $(window).height() * 1.3;

    var image = $('#movingImage2');
    var screenWidth = $(window).width();

    if (scrollTop > -$(window).height() && scrollTop < maxScroll + $(window).height()) {
      // 1500px 이하까지는 대각선 이동
      var ratio = 0.8 * (scrollTop / maxScroll);
      var newTop = ratio * maxScroll + startTop;
      var newRight = ratio * screenWidth;

      image.css({
        top: newTop + 'px',
        right: newRight + 'px',
      });
    }
  });

  // 세 번째 유성우
  $(window).on('load', function () {
    var screenWidth = $(window).width();
    var screenHeight = $(window).height() * 1.3;

    var image = $('#movingImage3');

    var degree = Math.atan2(screenHeight, screenWidth) * (180 / Math.PI) - 52; // 대각선 각도 계산
    image.css('transform', 'translate(-50%, -' + (50 * screenHeight) / screenWidth + '%) rotate(' + degree + 'deg)');
    image.css('transform-origin', '0 0');
  });

  // 화면 크기에 따라서 유성우 각도 변경하기
  $(window).on('resize', function () {
    var screenWidth = $(window).width();
    var screenHeight = $(window).height() * 1.3;

    var image = $('#movingImage3');

    var degree = Math.atan2(screenHeight, screenWidth) * (180 / Math.PI) - 52; // 대각선 각도 계산
    image.css('transform', 'translate(-50%, -' + (50 * screenHeight) / screenWidth + '%) rotate(' + degree + 'deg)');
    image.css('transform-origin', '0 0'); // 회전 기준점 설정
  });

  // 유성우 움직이기
  $(window).on('scroll', function () {
    var startTop = $(document).height() * 0.75;

    var scrollTop = $(window).scrollTop() + $(window).height() * 0.3 - startTop;
    var maxScroll = $(window).height() * 1.3;

    var image = $('#movingImage3');
    var screenWidth = $(window).width();

    if (scrollTop > -$(window).height() && scrollTop < maxScroll + 100) {
      var ratio = 2.7 * (scrollTop / maxScroll);
      var newTop = startTop + ratio * maxScroll;
      var newLeft = ratio * screenWidth;

      image.css({
        top: newTop + 'px',
        left: newLeft + 'px',
      });
    }
  });

  // video 클릭했을 때 할일
  //index 하나하나를 el(매개변수)으로 지은것임
  $('.portfolio figure').each(function (index, el) {
    $(this).find('video')['0'].play();
    // $(el).mouseleave(function () {
    //   $(this).find('video')['0'].pause();
    //   $(this).find('video')['0'].currentTime = 0;
    // });

    $(el).click(function () {
      // 해당하는 li 안에 들어있는 text 부분이랑 src 부분을 가져오는 것
      const title = $(this).find('h3').text();
      const txt = $(this).find('p').text();
      const videoSrc = $(this).find('video').attr('src');

      // popup에 있는 h2, p, video 부분에 넣어주는 것
      // attr은 속성
      $('.popup').find('h3').text(title);
      $('.popup').find('p').text(txt);
      $('.popup').find('video').attr('src', videoSrc);

      // popup에 on 클래스 붙여서 화면에 보이게 됨 + 비디오 재생
      $('.popup').addClass('on');
      $('.popup').find('figure').off('mouseleave');
      $('.popup').find('video')[0].play();
    });
  });
  $('.popup button').click(function () {
    $('.popup').removeClass('on');
    $('.popup').find('video')[0].pause();
  });
});
