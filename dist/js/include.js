function includeHTML() {
  var elements = document.querySelectorAll('[w3-include-html]');
  elements.forEach(function(element) {
      var file = element.getAttribute('w3-include-html');
      if (file) {
          var xhr = new XMLHttpRequest();
          xhr.onreadystatechange = function() {
              if (xhr.readyState == 4) {
                  if (xhr.status == 200) {
                      element.innerHTML = xhr.responseText;
                      element.removeAttribute('w3-include-html');
                      includeHTML(); // Re-apply to newly added elements
                  } else {
                      element.innerHTML = 'Page not found.';
                  }
              }
          };
          xhr.open('GET', file, true);
          xhr.send();
      }
  });
}

document.addEventListener('DOMContentLoaded', includeHTML);