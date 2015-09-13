// simple tooltip with jQuery, by Alessio Atzeni
// http://www.alessioatzeni.com/blog/simple-tooltip-with-jquery-only-text/

$(document).ready(function() {

  $('.info').hover(function(){

          // hover on
    
          var title = $(this).attr('title');
          var where = $(this).attr('data-target');
          var uuid = $(this).text();
          
          $('h1#' + where).replaceWith('<h1 class="hovered" id="' + where + '">' + 
            uuid + ': </h1>');
          $('h1#' + where).data('title', where);
          
          $(this).data('tipText', title).removeAttr('title');
          $('<span class="tooltip"></span>')
            .text(title)
            .appendTo('h1#' + where)
            .fadeIn('fast');

  }, function() {

          // hover off

          var where = $(this).attr('data-target');

          $('h1#' + where).text($('h1#' + where).data('title'));
          $('h1#' + where).removeAttr('class');

          $(this).attr('title', $(this).data('tipText'));
          $('.tooltip').remove();

  })
});
