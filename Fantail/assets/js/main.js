////////////////////////////////////////////////// HEADER FIXED /////////////////////////////////////////////////////////////
function headerFixed() {
    var header = $(".header_fixed").offset().top;
    var sticky = header.offsetTop;

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    if (window.pageYOffset > 0) {
        $(".header_fixed").addClass("fixed");
        $("main").addClass("header-padding");
    } else {
        $(".header_fixed").removeClass("fixed");
        $("main").removeClass("header-padding");
    }
}
$(document).ready(function(){
    headerFixed();
})
window.onload = function () {
    window.onscroll = function () {
        headerFixed();
    };
};


///////////////////////////////////////// CLOSE MENU
closeButton();
function closeButton() {
    $('.close_btn').on('click', function(){
        console.log('HELLO')
        $('.menu_list_wrap').removeClass('show');
        $('body').removeClass('overflow-hidden');
    })
}


var mySwiper = new Swiper('.slider_r', {
    // Optional parameters
    slidesPerView: 'auto',
    spaceBetween: 12,

    // If we need pagination
    // pagination: {
    //     el: '.swiper-pagination',
    // },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
})


///////////////////////// INFO ON IMAGE BLOCK
// alignInfoOnImageContent()
function alignInfoOnImageContent() {


    // let info_content = $('.block_infoOnImage__content');
    let info_content = document.getElementsByClassName('block_infoOnImage__content');

    for(i=0; i<info_content.length; i++) {

        let el_parent_height = (info_content[i].parentNode.offsetHeight / 2)
        console.log(el_parent_height)
        let el_heigh = (info_content[i].offsetHeight / 2)
        console.log(el_parent_height - el_heigh)
        // info_content[i].style.top = 'calc('+ el_parent_height - el_heigh +')'
        info_content[i].style.top = (el_parent_height - el_heigh) + 'px'

    }
}

////////////////////////// ACCORDION
var acc = document.getElementsByClassName("accordion_btn");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}