/* вставка телефона */
$(window).on('load', function() {
	if ($(window).width() < 992){
		$('.header_block_1_row_2 a:nth-child(1)').clone().prependTo($('.header_block_2_wrap'));
		$('header .callback').addClass('button button_bordered');
	}
});

$('.input_number_wrap').on('click', 'button:not([type="submit"])', function(e){
	e.preventDefault();
})
$("[type='number']").keypress(function (evt) {
    evt.preventDefault();
});

/* Выпадающий список */
$('.dropdown_wrap a').click(function(e) {
	$(this).siblings('.dropdown_list').toggle();	
	$('.dropdown_list').not($(this).siblings()).hide();
	e.stopPropagation();
});

/* Выпадающее меню - подкаталог */
$('.cat_menu_item a').click(function(e) {
	$(this).siblings('.cat_menu_dropdown_wrap').toggle();
	$(this).toggleClass('active');
	$('.cat_menu_dropdown_wrap').not($(this).siblings()).hide();
	$(this).siblings('.cat_menu_dropdown_wrap').find('span').text($(this).text());
	e.stopPropagation();
});

/* Закрытие выпадающих по клику вне */
$('html').click(function() {
	$('.cat_menu_dropdown_wrap, .dropdown_list').hide();
	$('.cat_menu_item a').removeClass('active')
});

/* Поиск в шапке выпадающий список */
$('.header_search label, .icon_loupe').click(function(e) {
	$('.input_search_wrap').addClass('active');
	$('.header_search input').focus();
	//$('.input_search_wrap_list').show();

	e.stopPropagation();
});

$(".header_search input").on("keyup", function(){
	if(this.value!=""){
	    $('.input_search_wrap_list').show();
	} else {
	    $('.input_search_wrap_list').hide();
	}
});

$('html').click(function(event) {
	$('.input_search_wrap').removeClass('active');
	$('.input_search_wrap_list').hide();
});

/* Гамбургерное основное меню */
$('.header_block_1_burger').click(function(event) {
	$(this).toggleClass('open');
	$('.header_block_1_wrap').toggle();
});

/* Меню каталога */
$('.cat_icon').click(function(event) {
	$('.cat_menu_nav').toggle();
});


/* ищет элементы по высоте используя класс и ставит максимальную для всех */
$.fn.equalHeights = function(){
	var max_height = 0;
	$(this).each(function(){
		max_height = Math.max($(this).height(), max_height);
	});
	$(this).each(function(){
		$(this).height(max_height);
	});
};
setTimeout(function(){
	$('.product_slider .product_card_cost').equalHeights();
}, 500);



if ($(window).width() < 576) {
	
		//$('.header_block_1_row_2 a:nth-child(1)').clone().prependTo($('.header_block_2_wrap'));
		$( document ).ready(function() {
			var realized_slide_img_height = $('.realized_slider_wrap .realized_slide_img').outerHeight();
			var slider_arrow_top = realized_slide_img_height * 0.65;
			$('.realized_slider_wrap .slider_arrow').css('top', slider_arrow_top);
		});

	} else if ($(window).width() < 992){

		//$('.header_block_1_row_2 a:nth-child(1)').clone().prependTo($('.header_block_2_wrap'));
		$( document ).ready(function() {
			var realized_slide_img_height = $('.realized_slider_wrap .realized_slide_img').outerHeight();
			var slider_arrow_top = realized_slide_img_height * 0.55;
			$('.realized_slider_wrap .slider_arrow').css('top', slider_arrow_top);

			$('.header_block .callback').addClass('button button_bordered');
		});
	}

/* Валидация форм */
$(function() {
  $("form[name='callback']").validate({
    rules: {
      name: "required",
      tel: "required",
    },
    messages: {
      name: "Обязательное поле",
      tel: "Обязательное поле",
    },
    //errorClass: "input_error",
    submitHandler: function(form) {
      form.submit();
    }
  });
});

/* slick slider */
$('.main_slider').slick({
	dots: true,
	arrows: true,
	infinite: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	prevArrow: $('.slider_arrow_left'),
	nextArrow: $('.slider_arrow_right'),
	draggable: false,
	appendDots: ".main_slider_dots",
	responsive: [
		{
		  breakpoint: 768,
		  settings: {
		    slidesToShow: 1,
		    slidesToScroll: 1,
		    arrows: false,
			prevArrow: null,
			nextArrow: null,
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
		    slidesToShow: 1,
		    slidesToScroll: 1
		  }
		}
	]
});


$('.product_slider_hits').slick({
	dots: false,
	arrows: true,	
	infinite: false,
	slidesToShow: 3,
	slidesToScroll: 1,
	prevArrow: $('.product_slider_block_hits .slider_arrow_left'),
	nextArrow: $('.product_slider_block_hits .slider_arrow_right'),
	variableWidth: true,
	centerMode: false,
	focusOnSelect: false,
	draggable: true,
	responsive: [
		{
			breakpoint: 1251,
			settings: {
			focusOnSelect: true,
			//infinite: true,
			centerMode: false,
		  }
		},
		{
		  breakpoint: 992,
		  settings: {
		    slidesToShow: 3,
		    slidesToScroll: 1,
		    //infinite: true,
			centerMode: false,
		  }
		},
		{
		  breakpoint: 768,
		  settings: {
		    slidesToShow: 2,
		    slidesToScroll: 1,
		    centerMode: false,
		    variableWidth: false,
		    infinite: false,
		  }
		}
	]
});

$('.product_slider_new').slick({
	dots: false,
	arrows: true,
	infinite: false,
	slidesToShow: 3,
	slidesToScroll: 1,
	prevArrow: $('.product_slider_block_new .slider_arrow_left'),
	nextArrow: $('.product_slider_block_new .slider_arrow_right'),
	variableWidth: true,
	draggable: true,
	responsive: [
		{
			breakpoint: 1251,
			settings: {
			focusOnSelect: true,
			//infinite: true,
			centerMode: false,
		  }
		},
		{
		  breakpoint: 992,
		  settings: {
		    slidesToShow: 3,
		    slidesToScroll: 1,
		    //infinite: true,
			centerMode: false,
		  }
		},
		{
		  breakpoint: 768,
		  settings: {
		    slidesToShow: 2,
		    slidesToScroll: 1,
		    centerMode: false,
		    variableWidth: false,
		    infinite: false,
		  }
		}
	]
});

$('.product_slider_sale').slick({
	dots: false,
	arrows: true,
	infinite: false,
	slidesToShow: 3,
	slidesToScroll: 1,
	prevArrow: $('.product_slider_block_sale .slider_arrow_left'),
	nextArrow: $('.product_slider_block_sale .slider_arrow_right'),
	variableWidth: true,
	draggable: true,
	responsive: [
		{
			breakpoint: 1251,
			settings: {
			focusOnSelect: true,
			//infinite: true,
			centerMode: false,
		  }
		},
		{
		  breakpoint: 992,
		  settings: {
		    slidesToShow: 3,
		    slidesToScroll: 1,
		    //infinite: true,
			centerMode: false,
		  }
		},
		{
		  breakpoint: 768,
		  settings: {
		    slidesToShow: 2,
		    slidesToScroll: 1,
		    centerMode: false,
		    variableWidth: false,
		    infinite: false,
		  }
		}
	]
});

$('.realized_slider').slick({
	dots: false,
	arrows: true,
	infinite: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	prevArrow: $('.realized_slider_wrap .slider_arrow_left'),
	nextArrow: $('.realized_slider_wrap .slider_arrow_right'),
	draggable: false,
});


	

	