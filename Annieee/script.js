let noButtonClicked = false; // Track if "No" was clicked

document.getElementById("yes-btn").addEventListener("click", function() {
    let question = document.getElementById("question");
    let text = "You just unlocked a surprise! ❤️";
    let i = 0;

    // Clear existing content
    question.innerHTML = "";

    // Typing effect
    let typing = setInterval(() => {
        if (i < text.length) {
            question.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(typing);
            setTimeout(() => {
                window.location.href = "love.html"; // Redirect after typing
            }, 2000);
        }
    }, 100);

    // Spawn love emojis
    spawnEmojis("😍");
    document.body.style.background = "pink";
});

document.getElementById("no-btn").addEventListener("click", function() {
    if (!noButtonClicked) {
        let question = document.getElementById("question");
        let text = "Are you sure? 😢";
        let i = 0;

        // Clear existing content
        question.innerHTML = "";

        // Typing effect for "Are you sure?"
        let typing = setInterval(() => {
            if (i < text.length) {
                question.innerHTML += text.charAt(i);
                i++;
            } else {
                clearInterval(typing);
                noButtonClicked = true; // Enable running away effect
            }
        }, 100);

        // Spawn crying emojis
        spawnEmojis("😭");
    }
});

// Make the "No" button run away when hovered
document.getElementById("no-btn").addEventListener("mouseenter", function() {
    if (noButtonClicked) {
        let noBtn = document.getElementById("no-btn");
        noBtn.style.position = "absolute";
        noBtn.style.left = Math.random() * (window.innerWidth - 100) + "px";
        noBtn.style.top = Math.random() * (window.innerHeight - 50) + "px";
    }
});

// Function to spawn emojis
function spawnEmojis(emoji) {
    let container = document.getElementById("emoji-container");
    container.innerHTML = ""; // Clear existing emojis
    for (let i = 0; i < 50; i++) {
        let em = document.createElement("div");
        em.classList.add("emoji");
        em.innerHTML = emoji;
        em.style.left = Math.random() * 100 + "vw";
        em.style.animationDuration = Math.random() * 3 + 2 + "s";
        container.appendChild(em);
    }
}
