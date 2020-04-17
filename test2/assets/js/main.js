
// БЛОК БАННЕРОВ
// window.onload=function(){ 
//   if(window.innerWidth > 520){
//   // $('.banners-slider__wrapper').slick('unslick')
//   }
// }

function closeBtn() {
  $('.screen-shadow.show, .modal-wrap .close-button, .modal__login .close-button').on('click', function() {

      $('.modal-wrap').removeClass('showModal');
      $('.modal__login').removeClass('showModal');
      $('.screen-shadow').removeClass('show');
      $('body').removeClass('hidden');
      return false;

    })
}

window.onload=function(){if(window.innerWidth <= 520){ // ДОБАВЛЯЕМ СЛАЙДЕР НА МОБИЛЬНЫХ ЭКРАНАХ
  $('.banners-slider__wrapper').slick({
    // slidesToScroll: 1,
    centerMode: true,
    // centerPadding: '20px',
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '40px',
    slidesToShow: 1
  });
}
}




$(document).ready(function(){
  $('.inform-block').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    arrows: false
  })
})

// Show mobile menu

$(document).ready(function() {
  $('.navbar__mobile-menu-button').on('click', function() {
    $('.mobile-menu-wrap').addClass('show');
    $('.screen-shadow').addClass('show');
    $('body').addClass('hidden');

    $('.screen-shadow.show, .mobile-menu-wrap .close-button').on('click', function() {
      $('.mobile-menu-wrap').removeClass('show');
      $('.screen-shadow').removeClass('show');
      $('body').removeClass('hidden');
    })

  })
})


// account add user

$(document).ready(function() {
  $('#account__add-user').on('click', function() {
    $('#account-add-user-form').addClass('showModal');
    $('.screen-shadow').addClass('show');
    $('body').addClass('hidden');

    closeBtn()
    

    return false;

  })
})




// RATING STARS

$(document).ready(function(){

  $('.rating-wrap.rate-this').on('mouseover', function(e){



    var rating = $(this)[0];
    var stars = $(rating).children()

    var target = e.target;

    console.log(target)

    rating.onclick = function(e){
      var target = e.target;
      if(e.target.classList.contains('rating-star-item')){

        removeClass(stars,'current-active')
        target.classList.add('active','current-active');
      }
    }

    rating.onmouseover = function(e) {
        var target = e.target;
        if(target.classList.contains('rating-star-item')){
          removeClass(stars,'active')
          target.classList.add('active' );
          mouseOverAddClassActive(stars)
          // mouseOutActiveClass(stars)
        }
      }

     rating.onmouseout = function(){
        // addClass(stars,'active');
        mouseOutActiveClass(stars);
      } 


    
    function removeClass(arr) {
      for(var i = 0, iLen = arr.length; i <iLen; i ++) {
        for(var j = 1; j < arguments.length; j ++) {
          stars[i].classList.remove(arguments[j]);
        }
      }
    }

    function addClass(arr) {
      for(var i = 0, iLen = arr.length; i <iLen; i ++) {
        for(var j = 1; j < arguments.length; j ++) {
          stars[i].classList.add(arguments[j]);
        }
      }
    }  

    function mouseOverAddClassActive(arr) {
      for(i=0; i<arr.length; i++) {
        if(arr[i].classList.contains('active')) {
          break;
        } else {
          stars[i].classList.add('active');
        }
      }
    }

    function mouseOutActiveClass(arr){
      for(var i = arr.length-1; i >=1; i--) {
        if(arr[i].classList.contains('current-active')){
          break;
        }else {
          arr[i].classList.remove('active');
        }
      }
    }


  })

}) 




$(document).ready(function(){
  $('#login-btn').on('click', function(){
    $('.modal__login').addClass('showModal');
    $('.screen-shadow').addClass('show');
    $('body').addClass('hidden');

    closeBtn()

  })
})


 jQuery( function($){
     $(".tel-mask").mask("+38 (999) 999-99-99");
   });


// Страница пользователя, вкладка ТОВАРЫ  "ВАША КОМПАНИЯ ПОСТАВЛЯЕТ"
$(document).ready(function(){
  $(".checkbox").on('click', function(){
    var checkbox_data = $(this).attr('data-check')
    var ckeckbox_list =  $('.ckeckbox-dropdown-list');
    ckeckbox_list.each(function(elem){

        // console.log($(video[elem]).attr('data-issetSrc')) 
        if ($(ckeckbox_list[elem]).attr('data-check') == checkbox_data) {
          // console.log($(this).attr('data-issetSrc'))
           $(this).toggleClass('show')
        }

      })

  })

  $(".checkbox input[type=checkbox]").change(function() {
    var data_purchase = $(this).attr('data-check')
    var ckeckbox_list =  $('.ckeckbox-dropdown-list');

    if ($(this).is(':checked')) {
      
      ckeckbox_list.each(function(elem){

        // console.log($(video[elem]).attr('data-issetSrc')) 
        if ($(ckeckbox_list[elem]).attr('data-check') == data_purchase) {
          // console.log($(this).attr('data-issetSrc'))
           $(this).toggleClass('show')
           var checkbox_childs = ($(this).find('input[type=checkbox]'))

           checkbox_childs.each(function(elem){ 
            $(this).prop('checked', true)
           })
        }

      })
    } else {
      ckeckbox_list.each(function(elem){

        // console.log($(video[elem]).attr('data-issetSrc')) 
        if ($(ckeckbox_list[elem]).attr('data-check') == data_purchase) {
          // console.log($(this).attr('data-issetSrc'))
           $(this).toggleClass('show')
           var checkbox_childs = ($(this).find('input[type=checkbox]'))

           checkbox_childs.each(function(elem){ 
            $(this).prop('checked', false)
           })
        }

      })
    }
    

    
  });
})




// страница ОБЬЯВИТЬ ТОРГИ. Добавить ТОВАР
$(document).ready(function(){

$('input[name=request-rights]').on('click', function(){
  if ($(this).val() == 'b') {
    $('.create-trades__add-company').addClass('show')
  } else {
    $('.create-trades__add-company').removeClass('show')
  }
}) 

  var good_id = 2;

  $('#create-trades__add-goods').on('click', function(){
    
    var  new_good =      '<div class="create-trades__goods-item">'
            new_good +=        '<div class="flex-wrap">'
            new_good +=          '<div class="flex-column">'
            new_good +=            '<div class="form-items-group">'
            new_good +=              '<label class="control-label required text-12px-585858 " for="">Товар</label>'
            new_good +=              '<select class="form-item-square" name="request-product-'+good_id+'" id="" data-product-id="'+good_id+'" required>'
            new_good +=                '<option value="">Выберите товар</option>'
            new_good +=                '<option value="1">Свинина</option>'
            new_good +=                '<option value="2">КРС</option>'
            new_good +=                '<option value="3">Птица</option>'
            new_good +=                '<option value="4">Рыбьа</option>'
            new_good +=                '<option value="5">Молоко</option>'
            new_good +=                '<option value="6">Овощи и фрукты</option>'
            new_good +=               ' <option value="7">Зерновые</option>'
            new_good +=              '</select>'
             new_good +=           '</div>'
            new_good +=            '<div class="form-items-group">'
            new_good +=              '<label class="control-label text-12px-585858" for="">Дополнительное описание</label>'
            new_good +=              '<textarea class="form-item-square"  name="request-product-descriptio-'+good_id+'" id="" cols="30" rows="10" placeholder="Дополнительное описание" data-product-id="'+good_id+'"></textarea>'
            new_good +=            '</div>'
            new_good +=            '<div class="form-items-group">'
            new_good +=              '<label class="control-label text-12px-585858" for="" >Фото товара</label>'
             new_good +=             '<input calss="control-label text-12px-585858"  name="request-product-photo-'+good_id+'" type="file" data-product-id="'+good_id+'">'
             new_good +=          ' </div>'
            new_good +=            '<div class="form-items-group">'
            new_good +=              '<label class="control-label required text-12px-585858" for="">Общий обьем</label>'
            new_good +=              '<input class="form-item-square" name="request-product-weight-'+good_id+'" type="text" placeholder="кг" data-product-id="'+good_id+'" required>'
            new_good +=            '</div>'
            new_good +=            '<div class="form-items-group">'
            new_good +=              '<label class="control-label text-12px-585858" for="">Партия</label>'
            new_good +=              '<input class="form-item-square"  name="request-product-party-'+good_id+'" type="text" placeholder="Партия по кг" data-product-id="'+good_id+'">'
            new_good +=            '</div>'
            new_good +=            '<div class="form-items-group">'
            new_good +=              '<label class="control-label text-12px-585858" for="">Начальная цена</label>'
            new_good +=              '<input class="form-item-square"  name="request-product-price-'+good_id+'" type="text" placeholder="грн/кг" data-product-id="'+good_id+'">'
            new_good +=            '</div>'
            new_good +=            '<div class="form-items-group">'
            new_good +=              '<label class="control-label text-12px-585858" for="">Шаг торгов</label>'
            new_good +=              '<input class="form-item-square"  name="request-product-step-'+good_id+'" type="text" placeholder="Шаг торгов (грн)" data-product-id="'+good_id+'">'
            new_good +=            '</div>'
            new_good +=          '</div>'
            new_good +=          '<div class="flex-column">'
            new_good +=            '<div class="form-items-group ">'
            new_good +=              '<label class="control-label text-12px-585858" for="">Система налогообложения покупателя</label>'
            new_good +=              '<div class="checkbox-list">'
            new_good +=                '<div class="checkbox max-fullwidth">'
            new_good +=                  '<label for="">'
            new_good +=                    '<input type="radio"  name="request-product-taxes-'+good_id+'" value="1" data-product-id="'+good_id+'">'
            new_good +=                    'НДС 20%'
            new_good +=                  '</label>'
            new_good +=                '</div>'
            new_good +=                '<div class="checkbox max-fullwidth">'
            new_good +=                  '<label for="">'
            new_good +=                    '<input type="radio" name="request-product-taxes-'+good_id+'" value="2" data-product-id="'+good_id+'">'
            new_good +=                    'НДС 10%'
            new_good +=                  '</label>'
            new_good +=               ' </div>'
            new_good +=                '<div class="checkbox max-fullwidth">'
            new_good +=                  '<label for="">'
            new_good +=                    '<input type="radio" name="request-product-taxes-'+good_id+'" value="3" data-product-id="'+good_id+'">'
            new_good +=                    'Без НДС'
            new_good +=                  '</label>'
            new_good +=                '</div>'
            new_good +=              '</div>'
            new_good +=           ' </div>'
            new_good +=          '</div>'
            new_good +=        '</div>'
            new_good +=     ' </div>'


    $('.create-trades__goods-list').append(new_good)

    good_id++

    console.log(good_id)
    return false




  })

$('#create-trades__add-company').on('click', function(){

     
    var  add_company =      '<select class="form-item-square max-fullwidth" name="request-add-company-1" id="">'
       add_company +=       '<option value="">Выберите компанию</option>'
      add_company +=        '<option value="1">компания 1</option>'
      add_company +=        '<option value="2">компания 2</option>'
      add_company +=        '<option value="3">компания 3</option>'
      add_company +=        '<option value="4">компания 4</option>'
      add_company +=        '<option value="5">компания 5</option>'
       add_company +=     '</select>'


      console.log(add_company)
  $('.create-trades__company-list').append(add_company)

  return false
})

                   
})


$(document).ready(function(){
  $('#lots-bidder-table-wrap .bidder-name').on('click', function() {
    console.log('nien')
  })
})


// Страница торгов показать модальное окно Пригласить компании по Email

$(document).ready(function(){
  $('a.red-btn, a.green-btn-square, a').on('click', function(){
    var btn_href = $(this).attr('href')
    console.log(btn_href)
  btn_href = btn_href.slice(1)
console.log(btn_href)
    var modal_wrap = $('.modal-wrap')

     modal_wrap.each(function(elem){

        if ($(modal_wrap[elem]).attr('id') ==  btn_href) {      
        
          console.log($(this))   
         
          $(this).addClass('showModal')
          $('.screen-shadow').addClass('show');
          $('body').addClass('hidden');
          closeBtn()
          return false
        }

      })
    
  })
})

// Закрыть модальное окно сообщений
$(document).ready(function(){
  $('body').on('click', function(e){
    console.log(e.target.classList)
    if (!$(e.target).hasClass('showModal')) {
      $('.modal-message').removeClass('showModal')
    } else {
      console.log('да')
    }
  })
})



// Показать способы пополнения баланса

$(document).ready(function(){
  $('#replenish-btn').on('click', function(){
    $('.balance-replenish').toggleClass('show')

    return false
  })
})
