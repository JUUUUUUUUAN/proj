const abilityBar = document.querySelectorAll('.ability-bar');
const contacticon = document.querySelector('.contact__wrapper');
console.log(abilityBar);
console.log(contacticon);

window.addEventListener('scroll', function(){
  console.log(window.scrollY);
  if (window.scrollY >= 700) {
  abilityBar.forEach(function(abilityBarEl){
    abilityBarEl.classList.add('show');
  })
  if(window.scrollY >= 1800){
    contacticon.classList.add('show');
  }
  }
})

const swiper = new Swiper('.project .swiper', {
  // 슬라이드 옵션 지정
  direction: 'horizontal', // 수평 슬라이드
  loop: true, // 반복 재생 여부, 1 -> 2 -> 3 -> 다시 1
  // autoplay: { // 자동 재생 여부
  //   delay : 1000 // 1초마다 슬라이드 바뀜
  // },

  // 이전/다음 슬라이드 버튼 옵션
  navigation: {
    nextEl: '.project .swiper-button-next',
    prevEl: '.project .swiper-button-prev',
  },
});

