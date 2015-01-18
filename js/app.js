$(function() {

	/*
  $('.sidebar__menu li.with-children').click(function() {
    var $this = $(this);
    if (!$this.hasClass('is-active')) {
      $('.sidebar__menu__in').animate({height: 'hide'}, 1000).parent().removeClass('is-active');
      $this.find('.sidebar__menu__in').animate({height: 'show'}, 1000).parent().addClass('is-active');
      return false;
    }
  });
	*/

	$('.sidebar__menu li.with-children').click(function() {
		var $this = $(this);
		if (!$this.hasClass('is-active')) {
			$('.sidebar__menu__in').animate({height: 'hide'}, 1000).parent().removeClass('is-active');
			$this.find('.sidebar__menu__in').animate({height: 'show'}, 1000).parent().addClass('is-active');
		} else {
			$this.find('.sidebar__menu__in').animate({height: 'hide'}, 1000).parent().removeClass('is-active');
		}
		return false;
	});

	$('.js-popup-open').click(function(){
		$('.js-popup').css('display', 'block');
	});

	$('.js-popup-close').click(function(){
		$('.js-popup').css('display', 'none');
	});

});