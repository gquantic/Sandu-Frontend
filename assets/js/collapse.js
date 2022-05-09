$('*[data-collapse-trigger]').on('click', function () {
   let attr = $(this).attr('data-collapse-trigger');
   let element = $('*[data-collapse-id=' + attr + ']');
   let val = $(this).html();

   $(this).toggleClass('opened'); // Устанавливаем класс для самого элемента
   $(element).toggleClass('show'); // Устанавливаем класс для блока с содержимым коллапса
});