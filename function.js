// Sign in/out functionality
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
        $('#popupMessage').text('You have signed out!').show();
        setTimeout(function() {
          $('#popupMessage').text('You have signed out!').hide();
        }, 3000);
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

// Popup message logic and page load handler
  window.onload = function() {
    const message = localStorage.getItem("popupMessage");

    // Handle the loader and content display
    if (!sessionStorage.getItem('loaded')) {
      setTimeout(function() {
        // Hide the loader and display the content
        document.getElementById('loader').style.display = 'none';
        document.getElementById('content').style.display = 'block';

        // If there's a stored message, show it in the popup
        if (message) {
          const popupMessage = document.getElementById("popupMessage");
          popupMessage.textContent = message;
          popupMessage.style.display = "block";

          // Optionally hide the message after 3 seconds
          setTimeout(function() {
            popupMessage.style.display = "none";
          }, 3000);

          // Clear the message from localStorage
          localStorage.removeItem("popupMessage");
        }

        // Mark as loaded
        sessionStorage.setItem('loaded', 'true');

        // Refresh AOS after content has been loaded and displayed
        AOS.init({
      duration: 1500,
      easing: 'ease-out-back',
      offset: 200,
      once: true
    });
      }, 5000);
    } else {
      // Skip loader if already loaded in this session
      document.getElementById('loader').style.display = 'none';
      document.getElementById('content').style.display = 'block';

      // If there's a stored message, show it in the popup
      if (message) {
        const popupMessage = document.getElementById("popupMessage");
        popupMessage.textContent = message;
        popupMessage.style.display = "block";

        // Optionally hide the message after 3 seconds
        setTimeout(function() {
          popupMessage.style.display = "none";
        }, 3000);

        // Clear the message from localStorage
        localStorage.removeItem("popupMessage");
      }

      // Refresh AOS after content has been loaded
      AOS.init({
      duration: 1500,
      easing: 'ease-out-back',
      offset: 200,
      once: true
    });
    }
  };

  // Packages destination type selection
  function destinationType() {
    var selectDestination = $("#selectDestination");

    var rajasthan = $("#rajasthan");
    var bali = $("#bali");
    var japan = $("#japan");

    var everest = $("#everest");
    var safari = $("#safari");
    var costarica = $("#costarica");

    var fiji = $("#fiji");
    var hawaii = $("#hawaii");
    var alaska = $("#alaska");

    var type = selectDestination.val();

    rajasthan.hide();
    bali.hide();
    japan.hide();
    everest.hide();
    safari.hide();
    costarica.hide();
    fiji.hide();
    hawaii.hide();
    alaska.hide();

    switch (type) {
      case 'popular':
        rajasthan.fadeIn(1000);
        safari.fadeIn(1000);
        fiji.fadeIn(1000);
        break;
      case 'cultural':
        rajasthan.fadeIn(1000);
        bali.fadeIn(1000);
        japan.fadeIn(1000);
        break;
      case 'adventure':
        everest.fadeIn(1000);
        safari.fadeIn(1000);
        costarica.fadeIn(1000);
        break;
      case 'tropical':
        alaska.fadeIn(1000);
        fiji.fadeIn(1000);
        hawaii.fadeIn(1000);
        break;
    }
  }

  // Scroll to top functionality
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  window.onscroll = function() {
    var button = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  };