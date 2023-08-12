document.addEventListener('DOMContentLoaded',function() {
  const readMoreBtn = document.querySelector('.btn');

readMoreBtn.addEventListener('click', () => {
  const description = document.querySelector("#desc");
  description.scrollIntoView({behavior:"smooth"});
});
});

 
const navLinks = document.querySelectorAll('.link a');
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const target = event.target.getAttribute('href');
    console.log(`Navigation link clicked: ${target}`);
    target.scrollIntoView({behavior:"smooth"});
  });
});

 
const galleryLink = document.querySelector('.galery a');
galleryLink.addEventListener('click', (event) => {
  event.preventDefault();
  const target = event.target.getAttribute('href');
  console.log(`Watch Gallery link clicked: ${target}`);
   
});

 
const destinationNav = document.querySelector('.destination__nav');
const destinationNavArrows = destinationNav.querySelectorAll('span');
destinationNavArrows.forEach(arrow => {
  arrow.addEventListener('click', () => {
    console.log('See next destination');
  });
});

 
const destinationCards = document.querySelectorAll('.destination__card');
destinationCards.forEach(card => {
  card.addEventListener('click', () => {
    console.log('Read more about this destination');
    
  });
});

 
const feedbackForm = document.querySelector('.feedback__form');
feedbackForm.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('Submitted !!!');
   
});

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const emailError = document.getElementById('email-error');
  const phoneError = document.getElementById('phone-error');

  contactForm.addEventListener('submit', function(event) {
      let isValid = true;

      
      const nameValue = nameInput.value.trim();
      if (!isValidName(nameValue)) {
          nameError.textContent = 'Name must be at least 3 characters long';
          isValid = false;
      } else {
          nameError.textContent = '';
      }


      const emailValue = emailInput.value.trim();
      if (!isValidEmail(emailValue)) {
          emailError.textContent = 'Invalid email address';
          isValid = false;
      } else {
          emailError.textContent = '';
      }

       
      const phoneValue = phoneInput.value.trim();
      if (!isValidPhoneNumber(phoneValue)) {
          phoneError.textContent = 'Invalid phone number';
          isValid = false;
      } else {
          phoneError.textContent = '';
      }

      
      if (!isValid) {
          event.preventDefault();
      }
  });

  function isValidName(name) {
    return name.length >= 3;
}

  function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  }

  function isValidPhoneNumber(phone) {
      const phoneRegex = /^\d{10}$/;
      return phoneRegex.test(phone);
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const toggleBtns = document.querySelectorAll('.btn');

 
  toggleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
           const project = btn.closest('.project');
           const additionalInfo = project.querySelector('.additional-info');
          
 
          if (additionalInfo.style.display === 'none' || additionalInfo.style.display === '') {
              additionalInfo.style.display = 'block';
          } else {
              additionalInfo.style.display = 'none';
          }
      });
  });
});
