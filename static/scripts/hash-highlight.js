(function () {

  documentReady(function () {
    setHighlight();

    window.addEventListener('hash-highlight', () => {
      setHighlight()
    });
  });

  function setHighlight() {
    // removeHighlight();

    const id = window.location.hash.split('#')[1];

    const component = document.getElementById(id);
    if (component) {
      component.classList.add('is-highlight');
    }

    setTimeout(function () {
      // todo set check on UID to avoid canceling to early.
      // removeHighlight(component);
      component.classList.remove('is-highlight');
    }, 2000);
  }

  // function removeHighlight() {
  //   const highlights = document.getElementsByClassName('is-highlight');
  //   for (var i = 0; i < highlights.length; i++) {
  //   }
  // }

}());
