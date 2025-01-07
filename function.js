function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
        AOS.init({
      duration: 1500,
      easing: 'ease-out-back',
      offset: 200,
      once: true
    });
    window.onscroll = function() {
      var button = document.getElementById("scrollToTopBtn");
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
          button.style.display = "block";
      } else {
          button.style.display = "none";
      }
    };
    
function btn() {
  let form = document.getElementById("bookingForm");

  // Get form input values
  let name = document.getElementById("name1").value;
  let email = document.getElementById("email1").value;
  let phone = document.getElementById("phone").value;      
  let guests = document.getElementById("guests").value;
  let date = document.getElementById("date").value;
  let destination = document.getElementById("destination").value;

  // Check if any of the fields are empty
  if (!name || !email || !phone || !guests || !date || !destination) {
    alert("Please fill in all fields.");
    return;
  }

  // Get the cost per person based on the selected destination
  let costPerPerson;
  let duration;
  
  switch(destination) {
    case "Paris, France":
      costPerPerson = 2199;
      duration = "6 days - 5 nights";
      break;
    case "Mumbai, India":
      costPerPerson = 1799;
      duration = "8 days - 7 nights";
      break;
    case "Santorini, Greece":
      costPerPerson = 2659;
      duration = "5 days - 4 nights";
      break;
    case "Sydney, Australia":
      costPerPerson = 2799;
      duration = "6 days - 5 nights";
      break;
    case "Tokyo, Japan":
      costPerPerson = 2499;
      duration = "7 days - 6 nights";
      break;
    case "Marina Bay, Singapore":
      costPerPerson = 2999;
      duration = "5 days - 4 nights";
      break;
    default:
      alert("Invalid destination.");
      return;
  }

  // Calculate total cost
  let totalCost = costPerPerson * guests;

  // Display confirmation details
  let confirmationMessage = `
    Booking Details:
    - Name: ${name}
    - Email: ${email}
    - Phone Number: ${phone}    
    - Number of Guests: ${guests}
    - Date: ${date}
    - Destination: ${destination}
    - Duration: ${duration}
    - Cost per Person: $${costPerPerson}
    - Total Cost: $${totalCost}
  `;
  
  // Confirm booking details with the user
  let confirmation = confirm(confirmationMessage + "\n\nDo you want to confirm your booking?");
  
  // If confirmed, show the success message and reload
  if (confirmation) {
    alert("Your booking is confirmed!");
    location.reload();
  } else {
    alert("Your booking is cancelled!");
    // If canceled, reset the modal and close it
    location.reload();
  }
}


function paris() {
  document.getElementById("destination").value = "Paris, France";
}

function mumbai() {
  document.getElementById("destination").value = "Mumbai, India";
}

function santorini() {
  document.getElementById("destination").value = "Santorini, Greece";
}

function sydney() {
  document.getElementById("destination").value = "Sydney, Australia";
}

function tokyo() {
  document.getElementById("destination").value = "Tokyo, Japan";
}

function marina() {
  document.getElementById("destination").value = "Marina Bay, Singapore";
}

$('#toggle-btn').click(function() {
      const moreText = $('#more');
      const dots = $('#dots');
      const button = $(this);
      
      if (moreText.is(':hidden')) {
        moreText.show();
        dots.hide();
        button.text('Show Less'); // Change to "Show Less"
      } else {
        moreText.hide();
        dots.show();
        button.text('Show More'); // Change to "Show More"
      }
    });

$(document).ready(function() {
      // Function to update the button text based on sign-in status
      function updateSignInButton() {
        const isSignedIn = localStorage.getItem('isSignedIn') === 'true';

        if (isSignedIn) {
          $('#signInButton').text('Sign Out');  // Show 'Sign Out' if user is signed in
        } else {
          $('#signInButton').text('Sign In');   // Show 'Sign In' if user is signed out
        }
      }

      // Handle click on the button
      $('#signInButton').click(function() {
        const isSignedIn = localStorage.getItem('isSignedIn') === 'true';

        if (isSignedIn) {
          // User is signed in, so sign out
          localStorage.setItem('isSignedIn', 'false');
          alert('You have signed out!');
          location.reload();      
        } else {
          // User is signed out, so redirect to login page
          window.location.href = "login.html";
        }

        // Update button text after the action
        updateSignInButton();
      });

      // Call this function on page load to set the correct button text
      updateSignInButton();
    });