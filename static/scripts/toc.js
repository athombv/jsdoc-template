(function () {
  "use strict"

  documentReady(function () {
    const tocLinks = document.getElementsByClassName('toc__link');
    let hashCheck = false;

    Array.from(tocLinks).forEach(($tocLink) => {
      $tocLink.addEventListener("click", function (event) {
        event.preventDefault();

        const id = this.href.split('#')[1];
        // set parameter to check if hash hasn't changed meanwhile
        hashCheck = id;

        document.getElementById(id).scrollIntoView({
          behavior: "smooth"
        });

        // Set correct hash after animation
        setTimeout(function () {
          // check if hash hasn't changed
          if (hashCheck === id) {
            window.location.hash = id;
          }
        }, 750);
      });
    });
  })
})();