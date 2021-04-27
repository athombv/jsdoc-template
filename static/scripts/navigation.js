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
    const page = url.substring(url.lastIndexOf('/') + 1).split('#')[0];
    const $activeMenuItem = document.querySelector(`[href="${page}.html"]`);
    if ($activeMenuItem) {
      $activeMenuItem.classList.add('is-active');
    }

    /* Save menu scroll position */
    const $navigationScroll = document.querySelector(`[data-navigation-scroll]`);
    $navigationScroll.scrollTop = localStorage.getItem('navigationScroll');
    // reset localstorage for scroll position
    localStorage.removeItem('navigationScroll');

    window.onbeforeunload = function () {
      let position = $navigationScroll.scrollTop;
      localStorage.setItem('navigationScroll', position);
    }

    /* Navigation Search */
    const $navigationSearch = document.querySelector(`[data-navigation-search]`);
    $navigationSearch.addEventListener('keyup', searchOnKeyUpHandler);

  });

  function navigationOnClickHandler() {
    navigationState = !navigationState;

    if (navigationState) {
      $body.classList.add('is-navigation-active');
    } else {
      $body.classList.remove('is-navigation-active');
    }
  }

  function searchOnKeyUpHandler(event){
    const val = event.target.value;

    // reset matches
    const allMenuItems = document.querySelectorAll(`[data-search-key]`);
    allMenuItems.forEach((item)=>{
      item.classList.remove('is-match');
    });

    // if no value stop
    if(!val){
      $body.classList.remove('is-navigation-search');
      return;
    }

    // show match
    $body.classList.add('is-navigation-search');

    const matches = document.querySelectorAll(`[data-search-key*=${val.toLowerCase()}]`);
    matches.forEach((match)=>{
      match.classList.add('is-match');
    });
    
  }

})();