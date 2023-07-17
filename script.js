// Adds underline when hovers
document.addEventListener('DOMContentLoaded', function() {
    // Get all spans with class "underline"
    const underlineSpans = document.querySelectorAll('.underline');
    const searchButtons = document.querySelectorAll('.searchButton');
    const textInput = document.querySelector('input[name="search"]');
    const googleApps = document.querySelectorAll('.google_apps');
  
    // Add event listener to each span
    underlineSpans.forEach(function(span) {
      span.addEventListener('mouseenter', function() {
        this.style.textDecoration = 'underline';
        this.style.cursor = 'pointer';
      });
  
      span.addEventListener('mouseleave', function() {
        this.style.textDecoration = 'none';
        this.style.cursor = 'default';
      });
    });


  // Add event listener to each search button
  searchButtons.forEach(function(button) {
    button.addEventListener('mouseenter', function() {
      this.style.border = '.5px solid grey';
    });

    button.addEventListener('mouseleave', function() {
      this.style.border = 'none';
    });
  });

   // Add event listener to the text input
   textInput.addEventListener('mouseenter', function() {
    this.style.border = 'none';
    this.style.backgroundColor = "rgba(240, 240, 240, .1)"
  });

  textInput.addEventListener('mouseleave', function() {
    this.style.border = '1px solid grey';
    this.style.backgroundColor = 'transparent';
  });
    // Add event listener to each element
  googleApps.forEach(function(span) {
    span.addEventListener('mouseenter', function() {
      this.style.backgroundColor = "grey"
      this.style.cursor = 'pointer';
    });

    span.addEventListener('mouseleave', function() {
        this.style.backgroundColor = "transparent"
        this.style.cursor = 'default';
    });
  });
});