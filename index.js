// Function to be executed when the body is loaded
function bodyLoaded() {

       // Display a welcome message after 5 seconds
    setTimeout(function () {
        // Create a modal with a styled message
        var modal = document.createElement('div');
        modal.innerHTML = '<h1>Welcome to E-Appointment!</h1>';
        modal.style.position = 'fixed';
        modal.style.top = '30%';
        modal.style.left = '50%';
        modal.style.transform = 'translate(-50%, -50%)';
        modal.style.backgroundColor = 'white';
        modal.style.padding = '50px';
        modal.style.borderRadius='20px'
        modal.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        
        // Append the modal to the body
        document.body.appendChild(modal);
        
        // Close the modal after 3 seconds (adjust the time as needed)
        setTimeout(function () {
            modal.remove();
        }, 2000);
    }, 1000);
}

var doctorAppointmentButton = document.querySelector('.appointment-book');
var ambulanceBookingButton = document.querySelector('.ambulance-book');

// Attach click event listeners to the buttons
if (doctorAppointmentButton) {
    doctorAppointmentButton.addEventListener('click', function () {
        var userConfirmed = confirm('Are you sure you want to book a doctor appointment?');
        if (!userConfirmed) {
            return;
        }
    });
}

if (ambulanceBookingButton) {
    ambulanceBookingButton.addEventListener('click', function () {
        var userConfirmed = confirm('Are you sure you want to book an ambulance?');
        if (!userConfirmed) {
            return;
        }
    });
}


window.onload = bodyLoaded;
