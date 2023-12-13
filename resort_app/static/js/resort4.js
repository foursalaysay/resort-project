
window.addEventListener('scroll', function() {
    var section1 = document.querySelector('.section-1');
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
      section1.classList.add('scrolled');
    } else {
      section1.classList.remove('scrolled');
    }
  });
  


  function openForm() {
    var dialogForm = document.getElementById("dialogForm");
    dialogForm.style.display = "block";
  }

  function closeForm() {
    var dialogForm = document.getElementById("dialogForm");
    dialogForm.style.display = "none";
  }