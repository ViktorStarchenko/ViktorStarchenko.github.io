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
$('.navbar-toggler').on('click', function() {
    $('body').addClass('hidden');
    // $('.shadow-screen').addClass('active');
})
closeButton();
function closeButton() {
    $('.close_btn').on('click', function(){
        console.log('HELLO')
        $('.menu_list_wrap').removeClass('show');
        // $('.shadow-screen').removeClass('active');
        $('body').removeClass('hidden');

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

//////////////////////////////////// ANIMATION ///////////////////////////


$(document).ready(function(){
    // Animation
    animate = el => {
        const scrollTop = $(window).scrollTop()
        const winHeight = $(window).height()
        const offset = $(el).offset().top
        const schemeHeight = $(el).height()

        if (scrollTop + winHeight >= offset && scrollTop <= offset + schemeHeight) {
            $(el).addClass('add-animation')
            $(el).addClass('animated')
        } else {
            $(el).removeClass('add-animation')
            $(el).removeClass('animated')
        }
    }

    $(window).on('load scroll', () => {

        $('.to-animate').each((idx, item) => {
            animate(item)
        })
    })
})



$(document).ready(function(){

    var redirect = function(url, method) {
        console.log('redirect')
        var form = document.createElement('form');
        form.method = method;
        form.action = url;
        form.submit();
    };

    redirect('/', 'post');
})

var redirect = 'http://www.website.com/page?id=23231';
$.redirectPost(redirect, {x: 'example', y: 'abc'});

// jquery extend function
$.extend(
    {
        redirectPost: function(location, args)
        {
            var form = '';
            $.each( args, function( key, value ) {
                value = value.split('"').join('\"')
                form += '<input type="hidden" name="'+key+'" value="'+value+'">';
            });
            $('<form action="' + location + '" method="POST">' + form + '</form>').appendTo($(document.body)).submit();
        }
    });

