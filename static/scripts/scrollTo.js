(function(){
  "use strict"

  documentReady(function(){
    window.addEventListener("hashchange", onHashChangeHandler, false);
  })

  function onHashChangeHandler(event){
    event.preventDefault();

    const id = window.location.hash.split('#')[1];
    document.getElementById(id).scrollIntoView({
      behavior: "smooth"
    });

    return false;
  }
})();