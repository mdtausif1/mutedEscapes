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
        { title: "A Trip to Paris", image: "paris.jpg", content: "Paris, the city of love, is one of the most romantic destinations in the world. The Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral are must-visit attractions." },
        { title: "Exploring Tokyo", image: "tokyo.jpg", content: "Tokyo, the capital of Japan, is a bustling metropolis known for its futuristic technology, traditional culture, and delicious cuisine. Don't miss visiting Shibuya Crossing and Tokyo Disneyland." },
        { title: "Adventures in New York", image: "new-york.jpg", content: "New York City, the Big Apple, offers endless possibilities for adventure. From Broadway shows to Central Park picnics, there's something for everyone in this vibrant city." },
        { title: "Safari in Africa", image: "safari.jpg", content: "Embark on a thrilling safari adventure in Africa and witness the incredible wildlife up close. From majestic lions to graceful giraffes, the African savanna is a sight to behold." },
        { title: "Island Paradise in Maldives", image: "maldives.jpg", content: "Escape to the Maldives for a dreamy island getaway. With crystal-clear waters, white sandy beaches, and luxurious overwater bungalows, it's the perfect destination for relaxation and romance." },
        { title: "Hiking in the Swiss Alps", image: "swiss-alps.jpg", content: "Experience the breathtaking beauty of the Swiss Alps on a hiking adventure. With stunning mountain vistas, charming alpine villages, and pristine lakes, Switzerland is a nature lover's paradise." }
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
