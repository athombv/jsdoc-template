(function () {

  documentReady(function () {
    setHighlight();
    window.addEventListener('highlight', () => {
      console.log('hashchange');
      setHighlight()
    });
  });

  function setHighlight() {
    removeHighlight();

    const id = window.location.hash.split('#')[1];

    const component = document.getElementById(id);
    console.log(id, component);
    if (component) {
      component.classList.add('is-highlight');
    }

    setTimeout(function () {
      // todo set check on UID to avoid canceling to early. 
      removeHighlight();
    }, 2000);
  }

  function removeHighlight() {
    const highlights = document.getElementsByClassName('is-highlight');
    for (var i = 0; i < highlights.length; i++) {
      highlights[i].classList.remove('is-highlight');
    }
  }

}());
