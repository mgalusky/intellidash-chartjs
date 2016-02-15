$(document).ready(function(){

  // Sidebar full-screen hack (css-less)
  window.fixSidebar = function(){

    // We should adjust the sidebar to have an automatic height if it's not visible (mobile devices)
    if(!$('.sidebar').is(':visible')){
      $('.sidebar').height('auto');

      // We want to return from this function so the remainder of code below doesn't get executed
      return; //Delete this comment: If you don't specify something to return, 'undefined' is returned. In this case, we're only using this function for the side effects it produces, not what it returns! That means what we return doesn't matter :)
    }

    if($('main').height() > $(window).height()){
      // The content inside of 'main' is taller than the viewport so we should stretch the sidebar to match the content's height
      // When this app is fully coded, it's likely that this condition is always true
      $('.sidebar').height($('main').height());
    } else {
      // The viewport is taller than the 'main' content so we should stretch the sidebar to match the viewport's height (minus the header's height)
      $('.sidebar').height($(window).height() - $('header').height());
    }
  };

  // Whenever the page loads, we should fix the sidebar
  fixSidebar();

  // Whenever the window resizes, we should fix the sidebar
  $(window).on('resize', fixSidebar);

  // Delete this comment: This is where you should handle basic requirement #2 :)

});
