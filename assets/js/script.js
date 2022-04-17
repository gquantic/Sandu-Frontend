$('.nav-tabs li').on('click', function () {
   let block = $(this).attr('data-tab-block');
   let item  = $(this).attr('data-tab-item');

   $(this).parent('.nav-tabs').children('li').removeClass('active');
   $(this).addClass('active');

   let selectedBlock = $('#' + block);

   selectedBlock.children('.tab').removeClass('active');
   selectedBlock.children('#' + item).addClass('active');
});


var swiper = new Swiper(".product-media__body", {
   loop: true,
   slidesPerView: 3,
   spaceBetween: 30,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
});
