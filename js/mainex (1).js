// main 에 텍스트 작성 & 삭제
// querySelector가 달러임. 2개 이상시 뒤에 all붙임
(function(){
    const spanEl = document.querySelector('main h2 span')
    const txtArr = ['영상편집자', 'Designer', '나는천재', '또뭐넣지']
    
    let index = 0;
    let currentTxt = txtArr[index].split("")
    
    function writeTxt(){
        spanEl.textContent += currentTxt.shift()
        
        if(currentTxt.length !== 0){
            // 아직 출력할게 남았을 때
            // floor는 정수 내림
            // random은 0~1미만인 수 아무거나 나옴
            setTimeout(writeTxt, Math.floor(Math.random() * 100))
        }else{
            // 다출력되었을 때
            currentTxt = spanEl.textContent.split("")
            // 텍스트를 지우기 위해서 화면에 표시된 텍스트를 다시 한글자 단위로 분리해서 가져오기
            // 3초 = 3000
            setTimeout(deleteTxt, 3000)
        }
    }
    
    function deleteTxt(){
        // pop은 뒤에서 부터 지움
        currentTxt.pop()
        spanEl.textContent = currentTxt.join("")
        if(currentTxt.length !== 0){
            // 덜 삭제됐다
            setTimeout(deleteTxt, Math.floor(Math.random() * 100))
        }else{
            // 다 삭제됐다
            index = (index + 1) % txtArr.length
            currentTxt = txtArr[index].split("")
            writeTxt()
        }
    }
    writeTxt()
})()

// 스크롤 내리면 header 클래스 추가하기
window.addEventListener('scroll', function(){
    if(this.window.scrollY > 0){
        document.querySelector('header').classList.add('on')
    }else{
        document.querySelector('header').classList.remove('on')
    }
})

// header 에 버튼 누르면 해당하는 곳으로 이동하기 =
const animationMove =function(selector){
    const targerEl = document.querySelector(selector)
    const bsy = window.scrollY
    const targets =targerEl.getBoundingClientRect().top + bsy
    // scrollTO 는 위치로 이동
    window.scrollTo({
        top : targets,
        behavior : 'smooth'
    })
}
const scrollMove = document.querySelectorAll('[data-animation-scroll="true"]')
for(let i = 0; i < scrollMove.length ; i++){
    scrollMove[i].addEventListener('click', function(){
        const target = this.dataset.target;
        animationMove(target)
    })
}