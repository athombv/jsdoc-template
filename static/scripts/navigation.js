documentReady(function () {
  let url = window.location.toString();
  let page = url.substring(url.lastIndexOf('/') + 1);
  let activeMenuItem = document.querySelector(`[href="${page}.html"]`);
  activeMenuItem.classList.add('is-active');
});