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
            title: "Chikmagalur: Coffee Estates", 
            image: "chikmagalur.jpg", 
            content: "Embark on a scenic journey through the lush green tea estates of Chikmagalur, Karnataka. Experience the aroma of freshly brewed tea while traversing winding roads that lead to breathtaking viewpoints." 
        },
        { 
            title: "Ajmer & Jaipur: Royal Splendor", 
            image: "ajmer-jaipur.jpg", 
            content: "Immerse yourself in the opulent heritage of Rajasthan as you explore the majestic forts and palaces of Ajmer and Jaipur. Witness the vibrant colors of traditional attire and indulge in the rich flavors of Rajasthani cuisine." 
        },
        { 
            title: "Laal Quila: Iconic Heritage", 
            image: "red-fort.jpg", 
            content: "Step into history at Laal Quila (Red Fort), a UNESCO World Heritage Site in the heart of Old Delhi. Marvel at the grandeur of Mughal architecture and immerse yourself in the rich cultural tapestry of India's capital city." 
        },
        { 
            title: "Hogenakkal Falls: Nature's Symphony", 
            image: "hogenakkal-falls.jpg", 
            content: "Surrender to the rhythmic melody of nature at Hogenakkal Falls in Tamil Nadu. Escape the chaos of urban life and immerse yourself in the refreshing embrace of cascading waterfalls and pristine surroundings. Let the cool mist rejuvenate your senses as you marvel at the breathtaking beauty of this natural wonder." 
        },
        { 
            title: "Taj Mahal: Agra's Eternal Jewel", 
            image: "agra.jpg", 
            content: "Immerse yourself in the timeless splendor of the Taj Mahal, a symbol of eternal love, nestled in the historic city of Agra, Uttar Pradesh. Lose yourself in the intricate marble architecture and stroll through the lush gardens surrounding this iconic monument." 
        },
        { 
            title: "Chandrabhaga Beach: Konark-Puri Drive", 
            image: "chandrabhaga-beach.jpg", 
            content: "Relax and rejuvenate on the golden sands of Chandrabhaga Beach before embarking on a picturesque drive along the Konark-Puri Marine Drive in Odisha. Feel the gentle breeze and listen to the soothing sound of crashing waves as you take in the scenic coastal views." 
        },
        { 
            title: "Skandagiri Hills: Hiking Adventure", 
            image: "skandagiri-hills.jpg", 
            content: "Challenge yourself with an exhilarating hike through the rugged terrain of Skandagiri Hills in Chikkabalapur, Karnataka. Trek through dense forests and rocky slopes to reach the summit and be rewarded with panoramic views of the surrounding landscape." 
        },
        { 
            title: "Mysore Palace: Regal Spectacle", 
            image: "mysore-palace.jpg", 
            content: "Step into the realm of royalty and witness the grandeur of Mysore Palace during the vibrant celebrations of Durga Puja in Karnataka. Be mesmerized by the opulent architecture, intricate artworks, and lavish decorations that adorn this majestic palace." 
        },
        { 
            title: "Saranda Forest: Asia's Mystical Wilderness", 
            image: "saranda-forest.jpg", 
            content: "Embark on an extraordinary journey through the mystical expanse of Saranda Forest, Asia's largest forest reserve nestled in Jharkhand. Delve into the serene ambiance as ancient trees whisper tales of bygone eras, and unveil the hidden treasures of this captivating wilderness." 
        },        
        { 
            title: "Bhitarkanika: Encounter Majestic Crocodiles on Safari", 
            image: "bhitarkanika-national-park.jpg", 
            content: "Embark on an exhilarating boat safari through the tranquil waterways of Bhitarkanika National Park in Odisha. Explore the mesmerizing beauty of mangrove forests, and witness the diverse ecosystem of this wildlife sanctuary come to life. Brace yourself for an unforgettable adventure where you'll encounter majestic crocodiles basking in the sun, adding an extra thrill to your journey into the heart of nature." 
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
