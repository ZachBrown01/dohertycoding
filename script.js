
 window.addEventListener('load', function() { //previously the slides weren't showing when website loads for the first time. This fixes that.
    var slideIndex = 1;
    showSlides(slideIndex);

   });


   

function plusSlides(n) { //changes which slide is showing.
  showSlides(slideIndex += n);

}

function showSlides(n) { //handles switching between slides and shows the current one.
  let i;
  let slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) { //makes all slides invisible so that there's no overlapping.
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  //makes desired slide visible.
}

//handles what the width for the box in the dropdown menu should be. 
function handleDropdownLength() {
   
   let content = document.getElementsByClassName('dropdown-content');

    content[0].style.minWidth = "192px";
    content[1].style.minWidth = "232px";
    
}