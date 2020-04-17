let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  let start = "<br><br> In every 15 minutes 250 people can start running. Before the start there are always smoke bombs and after that comes all the obstacles for 30 km long.";
  let water = "<br><br> Classic obstacle in the Spartan race. You have to dive into a really cold and muddy water and dive under or above some elements in the water.";
  let jump = "<br><br> You have to walk tru this narrow wood panel without falling off.";
  let atlas = "<br><br> You have to carry this 20 kg atlas weight for several meters. You can put it down if you cant hold it, there is no penalty for that";
  let finish = "<br><br> This is the finish line. The very last obstacle is to jump over some fire.";
  let sunset = "<br><br> After the race the sunset was pretty neat";
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;

  switch (slideIndex) {
      case 1:
        captionText.innerHTML += start;
          break;
          case 2:
            captionText.innerHTML += water;
              break;
              case 3:
        captionText.innerHTML += jump;
          break;
          case 4:
        captionText.innerHTML += atlas;
          break;
          case 5:
        captionText.innerHTML += finish;
          break;
          case 6:
        captionText.innerHTML += sunset;
          break;
      
  }
}