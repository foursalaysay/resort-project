function scrollImage(event) {
    var scrollingImage = document.getElementById('scrolling-image');
    var container = event.currentTarget;
    var scrollPercentage = (container.scrollTop / (container.scrollHeight - container.clientHeight)) * 100;
    scrollingImage.style.transform = 'translateY(' + scrollPercentage + '%)';
  }

  document.addEventListener('DOMContentLoaded', function() {
    // Get all carousel cards
    const carouselCards = Array.from(document.querySelectorAll('.carousel-card'));
  
    // Initialize index to keep track of the currently displayed card
    let currentIndex = 0;
  
    // Track touch start position
    let touchStartX = 0;
  
    // Function to show the current card and hide the rest
    function showCard(index) {
      carouselCards.forEach((card, i) => {
        if (i === index) {
          card.classList.add('show');
        } else {
          card.classList.remove('show');
        }
      });
    }
  
    // Show the initial card
    showCard(currentIndex);
  
    // Function to handle the previous button click event
    function handlePrevButtonClick() {
      currentIndex--;
  
      // Wrap around to the last card if currentIndex becomes less than 0
      if (currentIndex < 0) {
        currentIndex = carouselCards.length - 1;
      }
  
      showCard(currentIndex);
      carouselCards[currentIndex].classList.add('slide-prev');
      setTimeout(() => {
        carouselCards[currentIndex].classList.remove('slide-prev');
      }, 300); // Same duration as transition in CSS
    }
  
    // Function to handle the next button click event
    function handleNextButtonClick() {
      currentIndex++;
  
      // Wrap around to the first card if currentIndex exceeds the number of cards
      if (currentIndex >= carouselCards.length) {
        currentIndex = 0;
      }
  
      showCard(currentIndex);
      carouselCards[currentIndex].classList.add('slide-next');
      setTimeout(() => {
        carouselCards[currentIndex].classList.remove('slide-next');
      }, 300); // Same duration as transition in CSS
    }
  
    // Add event listeners to the previous and next buttons
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    prevButton.addEventListener('click', handlePrevButtonClick);
    nextButton.addEventListener('click', handleNextButtonClick);
  
    // Touch event handling for swipe gesture
    carouselCards.forEach(card => {
      let touchStartPos = 0;
  
      card.addEventListener('touchstart', function(event) {
        touchStartPos = event.touches[0].clientX;
      });
  
      card.addEventListener('touchend', function(event) {
        const touchEndPos = event.changedTouches[0].clientX;
        const touchDiff = touchStartPos - touchEndPos;
  
        if (touchDiff > 50) {
          // Swipe right-to-left, show next card
          handleNextButtonClick();
        } else if (touchDiff < -50) {
          // Swipe left-to-right, show previous card
          handlePrevButtonClick();
        }
      });
    });
  });

  

  // JSJS DETAILS BUTTON DETAILS 
// Get the detail sections and buttons
// RESORT 1 BUTTONS
function showDetail1() {
  var detail1 = document.getElementById('resort1-detail1');
  var detail2 = document.getElementById('resort1-detail2');
  detail1.style.display = 'flex';
  detail2.style.display = 'none';
}

function showDetail2() {
  var detail1 = document.getElementById('resort1-detail1');
  var detail2 = document.getElementById('resort1-detail2');
  detail1.style.display = 'none';
  detail2.style.display = 'flex';
}

// RESORT 2 BUTTONS
var currentDetail2 = 1;
var totalDetails2 = 3;

function showPreviousDetail2() {
  var prevDetail2 = currentDetail2 - 1;
  if (prevDetail2 < 1) {
    prevDetail2 = totalDetails2;
  }
  showDetail2(prevDetail2);
}

function showNextDetail2() {
  var nextDetail2 = currentDetail2 + 1;
  if (nextDetail2 > totalDetails2) {
    nextDetail2 = 1;
  }
  showDetail2(nextDetail2);
}

function showDetail2(detailNumber) {
  // Hide current detail
  var currentDetailElement2 = document.getElementById('resort2-detail' + currentDetail2);
  currentDetailElement2.style.display = 'none';

  // Show new detail
  var newDetailElement2 = document.getElementById('resort2-detail' + detailNumber);
  newDetailElement2.style.display = 'flex';

  currentDetail2 = detailNumber;
}

// RESORT 3 BUTTONS
var currentDetail3 = 1; // Current detail section displayed

function showDetail3(current) {
  // Function to display the specified detail section
  document.getElementById('three-detail' + current).style.display = 'flex';
}

function hideDetail3(current) {
  // Function to hide the specified detail section
  document.getElementById('three-detail' + current).style.display = 'none';
}

function carouselPrevious3() {
  // Function to display the previous detail section
  hideDetail3(currentDetail3);
  currentDetail3--;
  if (currentDetail3 < 1) {
    currentDetail3 = 2;
  }
  showDetail3(currentDetail3);
}

function carouselNext3() {
  // Function to display the next detail section
  hideDetail3(currentDetail3);
  currentDetail3++;
  if (currentDetail3 > 2) {
    currentDetail3 = 1;
  }
  showDetail3(currentDetail3);
}

// Show the initial detail section
showDetail3(currentDetail3);

// RESORT 4 BUTTONS
function showDetail4(detailNumber) {
  var detail1 = document.getElementById('resort4-detail1');
  var detail2 = document.getElementById('resort4-detail2');
  
  if (detailNumber === 1) {
    detail1.style.display = 'block';
    detail2.style.display = 'none';
  } else if (detailNumber === 2) {
    detail1.style.display = 'none';
    detail2.style.display = 'block';
  }
}



// --------------------------------------------------------------------------------------------------
// SHOW RESORT DETAILS
function toggleResortDetail1() {
  var resortDetail = document.getElementById('resort1');
  var resortCarousel = document.querySelector('.resort-carousel-container');
  var getButton1 = document.getElementById('resort1-button');
  var getButton2 = document.getElementById('resort2-button');
  var getButton3 = document.getElementById('resort3-button');
  var getButton4 = document.getElementById('resort4-button');
 
  if (resortDetail.style.display === 'none') {
    resortDetail.style.display = 'flex';
    resortDetail.style.opacity = 1;
    resortDetail.style.transform = 'translateX(0)';

    getButton1.style.display = 'flex';
    getButton2.style.display = 'none';
    getButton3.style.display = 'none';
    getButton4.style.display = 'none';
    
    resortCarousel.style.display = 'none';
    resortCarousel.style.opacity = 0;
    resortCarousel.style.transform = 'translateX(100%)';
  } else {
    resortDetail.style.display = 'none';
    resortDetail.style.opacity = 0;
    resortDetail.style.transform = 'translateX(100%)';

    getButton1.style.display = 'none';
    getButton2.style.display = 'none';
    getButton3.style.display = 'none';
    getButton4.style.display = 'none';
    
    resortCarousel.style.display = 'flex';
    resortCarousel.style.opacity = 1;
    resortCarousel.style.transform = 'translateX(0)';
  }

  resortDetail.style.transition = 'transform 1s ease, opacity 0.3s ease'; // Update transition property
  resortCarousel.style.transition = 'transform 1s ease, opacity 0.3s ease'; // Update transition property
}

function toggleResortDetail2() {
  var resortDetail2 = document.getElementById('resort2');
  var resortCarousel2 = document.querySelector('.resort-carousel-container');
  var getButton1 = document.getElementById('resort1-button');
  var getButton2 = document.getElementById('resort2-button');
  var getButton3 = document.getElementById('resort3-button');
  var getButton4 = document.getElementById('resort4-button');
 
 


  if (resortDetail2.style.display === 'none') {
    resortDetail2.style.display = 'flex';
    resortDetail2.style.opacity = 1;
    resortDetail2.style.transform = 'translateX(0)';

    getButton1.style.display = 'none';
    getButton2.style.display = 'flex';
    getButton3.style.display = 'none';
    getButton4.style.display = 'none';
    
    resortCarousel2.style.display = 'none';
    resortCarousel2.style.opacity = 0;
    resortCarousel2.style.transform = 'translateX(100%)';
  } else {
    resortDetail2.style.display = 'none';
    resortDetail2.style.opacity = 0;
    resortDetail2.style.transform = 'translateX(100%)';

    getButton1.style.display = 'none';
    getButton2.style.display = 'none';
    getButton3.style.display = 'none';
    getButton4.style.display = 'none';
    
    
    resortCarousel2.style.display = 'flex';
    resortCarousel2.style.opacity = 1;
    resortCarousel2.style.transform = 'translateX(0)';
  }

  resortDetail2.style.transition = 'transform 1s ease, opacity 0.3s ease'; // Update transition property
  resortCarousel2.style.transition = 'transform 1s ease, opacity 0.3s ease'; // Update transition property
}

function toggleResortDetail3() {
  var resortDetail3 = document.getElementById('resort3');
  var resortCarousel3 = document.querySelector('.resort-carousel-container');
  var getButton3 = document.getElementById('resort3-button');

  var getButton1 = document.getElementById('resort1-button');
  var getButton2 = document.getElementById('resort2-button');
  var getButton3 = document.getElementById('resort3-button');
  var getButton4 = document.getElementById('resort4-button');
 
 
  if (resortDetail3.style.display === 'none') {
    resortDetail3.style.display = 'flex';
    resortDetail3.style.opacity = 1;
    resortDetail3.style.transform = 'translateX(0)';

    getButton1.style.display = 'none';
    getButton2.style.display = 'none';
    getButton3.style.display = 'flex';
    getButton4.style.display = 'none';
    
    
    resortCarousel3.style.display = 'none';
    resortCarousel3.style.opacity = 0;
    resortCarousel3.style.transform = 'translateX(100%)';
  } else {
    resortDetail3.style.display = 'none';
    resortDetail3.style.opacity = 0;
    resortDetail3.style.transform = 'translateX(100%)';

    getButton1.style.display = 'none';
    getButton2.style.display = 'none';
    getButton3.style.display = 'flex';
    getButton4.style.display = 'none';
    
    resortCarousel3.style.display = 'flex';
    resortCarousel3.style.opacity = 1;
    resortCarousel3.style.transform = 'translateX(0)';
  }

  resortDetail3.style.transition = 'transform 1s ease, opacity 0.3s ease'; // Update transition property
  resortCarousel3.style.transition = 'transform 1s ease, opacity 0.3s ease'; // Update transition property
}


function toggleResortDetail4() {
  var resortDetail4 = document.getElementById('resort4');
  var resortCarousel4 = document.querySelector('.resort-carousel-container');
  var getButton1 = document.getElementById('resort1-button');
  var getButton2 = document.getElementById('resort2-button');
  var getButton3 = document.getElementById('resort3-button');
  var getButton4 = document.getElementById('resort4-button');
 


  if (resortDetail4.style.display === 'none') {
    resortDetail4.style.display = 'flex';
    resortDetail4.style.opacity = 1;
    resortDetail4.style.transform = 'translateX(0)';

    getButton1.style.display = 'none';
    getButton2.style.display = 'none';
    getButton3.style.display = 'none';
    getButton4.style.display = 'flex';
    
    resortCarousel4.style.display = 'none';
    resortCarousel4.style.opacity = 0;
    resortCarousel4.style.transform = 'translateX(100%)';
  } else {
    resortDetail4.style.display = 'none';
    resortDetail4.style.opacity = 0;
    resortDetail4.style.transform = 'translateX(100%)';

    getButton1.style.display = 'none';
    getButton2.style.display = 'none';
    getButton3.style.display = 'none';
    getButton4.style.display = 'none';
    
    
    resortCarousel4.style.display = 'flex';
    resortCarousel4.style.opacity = 1;
    resortCarousel4.style.transform = 'translateX(0)';
  }

  resortDetail4.style.transition = 'transform 1s ease, opacity 0.3s ease'; // Update transition property
  resortCarousel4.style.transition = 'transform 1s ease, opacity 0.3s ease'; // Update transition property
}




// CHECKDATE RESERVATION
function loadReservationDialog() {
  var modalOverlay = document.getElementById("modalOverlay");
  modalOverlay.style.display = "flex";
}

function validateForm() {
  var checkInDate = document.getElementById("check-in").value;
  var checkOutDate = document.getElementById("check-out").value;

  if (checkInDate === "" || checkOutDate === "") {
      alert("Please enter both check-in and check-out dates.");
      return;
  }

  if (checkInDate > checkOutDate) {
      alert("Check-in date must be before check-out date.");
      return;
  }

  // Proceed with form submission
  document.querySelector("form").submit();
}
