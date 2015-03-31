(function() {
  var htmlTag = document.getElementsByTagName('html')[0];
  if (htmlTag) {
    console.log('toggling rockabye class on html tag');
    htmlTag.classList.toggle('rockabye');
  }
  else {
    console.log('html tag not found');
  }
})();
