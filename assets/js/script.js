

$('.partners__sliders').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: false,
    // centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1200,
    prevArrow: '<button type="button" class="slick-prev"><img src="assets/icons/leftslider.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="assets/icons/rightslider.svg"></button>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                dots: true,
                arrows: false
            }
        }
    ]
});

jQuery(function($) {

// ну тут вы не тупые думаю если смогли открыть код сами поймете 
let dots = document.querySelectorAll('.image_card');
let card = document.querySelectorAll('.products__cards_card');
// let texts = document.querySelectorAll('.products__cards_card_subtitles');

for (let i = 0; i < dots.length; i++) {
    card[i].addEventListener('click', toggleActive);
    // card[i].addEventListener('click', toggleActivess);
}


function toggleActive() {
    // короче это условие проверяет есть ли класс active 
    if (this.classList.contains('products__cards_card_active')) {
        // если он активный то удалить класс active
        this.classList.remove('products__cards_card_active');
        this.classList.remove('active');
    } else {
        // добавить класс active на тот элемент на который вы нажали если условие дошло до сюдого вот это логика кода сам написаль 
        // с этим кодом было заморочек много так что аккуратно много разных попыток а в кодце все было настолько логично легко!!!
        
            for (let i = 0; i < card.length; i++) {
                card[i].classList.remove('products__cards_card_active');
                card[i].classList.remove('active');
            }
            this.classList.add('products__cards_card_active');
            this.classList.add('active');
    }
}


let languageActive = document.querySelectorAll('.language__img');
let active = document.querySelector('.language__img_active') || dots[0];
// let card = document.querySelectorAll('.products__cards_card');
// let card_active = document.querySelector('.products__cards_card_active') || dots[0];
// // let subtitle = document.querySelectorAll('.products__cards_card_subtitles');
// // let subtitleActive = document.querySelector('.products__cards_card_subtitles_active') || dots[0];

for (let i = 0; i < dots.length; i++) {
    languageActive[i].addEventListener('click', toggleActives);
    // card[i].addEventListener('click', toggleActiveCard);
//     // card[i].addEventListener('click', toggleActiveSubtitle);
}

function toggleActives() {
    active.classList.remove('language__img_active');
    this.classList.add('language__img_active');

    active = this;
}



const boxes = document.querySelectorAll(".clickIcon__box");

boxes.forEach(box => {
  box.addEventListener("click", () => {
    // Удаляем класс clickIcon__box_line_active у предыдущего блока
    const activeBox = document.querySelector(".clickIcon__box_line_active");
    if (activeBox) {
        activeBox.classList.remove("clickIcon__box_line_active");
        document.getElementById("card1").style.display = "none";
        document.getElementById("card2").style.display = "none";
        document.getElementById("card3").style.display = "none";
        document.getElementById("card4").style.display = "none";
        document.getElementById("card5").style.display = "none";
        document.getElementById("card6").style.display = "none";
        document.getElementById("card7").style.display = "none";
        document.getElementById("card8").style.display = "none";
        document.getElementById("card9").style.display = "none";
    }

    // Добавляем класс clickIcon__box_line_active текущему блоку
    const boxLine = box.querySelector(".clickIcon__box_line");
    boxLine.classList.add("clickIcon__box_line_active");
    $(this)
        .closest('div.main_active').find('ul.clickBtn__block').removeClass('clickBtn__block_active').eq($(this).index()).addClass('clickBtn__block_active');
  });
});

$('ul.clickIcon__boxs').on('click', 'li:not(.clickIcon__box_line_active)', function() {
    $(this)
    //   .addClass('clickIcon__box_line_active').siblings().removeClass('clickIcon__box_line_active')
      .closest('div.main_active').find('ul.clickBtn__block').removeClass('clickBtn__block_active').eq($(this).index()).addClass('clickBtn__block_active');
});

$('ul.clickBtn__block').on('click', 'li:not(.clickBtn__box_active)', function() {
    $(this)
      .addClass('clickBtn__box_active').siblings().removeClass('clickBtn__box_active')
    //   .closest('section.clickBtn').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
});

// $('ul.clickBtn__block').on('click', 'li:not(.clickBtn__box_active2)', function() {
//     $(this)
//       .addClass('clickBtn__box_active2').siblings().removeClass('clickBtn__box_active2')
//       .closest('section.clickBtn_gg').find('div.catalog__content2').removeClass('catalog__content2_active2').eq($(this).index()).addClass('catalog__content2_active2');
// });

window.addEventListener("DOMContentLoaded", (event) => {
document.getElementById("btn1").addEventListener("click", function() {
    document.getElementById("card1").style.display = "flex";
    document.getElementById("card2").style.display = "none";
    document.getElementById("card3").style.display = "none";
    document.getElementById("card4").style.display = "none";
    document.getElementById("card5").style.display = "none";
    document.getElementById("card6").style.display = "none";
    document.getElementById("card7").style.display = "none";
    document.getElementById("card8").style.display = "none";
    document.getElementById("card9").style.display = "none";
});
});
window.addEventListener("DOMContentLoaded", (event) => {
document.getElementById("btn2").addEventListener("click", function() {
    document.getElementById("card1").style.display = "none";
    document.getElementById("card2").style.display = "flex";
    document.getElementById("card3").style.display = "none";
    document.getElementById("card4").style.display = "none";
    document.getElementById("card5").style.display = "none";
    document.getElementById("card6").style.display = "none";
    document.getElementById("card7").style.display = "none";
    document.getElementById("card8").style.display = "none";
    document.getElementById("card9").style.display = "none";
});
});
window.addEventListener("DOMContentLoaded", (event) => {
document.getElementById("btn3").addEventListener("click", function() {
    document.getElementById("card1").style.display = "none";
    document.getElementById("card2").style.display = "none";
    document.getElementById("card3").style.display = "flex";
    document.getElementById("card4").style.display = "none";
    document.getElementById("card5").style.display = "none";
    document.getElementById("card6").style.display = "none";
    document.getElementById("card7").style.display = "none";
    document.getElementById("card8").style.display = "none";
    document.getElementById("card9").style.display = "none";
});
});
window.addEventListener("DOMContentLoaded", (event) => {
document.getElementById("btn4").addEventListener("click", function() {
    document.getElementById("card1").style.display = "none";
    document.getElementById("card2").style.display = "none";
    document.getElementById("card3").style.display = "none";
    document.getElementById("card4").style.display = "flex";
    document.getElementById("card5").style.display = "none";
    document.getElementById("card6").style.display = "none";
    document.getElementById("card7").style.display = "none";
    document.getElementById("card8").style.display = "none";
    document.getElementById("card9").style.display = "none";
});
});

window.addEventListener("DOMContentLoaded", (event) => {
document.getElementById("btn5").addEventListener("click", function() {
    document.getElementById("card1").style.display = "none";
    document.getElementById("card2").style.display = "none";
    document.getElementById("card3").style.display = "none";
    document.getElementById("card4").style.display = "none";
    document.getElementById("card5").style.display = "flex";
    document.getElementById("card6").style.display = "none";
    document.getElementById("card7").style.display = "none";
    document.getElementById("card8").style.display = "none";
    document.getElementById("card9").style.display = "none";
});
});
window.addEventListener("DOMContentLoaded", (event) => {
document.getElementById("btn6").addEventListener("click", function() {
    document.getElementById("card1").style.display = "none";
    document.getElementById("card2").style.display = "none";
    document.getElementById("card3").style.display = "none";
    document.getElementById("card4").style.display = "none";
    document.getElementById("card5").style.display = "none";
    document.getElementById("card6").style.display = "flex";
    document.getElementById("card7").style.display = "none";
    document.getElementById("card8").style.display = "none";
    document.getElementById("card9").style.display = "none";
});
});
window.addEventListener("DOMContentLoaded", (event) => {
document.getElementById("btn7").addEventListener("click", function() {
    document.getElementById("card1").style.display = "none";
    document.getElementById("card2").style.display = "none";
    document.getElementById("card3").style.display = "none";
    document.getElementById("card4").style.display = "none";
    document.getElementById("card5").style.display = "none";
    document.getElementById("card6").style.display = "none";
    document.getElementById("card7").style.display = "flex";
    document.getElementById("card8").style.display = "none";
    document.getElementById("card9").style.display = "none";
});
});
window.addEventListener("DOMContentLoaded", (event) => {
document.getElementById("btn8").addEventListener("click", function() {
    document.getElementById("card1").style.display = "none";
    document.getElementById("card2").style.display = "none";
    document.getElementById("card3").style.display = "none";
    document.getElementById("card4").style.display = "none";
    document.getElementById("card5").style.display = "none";
    document.getElementById("card6").style.display = "none";
    document.getElementById("card7").style.display = "none";
    document.getElementById("card8").style.display = "flex";
    document.getElementById("card9").style.display = "none";
});
});
window.addEventListener("DOMContentLoaded", (event) => {
document.getElementById("btn9").addEventListener("click", function() {
    document.getElementById("card1").style.display = "none";
    document.getElementById("card2").style.display = "none";
    document.getElementById("card3").style.display = "none";
    document.getElementById("card4").style.display = "none";
    document.getElementById("card5").style.display = "none";
    document.getElementById("card6").style.display = "none";
    document.getElementById("card7").style.display = "none";
    document.getElementById("card8").style.display = "none";
    document.getElementById("card9").style.display = "flex";
});
});



// $('input[name=phone]').mask("0999 99 99 99");

});