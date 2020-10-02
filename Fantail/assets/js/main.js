////////////////////////////////////////////////// HEADER FIXED /////////////////////////////////////////////////////////////

window.onload = function () {
    var header = $(".header_fixed").offset().top;
    var sticky = header.offsetTop;
    // console.log(header);

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function headerFixed() {
        if (window.pageYOffset > 0) {
            $(".header_fixed").addClass("fixed");
            $("main").addClass("header-padding");
        } else {
            $(".header_fixed").removeClass("fixed");
            $("main").removeClass("header-padding");
        }
    }

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