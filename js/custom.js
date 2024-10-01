// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// owl carousel 

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
})


// Initialize EmailJS with your user ID (replace with your actual EmailJS User ID)
(function() {
    emailjs.init("laVwRx2XRiKtsgYo4");  // Replace with your EmailJS user ID
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
    };

    // Send email via EmailJS
    emailjs.send("service_phrdiad", "template_kwn0wua", formData)
    .then(function(response) {
        // Success - show a success message
        document.getElementById('status-message').innerHTML = "<p style='color:green;'>Message sent successfully!</p>";
    }, function(error) {
        // Error - show an error message
        document.getElementById('status-message').innerHTML = "<p style='color:red;'>Failed to send message. Please try again later.</p>";
    });

    // Reset form
    document.getElementById('contact-form').reset();
});
