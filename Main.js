// // Define the particlesOptions object as a global variable
// const particlesOptions = {
//   // Your particles options object here
// };

// document.addEventListener('DOMContentLoaded', () => {
//   const particlesContainer = document.getElementById('particles-container');

//   if (particlesContainer) {
//     particlesJS('particles-container', particlesOptions);
//   }
// });

const handleFormSubmit = async (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  try {
    const response = await fetch('/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, message })
    });
    const result = await response.json();
    if (response.ok) {
      alert('Email sent successfully!');
    } else {
      alert('Error while sending email. Please try again.');
    }
  } catch (error) {
    console.error(error);
    alert('Error while sending email. Please try again.');
  }
};

document.getElementById("contactForm").addEventListener("submit", handleFormSubmit);