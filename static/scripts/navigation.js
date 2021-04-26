(function () {
  "use strict";
  let navigationState = false;
  let $navigationButton;
  let $body;

  documentReady(function () {
    $body = document.querySelector(`body`);

    /* Toggle mobile menu */
    $navigationButton = document.querySelector(`[data-navigation-toggle]`);
    $navigationButton.addEventListener("click", navigationOnClickHandler);

    /* Active menu item */
    const url = window.location.toString();
    const page = url.substring(url.lastIndexOf('/') + 1);
    const $activeMenuItem = document.querySelector(`[href="${page}.html"]`);
    $activeMenuItem.classList.add('is-active');
  });

  function navigationOnClickHandler(){
    navigationState = !navigationState;

    if(navigationState){
      $body.classList.add('is-navigation-active');
    }else{
      $body.classList.remove('is-navigation-active');
    }
  }

})();