$(function () {
  $('#biseul').fullpage({
    anchors: ['page1', 'page2', 'page3', 'page4'],
    sectionsColor: ['#aaa', '#bbb', '#ccc', '#ddd'],
    navigation: true,
    //네비게이션 바 좌우로 가능 기본값이 우
    // navigationPosition : 'left',
    navigationTooltips: ['HOME', 'PROFILE', 'PORFOLIO', 'CONTACT'],
    //키보드 스크롤 원래 됨. 안하려면 false
    //keyboardScrolling : false,
    //1000보다 작아지면 fullpage 풀림
    // responsiveWidth : 1201,
    afterLoad: function (anchorLink, index) {
      console.log('현재 영역의 번호는' + index);
      // !== 아니다 ===는 자료형까지 같은지 보는것
    },
  });

  // main 에 텍스트 작성 & 삭제
  // querySelector가 달러임. 2개 이상시 뒤에 all붙임
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

  // 모바일에서 다른 html로 이동하기
  if (window.innerWidth <= 1024 && !window.location.href.includes('index99.html')) {
    window.location.href = 'index99.html';
  }

  let resizeTimeout;

  window.addEventListener('resize', function () {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function () {
      if (window.innerWidth <= 1024 && !window.location.href.includes('index99.html')) {
        window.location.href = 'index99.html';
      }
    }, 300);
  });

  // video 클릭했을 때 할일
  //index 하나하나를 el(매개변수)으로 지은것임
  $('.portfolio figure').each(function (index, el) {
    //자식요소를 찾을때 find
    $(el).mouseenter(function () {
      $(this).find('iframe')['0'].play();
    });
    $(el).mouseleave(function () {
      $(this).find('iframe')['0'].pause();
      $(this).find('iframe')['0'].currentTime = 0;
    });

    $(el).click(function () {
      // 해당하는 li 안에 들어있는 text 부분이랑 src 부분을 가져오는 것
      const title = $(this).find('h3').text();
      const txt = $(this).find('p').text();
      const iframeSrc = $(this).find('iframe').attr('src');

      // popup에 있는 h2, p, video 부분에 넣어주는 것
      // attr은 속성
      $('.popup').find('h3').text(title);
      $('.popup').find('p').text(txt);
      $('.popup').find('iframe').attr('src', iframeSrc);

      // popup에 on 클래스 붙여서 화면에 보이게 됨 + 비디오 재생
      $('.popup').addClass('on');
      $('.popup').find('figure').off('mouseleave');
      $('.popup').find('iframe')[0].play();
    });
  });
  $('.popup button').click(function () {
    $('.popup').removeClass('on');
    $('.popup').find('iframe')[0].pause();
  });

  // 유성우 각도 설정
  $(window).on('load', function () {
    var screenWidth = $(window).width();
    var screenHeight = $(window).height() * 1.5;

    var image = $('#movingImage');

    var degree = Math.atan2(screenHeight * 1.7, screenWidth * 1.1) * (180 / Math.PI) - 55; // 대각선 각도 계산
    image.css('transform', 'translate(-50%, -' + (50 * screenHeight) / screenWidth + '%) rotate(' + degree + 'deg)');
    image.css('transform-origin', '0 0');
  });

  // 화면 크기에 따라서 유성우 각도 변경하기
  $(window).on('resize', function () {
    var screenWidth = $(window).width();
    var screenHeight = $(window).height() * 1.5;

    var image = $('#movingImage');

    var degree = Math.atan2(screenHeight * 1.7, screenWidth * 1.1) * (180 / Math.PI) - 55; // 대각선 각도 계산
    image.css('transform', 'translate(-50%, -' + (50 * screenHeight) / screenWidth + '%) rotate(' + degree + 'deg)');
    image.css('transform-origin', '0 0'); // 회전 기준점 설정
  });
});
