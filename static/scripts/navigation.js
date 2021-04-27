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
  });

  function navigationOnClickHandler() {
    navigationState = !navigationState;

    if (navigationState) {
      $body.classList.add('is-navigation-active');
    } else {
      $body.classList.remove('is-navigation-active');
    }
  }

})();