window.addEventListener('DOMContentLoaded', function() {
  var $toc = document.getElementById('post-toc');

  if ($toc) {
    window.addEventListener('scroll', function(evt) {
      var scroll = window.scrollY;

      if (scroll > 255) {
        var pos = scroll - 120;

        $toc.style.top = `${pos}px`;
      } else {
        $toc.style.top = `120px`;
      }
    });
  }

  var $links = document.querySelectorAll('.post-content a');

  if ($links) {
    $links.forEach(function($link) {
      $link.target = '_blank';
    });
  }
});
