(function () {
  "use strict";
  let navigationState = false;
  let navigationSearchTerm = false;
  let $navigationButton;
  let $navigationSearch;
  let $navigationSearchReset;
  let $body;

  documentReady(function () {
    $body = document.querySelector(`body`);

    /**
     * Toggle mobile menu
     */
    $navigationButton = document.querySelector(`[data-docs-nav-toggle]`);
    $navigationButton.addEventListener('click', navigationOnClickHandler);
  });

  /**
   * Navigation OnClick Handler
   * @description Toggles the mobile menu
   */
  function navigationOnClickHandler() {
    navigationState = !navigationState;

    if (navigationState) {
      $body.classList.add('is-docs-nav-active');
    } else {
      $body.classList.remove('is-docs-nav-active');
    }
  }
})();
