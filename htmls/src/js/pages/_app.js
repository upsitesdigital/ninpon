/**
 * Home
 */
export default function() {
  $(document).on('click', '.anchor', function() {
    var $target = $(this).attr('href');
    var $offset = $($target).position().top;
    $('body,html').animate({ scrollTop: $offset }, 1000);
    return false;
  });

  $(document).on('click', '#open-mega-menu', function() {
    const $this = $(this);
    $this.toggleClass('act');
    $('#mega-menu').toggleClass('act');
    return false;
  });

  $(document).on('click', '#open-mini-cart, .mini-cart-open .modal .overlay, .mini-cart .box-title .close-mini-cart', function() {
    const $this = $('body');
    $this.toggleClass('mini-cart-open');
    return false;
  });



  $(document).on('click', '.grid-select', function() {
    const $this = $(this);

    if (!$this.hasClass('act')) {
      $('.grid-select').removeClass('act');
      $this.addClass('act');
      if ($this.hasClass('icon-3x3')) {
        $('.grid-prod').removeClass('small');
      } else {
        $('.grid-prod').addClass('small');

      }
    }
    return false;
  });

  $(document).on('click', '.item-prod .wishlist', function() {
    const $this = $(this);
    const prodID = $this.data('prod-id');
    const prodIMG = $this.data('prod-img');
    const prodTITLE = $this.data('prod-title');
    $this.addClass('in-progress');
    if ($this.hasClass('act')) {
      setTimeout(function() { $this.removeClass('in-progress').removeClass('act') }, 2000);
    } else {
      setTimeout(function() { $this.removeClass('in-progress').addClass('act') }, 2000);
      setTimeout(function() { $('#item-wishlist').append('<div class="add-item-wishlist prod' + prodID + '"><div class="image"><img src="' + prodIMG + '"></div><div class="title">' + prodTITLE + ' has been added to your wishlist</div><a href="#"><svg class="icon fill"><use xlink:href="assets/img/icons.svg#close"></use></svg></a></div>').addClass('act') }, 2000);
      setTimeout(function() { $('#item-wishlist .prod' + prodID).remove() }, 4000);
    }


    return false;
  });
  $(document).on('click', '.list-faq .item-faq .title', function() {
    const box = $(this).closest('.item-faq');
    box.toggleClass('act').find('.content').slideToggle();
  });

  $(document).on('focus', '.form-information input, .form-payment input', function() {
    if ($(this).val() == '') {
      $(this).closest('label').addClass('act');
    }
    return false;
  });
  $(document).on('blur', '.form-information input, .form-payment input', function() {
    if ($(this).val() == '') {
      $(this).closest('label').removeClass('act');
    }
    return false;
  });

  $(document).on('change', '.inputfile > input', function() {
    var name = $(this).prop('files');
    console.log(name);
    if (name.length >= 2) {
      $(this).closest('.inputfile').find('.file').html(name.length + ' arquivos');
    } else {
      $(this).closest('.inputfile').find('.file').html(name[0].name);
    }
    return false;
  });

  $('.selectric').selectric();

}