// 비디오 
const videoSlides = [
  { 
    id: 'YDY5qzbnUI0', 
    title: '[인포그래픽]\n 산불 발생 시 긴급 대피 요령', 
    pdfs: [
      {
        title: '산불 발생 시 긴급 대피 요령',
        url: './images/fire.pdf',
      },
    ],
  },
  { 
    id: 'mCe5NSdx0Qo', 
    title: '[제2회 대구광역시 동구 공공디자인 공모전] 민화 속 동구의 사계', 
    pdfs: [
      {
        title: '민화 속 동구의 사계',
        url: './images/donggu.pdf',
      },
    ],
  },
  { 
    id: 'TRPZpbGE8Lg', 
    title: '[3D 모델 크로마키 합성] 민화 속 동구의 사계', 
    pdfs: [
      {
        title: '민화 속 동구의 사계',
        url: './images/donggu2.pdf',
      },
    ],
  },
  { 
    id: 'aIDLr695t7Q', 
    title: '[2025 대한민국 헌혈 공모전] 헌혈, 가장 따뜻한 나눔의 시작', 
    pdfs: [
      {
        title: '헌혈, 가장 따뜻한 나눔의 시작',
        url: './images/blood.pdf',
      },
    ],
  },
  { 
    id: 'UbjDmG_orDc', 
    title: '[제1회 안전한 대한민국 영상 공모전] 수호의 일기', 
    pdfs: [
      {
        title: '수호의 일기',
        url: './images/diary.pdf',
      },
    ], 
  },
  { 
    id: 'QB9p7Ug4BE4', 
    title: '[음악 예능 프로그램] 담다(DAM:DA) - 청춘과 음악을 담다',
    pdfs: [
      {
        title: '담다(DAM:DA) - 청춘과 음악을 담다',
        url: './images/damda.pdf',
      },
    ], 
  },
];

// 포스터
const posterSlides = [
  {
    src: './images/andong.jpg',
    title: '[안동국제탈춤페스티벌 2025 포스터 공모전]\n 꼭꼭 숨어라! \n(장려상 수상)',
    pdfs: [
      {
        title: '꼭꼭 숨어라!',
        url: './images/andong.pdf',
      },
      {
        title: '장려상 상장',
        url: './images/award.pdf',
      },
    ], 
  },
  {
    src: './images/yeongcheon.jpg',
    title: '[제22회 2025 영천보현산별빛축제 포스터 공모전] 별 그리고 토성, 영천에서 만나는 축제의 순간',
    pdfs: [
      {
        title: '별 그리고 토성, 영천에서 만나는 축제의 순간',
        url: './images/star.pdf',
      },
    ], 
  },
];



$(function () {
  $('#biseul').fullpage({
    anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
    sectionsColor: ['#aaa', '#bbb', '#ccc', '#ddd', '#eee'],
    navigation: true,
    //네비게이션 바 좌우로 가능 기본값이 우
    // navigationPosition : 'left',
    navigationTooltips: ['HOME', 'PROFILE', 'VIDEO', 'POSTER', 'CONTACT'],
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
      if (window.innerWidth <= 1024 && !window.location.href.includes('index99.html')) {
        window.location.href = 'index99.html';
      }
  });

  // video 클릭했을 때 할일
  //index 하나하나를 el(매개변수)으로 지은것임
  $('.portfolio figure').each(function (index, el) {
    //자식요소를 찾을때 find
    // $(el).mouseenter(function () {
    //   $(this).find('iframe')['0'].play();
    // });
    // $(el).mouseleave(function () {
    //   $(this).find('iframe')['0'].pause();
    //   $(this).find('iframe')['0'].currentTime = 0;
    // });

    $(el).find('.cover').click(function () {
      // 해당하는 li 안에 들어있는 text 부분이랑 src 부분을 가져오는 것
      const title = $(el).find('h3').text();
      const txt = $(el).find('p').text();
      const iframeSrc = $(el).find('iframe').attr('src').replace('controls=0', 'controls=1');

      // popup에 있는 h2, p, video 부분에 넣어주는 것
      // attr은 속성
      $('.popup').find('h3').text(title);
      $('.popup').find('p').text(txt);
      $('.popup').find('iframe').attr('src', iframeSrc);

      // popup에 on 클래스 붙여서 화면에 보이게 됨 + 비디오 재생
      $('.popup').addClass('on');
      $('.popup').find('figure').off('mouseleave');
    });
  });
  $('.popup button').click(function () {
    const iframe = document.querySelector('.popup iframe');
    if (iframe) {
      iframe.src = '';
    }

    $('.popup').removeClass('on');
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



const cardContainer = document.getElementById('cardContainer');
let currentIndex = 0;
let players = [];

function getWrappedIndex(index) {
  const len = videoSlides.length;
  return (index + len) % len;
}

window.onload = function () {
  createCards();
};

function createCards() {
  cardContainer.innerHTML = '';
  players = [];

  for (let i = 0; i < videoSlides.length; i++) {
    const card = document.createElement('div');
    card.className = 'card' + (i === currentIndex ? ' center' : '');
    card.innerHTML = `
      <div class="card-overlay" onclick="handleCardClick(${i})">
        <div class="card-info">
          <h3>${videoSlides[i].title}</h3>
          <p>자세히 보려면 클릭하세요</p>
        </div>
      </div>
      <div class="blur-overlay"></div>
      <div id="player-${i}"></div>
    `;
    cardContainer.appendChild(card);
  }

  videoSlides.forEach((video, i) => {
    const player = new YT.Player(`player-${i}`, {
      videoId: video.id,
      playerVars: {
        playsinline: 1,
        mute: 1,
        rel: 0,
        showinfo: 0,
      },
      events: {
        onReady: updateCardPositions,
      },
    });
    players.push(player);
  });
}

function updateCardPositions() {
  const cards = document.querySelectorAll('#cardContainer .card');

  const baseWidth = window.innerWidth * 0.30;
  const baseHeight = baseWidth * 9 / 16;
  const distance = baseWidth * 1.1;

  cards.forEach(card => card.classList.remove('center'));

  cards.forEach((card, i) => {
    const offset = getWrappedIndex(i - currentIndex);
    let relative = i - currentIndex;

    if (relative > videoSlides.length / 2) relative -= videoSlides.length;
    if (relative < -videoSlides.length / 2) relative += videoSlides.length;

    let scale = 0.6;
    let opacity = 0;
    let x = 0;
    let y = 0;
    let showBlur = true;

    if (relative === 0) {
      card.classList.add('center');
      scale = 1.2;
      opacity = 1;
      x = 0;
      y = 0;
      showBlur = false;
      if (players[i] && players[i].playVideo) players[i].playVideo();
    } else {
      if (players[i] && players[i].pauseVideo) players[i].pauseVideo();
    }

    if (relative === -1) {
      scale = 0.8;
      opacity = 0.7;
      x = -distance;
      y = -40;
    } else if (relative === 1) {
      scale = 0.8;
      opacity = 0.7;
      x = distance;
      y = -40;
    } else if (relative === -2) {
      scale = 0.6;
      opacity = 0;
      x = -distance * 1.2;
      y = -120;
    } else if (relative === 2) {
      scale = 0.6;
      opacity = 0;
      x = distance * 1.2;
      y = -120;
    }

    card.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
    card.style.opacity = opacity;
    card.style.zIndex = 10 - Math.abs(relative);
    card.style.width = `${baseWidth * scale}px`;
    card.style.height = `${baseHeight * scale}px`;

    const blur = card.querySelector('.blur-overlay');
    blur.style.opacity = showBlur ? '1' : '0';
    blur.style.pointerEvents = showBlur ? 'auto' : 'none';

    // 이벤트 초기화
    blur.onclick = null;

    // 좌우 카드에만 클릭 이벤트 추가
    if (relative === -1) {
      blur.onclick = slidePrev;
    } else if (relative === 1) {
      blur.onclick = slideNext;
    }
  });
}


function slideNext() {
  currentIndex = getWrappedIndex(currentIndex + 1);
  updateCardPositions();
}

function slidePrev() {
  currentIndex = getWrappedIndex(currentIndex - 1);
  updateCardPositions();
}

function handleCardClick(index) {
  const card = document.querySelectorAll('.card')[index];
  const { title, pdfs } = videoSlides[index];
  const text = '자세한 설명을 보려면 PDF를 클릭하세요';

  const iframe = card.querySelector('iframe');
  let iframeSrc = iframe?.src;
  if (iframeSrc) {
    iframeSrc = iframeSrc.replace('controls=0', 'controls=1');
  }

  const popup = document.querySelector('.videos .popup');
  if (popup) {
    const poptxt = popup.querySelector('.poptxt');
    poptxt.innerHTML = ''; // 기존 내용 모두 제거

    // 제목 추가 (줄바꿈 처리)
    const h3 = document.createElement('h3');
    const titleLines = title.split('\n');
    titleLines.forEach((line, i) => {
      h3.appendChild(document.createTextNode(line));
      if (i < titleLines.length - 1) {
        h3.appendChild(document.createElement('br'));
      }
    });
    poptxt.appendChild(h3);

    // 설명 추가
    const desc = document.createElement('p');
    desc.textContent = text;
    poptxt.appendChild(desc);

    // pdfs 배열에 있는 만큼 링크 추가
    pdfs.forEach(pdf => {
      const p = document.createElement('p');
      p.className = 'pdf-link';

      const a = document.createElement('a');
      a.href = pdf.url;
      a.target = '_blank';
      a.textContent = `📄 ${pdf.title}.pdf`;

      p.appendChild(a);
      poptxt.appendChild(p);
    });

    // iframe에 영상 src 설정
    popup.querySelector('iframe').src = iframeSrc;
    popup.classList.add('on');
  }
}




document.querySelector('.arrow.left').addEventListener('click', slidePrev);
document.querySelector('.arrow.right').addEventListener('click', slideNext);

let startX = 0;
let isDragging = false;

cardContainer.addEventListener('mousedown', e => {
  startX = e.clientX;
  isDragging = true;
});

cardContainer.addEventListener('mouseup', e => {
  if (!isDragging) return;
  const delta = e.clientX - startX;
  if (delta > 100) slidePrev();
  else if (delta < -100) slideNext();
  isDragging = false;
});

cardContainer.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
  isDragging = true;
});

cardContainer.addEventListener('touchend', e => {
  if (!isDragging) return;
  const endX = e.changedTouches[0].clientX;
  const delta = endX - startX;
  if (delta > 100) slidePrev();
  else if (delta < -100) slideNext();
  isDragging = false;
});

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') {
    slideNext();
    slidePosterNext();
  } else if (e.key === 'ArrowLeft') {
    slidePrev();
    slidePosterPrev();
  }
});



let posterIndex = 0;

function createPosterCards() {
  const posterContainer = document.getElementById('posterCardContainer');
  posterContainer.innerHTML = '';

  posterSlides.forEach((poster, i) => {
    const card = document.createElement('div');
    card.className = 'card' + (i === posterIndex ? ' center' : '');
    card.innerHTML = `
        <div class="card-overlay" onclick="handlePosterClick(${i})">
          <div class="card-info">
            <h3>${poster.title}</h3>
            <p>자세히 보려면 클릭하세요</p>
          </div>
        </div>
        <div class="blur-overlay"></div>
        <img src="${poster.src}" alt="${poster.title}" style="width: 100%; height: 100%; object-fit: cover;" />
      `;
    posterContainer.appendChild(card);
  });

  updatePosterCardPositions();
}

function updatePosterCardPositions() {
  const cards = document.querySelectorAll('#posterCardContainer .card');

  const baseWidth = window.innerWidth * 0.15;
  const baseHeight = baseWidth * 1.4;
  const distance = baseWidth * 1.20;

  cards.forEach(card => card.classList.remove('center'));

  cards.forEach((card, i) => {
    const total = posterSlides.length;
    let relative = (i - posterIndex + total) % total;
    if (relative > total / 2) relative -= total;

    let scale = 0.6;
    let opacity = 0;
    let x = 0;
    let y = 0;
    let showBlur = true;

    if (relative === 0) {
      card.classList.add('center');
      scale = 1.2;
      opacity = 1;
      x = 0;
      y = 0;
      showBlur = false;
    } else if (relative === -1) {
      scale = 0.8;
      opacity = 0.7;
      x = -distance;
      y = -40;
    } else if (relative === 1) {
      scale = 0.8;
      opacity = 0.7;
      x = distance;
      y = -40;
    } else if (relative === -2) {
      scale = 0.6;
      opacity = 0;
      x = -distance * 1.2;
      y = -120;
    } else if (relative === 2) {
      scale = 0.6;
      opacity = 0;
      x = distance * 1.2;
      y = -120;
    }

    card.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
    card.style.opacity = opacity;
    card.style.zIndex = 10 - Math.abs(relative);
    card.style.width = `${baseWidth * scale}px`;
    card.style.height = `${baseHeight * scale}px`;

    const blur = card.querySelector('.blur-overlay');
    blur.style.opacity = showBlur ? '1' : '0';
    blur.style.pointerEvents = showBlur ? 'auto' : 'none';

    // 이벤트 초기화
    blur.onclick = null;

    // 좌우 카드에만 클릭 이벤트 추가
    if (relative === -1) {
      blur.onclick = slidePosterPrev;
    } else if (relative === 1) {
      blur.onclick = slidePosterNext;
    }
  });
}

function slidePosterNext() {
  posterIndex = (posterIndex + 1) % posterSlides.length;
  updatePosterCardPositions();
}

function slidePosterPrev() {
  posterIndex = (posterIndex - 1 + posterSlides.length) % posterSlides.length;
  updatePosterCardPositions();
}

function handlePosterClick(index) {
  const { title, src, pdfs } = posterSlides[index];

  const popup = document.querySelector('.posters .popup');
  if (!popup) return;

  // 팝업 내용 영역 초기화
  const poptxt = popup.querySelector('.poptxt');
  if (!poptxt) return;
  poptxt.innerHTML = '';

  // 제목 생성 (줄바꿈 처리)
  const h3 = document.createElement('h3');
  const titleLines = title.split('\n');
  titleLines.forEach((line, i) => {
    h3.appendChild(document.createTextNode(line));
    if (i < titleLines.length - 1) {
      h3.appendChild(document.createElement('br'));
    }
  });
  poptxt.appendChild(h3);

  // 설명 생성
  const desc = document.createElement('p');
  desc.textContent = '자세한 설명을 보려면 PDF를 클릭하세요';
  poptxt.appendChild(desc);

  // PDF 링크들 생성
  if (Array.isArray(pdfs)) {
    pdfs.forEach(pdf => {
      const p = document.createElement('p');
      p.className = 'pdf-link';

      const a = document.createElement('a');
      a.href = pdf.url;
      a.target = '_blank';
      a.textContent = `📄 ${pdf.title}.pdf`;

      p.appendChild(a);
      poptxt.appendChild(p);
    });
  }

  // 이미지 설정
  const popupImg = document.getElementById('popupPosterImg');
  if (popupImg) popupImg.src = src;

  // 팝업 표시
  popup.classList.add('on');
}





document.addEventListener('DOMContentLoaded', () => {
  createPosterCards();
});

window.addEventListener('resize', updateCardPositions);
window.addEventListener('resize', updatePosterCardPositions);