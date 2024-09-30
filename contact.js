// Function to load contact form dynamically
function loadContactForm() {
    fetch('contact.html') // Assuming contact.html is in the same directory
        .then(response => response.text())
        .then(data => {
            const content = document.getElementById('content');
            // Parse the HTML string from the response
            const parser = new DOMParser();
            const htmlDoc = parser.parseFromString(data, 'text/html');
            const contactForm = htmlDoc.querySelector('.contact-container');
            
            // Replace the main content with the contact form
            content.innerHTML = '';
            content.appendChild(contactForm);

            // Initialize EmailJS after loading new content
            emailjs.init("Lfzycgo59JwTt0azH");

            // Add event listener to handle form submission
            const form = document.getElementById("contactForm");
            const buttonLoader = document.getElementById("buttonLoader");
            const buttonContent = document.getElementById("buttonContent");
            const tickIcon = document.getElementById("tickIcon");

            form.addEventListener("submit", function(event) {
                event.preventDefault();  // Prevent page reload on form submission

                // Collect form data
                var params = {
                    from_name: document.getElementById("name").value,
                    from_email: document.getElementById("email").value,
                    message: document.getElementById("message").value,
                    to_email: "mdtausifofficial@gmail.com"  // Your email as recipient
                };

                // Show loading spinner
                buttonLoader.style.display = "inline-block"; // Show loader
                buttonContent.style.display = "none"; // Hide button text
                tickIcon.style.display = "none"; // Hide tick mark

                // Display status message during sending
                var status = document.getElementById("status");
                status.innerHTML = "Sending...";

                // Send email using EmailJS
                emailjs.send("service_eoxtb4u", "template_oz24pur", params)
                    .then(function(response) {
                        console.log('SUCCESS!', response.status, response.text);
                        status.innerHTML = "Message sent successfully! You'll receive a response shortly.";
                        buttonLoader.style.display = "none"; // Hide loader
                        buttonContent.style.display = "none"; // Hide button text
                        tickIcon.style.display = "inline"; // Show tick mark
                        form.reset(); // Clear the form fields
                    }, function(error) {
                        console.log('FAILED...', error);
                        status.innerHTML = "Failed to send message. Please try again.";
                        buttonLoader.style.display = "none"; // Hide loader
                        buttonContent.style.display = "inline"; // Show button text
                        tickIcon.style.display = "none"; // Hide tick mark
                    });
            });
        })
        .catch(error => console.error('Error loading contact form:', error));
}

// Add event listener to load the contact form when the "Contact Us" button is clicked
document.getElementById('contactBtn').addEventListener('click', loadContactForm);