document.addEventListener("DOMContentLoaded", function() {
    const darkModeBtn = document.getElementById("darkModeBtn");
    const content = document.getElementById("content");

    // Initially set light mode
    document.body.classList.add("light");

    darkModeBtn.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
        darkModeBtn.classList.toggle("dark-mode-btn-active");
    });

    // Dummy data and rendering logic (corrected)
    const blogPosts = [
        { 
            title: "Chikmagalur: Coffee Estates", 
            image: "https://upload.wikimedia.org/wikipedia/commons/d/de/Chikkmanglur.jpg", 
            content: "Embark on a scenic journey through the lush green tea estates of Chikmagalur, Karnataka. Experience the aroma of freshly brewed tea while traversing winding roads that lead to breathtaking viewpoints." 
        },
        { 
            title: "Ajmer & Jaipur: Royal Splendor", 
            image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Mahal2022.jpg", 
            content: "Immerse yourself in the opulent heritage of Rajasthan as you explore the majestic forts and palaces of Ajmer and Jaipur. Witness the vibrant colors of traditional attire and indulge in the rich flavors of Rajasthani cuisine." 
        },
        { 
            title: "Laal Quila: Iconic Heritage", 
            image: "https://upload.wikimedia.org/wikipedia/commons/d/df/LaalQuila.jpg", 
            content: "Step into history at Laal Quila (Red Fort), a UNESCO World Heritage Site in the heart of Old Delhi. Marvel at the grandeur of Mughal architecture and immerse yourself in the rich cultural tapestry of India's capital city." 
        },
        { 
            title: "Hogenakkal Falls: Nature's Symphony", 
            image: "https://upload.wikimedia.org/wikipedia/commons/8/80/HognekalFalls.jpg", 
            content: "Surrender to the rhythmic melody of nature at Hogenakkal Falls in Tamil Nadu. Escape the chaos of urban life and immerse yourself in the refreshing embrace of cascading waterfalls and pristine surroundings. Let the cool mist rejuvenate your senses as you marvel at the breathtaking beauty of this natural wonder." 
        },
        { 
            title: "Taj Mahal: Agra's Eternal Jewel", 
            image: "https://upload.wikimedia.org/wikipedia/commons/0/0d/TajMahal2022.jpg", 
            content: "Immerse yourself in the timeless splendor of the Taj Mahal, a symbol of eternal love, nestled in the historic city of Agra, Uttar Pradesh. Lose yourself in the intricate marble architecture and stroll through the lush gardens surrounding this iconic monument." 
        },
        { 
            title: "Chandrabhaga Beach: Marine Drive", 
            image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/ChandrabhagaBeach.webp", 
            content: "Relax and rejuvenate on the golden sands of Chandrabhaga Beach before embarking on a picturesque drive along the Konark-Puri Marine Drive in Odisha. Feel the gentle breeze and listen to the soothing sound of crashing waves as you take in the scenic coastal views." 
        },
        { 
            title: "Skandagiri Hills: Hiking Adventure", 
            image: "https://upload.wikimedia.org/wikipedia/commons/f/f8/SkandagiriHills.jpg", 
            content: "Challenge yourself with an exhilarating hike through the rugged terrain of Skandagiri Hills in Chikkabalapur, Karnataka. Trek through dense forests and rocky slopes to reach the summit and be rewarded with panoramic views of the surrounding landscape." 
        },
        { 
            title: "Mysore Palace: Regal Spectacle", 
            image: "https://upload.wikimedia.org/wikipedia/commons/c/ce/MysorePalace2019.jpg", 
            content: "Step into the realm of royalty and witness the grandeur of Mysore Palace during the vibrant celebrations of Durga Puja in Karnataka. Be mesmerized by the opulent architecture, intricate artworks, and lavish decorations that adorn this majestic palace." 
        },
        { 
            title: "Saranda Forest: Asia's Mystical Wilderness", 
            image: "https://upload.wikimedia.org/wikipedia/commons/1/14/Sarenda.jpg", 
            content: "Embark on an extraordinary journey through the mystical expanse of Saranda Forest, Asia's largest forest reserve nestled in Jharkhand. Delve into the serene ambiance as ancient trees whisper tales of bygone eras, and unveil the hidden treasures of this captivating wilderness." 
        },        
        { 
            title: "Bhitarkanika: Encounter Majestic Crocodiles on Safari", 
            image: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Bhitarkainka.jpg", 
            content: "Embark on an exhilarating boat safari through the tranquil waterways of Bhitarkanika National Park in Odisha. Explore the mesmerizing beauty of mangrove forests, and witness the diverse ecosystem of this wildlife sanctuary come to life. Brace yourself for an unforgettable adventure where you'll encounter majestic crocodiles basking in the sun, adding an extra thrill to your journey into the heart of nature." 
        },        
    ];

    // Render blog posts
blogPosts.forEach(post => {
    const article = document.createElement("article");
    article.classList.add("article");
    article.innerHTML = `
        <div class="article-text">
            <h2>${post.title}</h2>
            <p>${post.content.substring(0, 100)}...</p>
        </div>
        <img src="${post.image}" alt="${post.title}">
    `;
    content.appendChild(article);

    // Add click event listener to each place card
    article.addEventListener("click", function() {
        const postIndex = blogPosts.indexOf(post);
        const selectedPost = blogPosts[postIndex];

        const modalContent = document.createElement("div");
        modalContent.classList.add("modal-content");
        modalContent.innerHTML = `
            <h2>${selectedPost.title}</h2>
            <img src="${selectedPost.image}" alt="${selectedPost.title}">
            <p>${selectedPost.content}</p>
            <button class="modal-close">&#x2716;</button> `;

        const modal = document.createElement("div");
        modal.classList.add("modal");
        modal.appendChild(modalContent);
        document.body.appendChild(modal);
        modal.style.display = "flex";

        const closeBtn = modal.querySelector(".modal-close");
        closeBtn.addEventListener("click", function() {
            modal.style.display = "none";
        });
    });
});
});

document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to load the contact form when the "Contact Us" button is clicked
    const contactBtn = document.getElementById('contactBtn');
    if (contactBtn) {
        contactBtn.addEventListener('click', loadContactForm);
    } else {
        console.error('Contact button not found!');
    }
});

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
            form.addEventListener("submit", function(event) {
                event.preventDefault();  // Prevent page reload on form submission

                // Collect form data
                var fromName = document.getElementById("name").value;
                var fromEmail = document.getElementById("email").value;
                var message = document.getElementById("message").value;

                var params = {
                    from_name: fromName,
                    from_email: fromEmail,
                    message: message,
                    to_email: "mdtausifofficial@gmail.com"  // Admin email
                };

                // Display status message during sending
                var status = document.getElementById("status");
                status.innerHTML = "Sending...";

                // Send email to Admin using EmailJS
                emailjs.send("service_eoxtb4u", "template_oz24pur", params)
                    .then(function(response) {
                        console.log('Admin Email SUCCESS!', response.status, response.text);
                        status.innerHTML = "Message sent successfully! You'll receive a response shortly.";
                        
                        // Prepare parameters for the user confirmation email
                        var userParams = {
                            to_name: fromName,          // Name of the user
                            to_email: fromEmail,        // User's email
                            from_name: "mutedEscapes", // Your brand or name
                            message: "Thank you for reaching out! We'll get back to you soon."
                        };

                        // Send confirmation email to the user
                        return emailjs.send("service_eoxtb4u", "template_xwujoco", userParams);
                    })
                    .then(function(response) {
                        console.log('User Email SUCCESS!', response.status, response.text);
                    })
                    .catch(function(error) {
                        console.log('FAILED...', error);
                        status.innerHTML = "Failed to send message. Please try again.";
                    });
            });
        })
        .catch(error => console.error('Error loading contact form:', error));
}
