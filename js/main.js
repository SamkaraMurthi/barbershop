document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('btn-div3');
    const image = document.getElementById('imgbg');
  
    button.addEventListener('click', function () {
      // Add a class to initiate the sliding animation for the image
      image.classList.add('slide-out');
  
      // Listen for the end of the animation and redirect to servicelist.html
      image.addEventListener('animationend', function () {
        window.location.href = 'servicelist.html';
      });
  
      // Hide the button
      button.style.display = 'none';
    });
  });
