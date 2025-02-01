
       
 document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", function () {
        this.classList.toggle("active");
        navLinks.classList.toggle("active");
    });

    // Close menu when clicking a link (for better UX)
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", function () {
            hamburger.classList.remove("active");
            navLinks.classList.remove("active");
        });
    });
});

  // Get the modal and button elements by their IDs
  const modal = document.getElementById('modal');
  const signupBtn = document.getElementById('signup-btn');
  const closeBtn = document.querySelector('.modal .close');
 const getStart = document.getElementById('get-start');
  function openModal() {
    modal.style.display = 'flex'; // Using flex as our modal container is flex-based
  }


  function closeModal() {
    modal.style.display = 'none';
  }
  signupBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
getStart.addEventListener('click', openModal);
  // Optionally, close the modal when clicking outside the modal content
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      closeModal();
    }
  });


