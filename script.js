document.addEventListener("DOMContentLoaded", function() {
    const darkModeBtn = document.getElementById("darkModeBtn");
    const content = document.getElementById("content");

    // Initially set light mode
    document.body.classList.add("light");

    darkModeBtn.addEventListener("click", function() {
        const body = document.body;
        const isDarkMode = body.classList.contains("dark-mode");

        // Toggle dark mode class
        body.classList.toggle("dark-mode");

        // Update button based on mode
        darkModeBtn.classList.toggle("dark-mode-btn-active");
    });

    // Dummy data and rendering logic (same as before)
    // Dummy data
const blogPosts = [
    { 
        title: "Chikmagalur, Karnataka", 
        image: "chikmagalur.jpg", 
        content: "Verdant Retreat: Traverse winding roads and lush tea estates in the enchanting hill station of Chikmagalur." 
    },
    { 
        title: "Ajmer and Jaipur in Rajasthan", 
        image: "ajmer-jaipur.jpg", 
        content: "Rajasthani Royalty: Experience the rich heritage and vibrant culture of Ajmer and Jaipur in the royal state of Rajasthan." 
    },
    { 
        title: "Agra, Uttar Pradesh", 
        image: "agra.jpg", 
        content: "Iconic Landmarks: Marvel at the breathtaking beauty of the Taj Mahal and explore the historic city of Agra in Uttar Pradesh." 
    },
    { 
        title: "Chandrabhaga Beach and Konark-Puri Marine Drive, Odisha", 
        image: "chandrabhaga-beach.jpg", 
        content: "Coastal Charms: Indulge in the tranquility of Chandrabhaga Beach and the scenic allure of Konark-Puri Marine Drive." 
    },
    { 
        title: "Skandagiri Hills, Chikkabalapur, Karnataka", 
        image: "skandagiri-hills.jpg", 
        content: "Trailblazing Adventure: Embark on an exhilarating hike through Karnataka's rugged trails." 
    },
    { 
        title: "Mysore, Karnataka", 
        image: "mysore-palace.jpg", 
        content: "Royal Splendor: Immerse yourself in the grandeur of Mysore Palace during Durga Puja." 
    },
    { 
        title: "Serenda Forest, Jharkhand", 
        image: "serenda-forest.jpg", 
        content: "Mystical Tranquility: Explore the mystical Serenda Forest, where ancient trees whisper tales of forgotten times." 
    },
    { 
        title: "Hogenakkal Falls, Tamil Nadu", 
        image: "hogenakkal-falls.jpg", 
        content: "Refreshing Cascades: Dive into the embrace of Tamil Nadu's enchanting natural wonder." 
    },
    { 
        title: "Bhitarkanika National Park and Pentha Sea Beach, Odisha", 
        image: "bhitarkanika-national-park.jpg", 
        content: "Wilderness Escape: Venture into the heart of nature's sanctuary at Bhitarkanika National Park before unwinding on the pristine shores of Pentha Sea Beach." 
    },
];



    // Render blog posts
    blogPosts.forEach(post => {
        const article = document.createElement("article");
        article.classList.add("article");
        article.innerHTML = `
            <h2>${post.title}</h2>
            <img src="images/${post.image}" alt="${post.title}">
            <p>${post.content.substring(0, 100)}...</p>`;
        content.appendChild(article);

        // Add click event listener to each place card
        article.addEventListener("click", function() {
            const postIndex = blogPosts.indexOf(post);
            const selectedPost = blogPosts[postIndex];

            const modalContent = document.createElement("div");
            modalContent.classList.add("modal-content");
            modalContent.innerHTML = `
                <h2>${selectedPost.title}</h2>
                <img src="images/${selectedPost.image}" alt="${selectedPost.title}">
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
