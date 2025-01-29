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

    // Change background color
    document.body.style.transition = "background 1s ease-in-out";
    document.body.style.background = "pink";
});

document.getElementById("no-btn").addEventListener("click", function() {
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
            setTimeout(() => {
                makeYesButtonRunAway(); // Yes button runs away
            }, 1000);
        }
    }, 100);
});

// Function to make "Yes" button run away
function makeYesButtonRunAway() {
    let yesBtn = document.getElementById("yes-btn");
    yesBtn.style.position = "absolute";

    document.getElementById("no-btn").addEventListener("click", function() {
        window.location.href = "love.html"; // Redirect to a different page when clicking "No"
    });

    yesBtn.addEventListener("mouseover", function() {
        let x = Math.random() * (window.innerWidth - yesBtn.clientWidth);
        let y = Math.random() * (window.innerHeight - yesBtn.clientHeight);
        yesBtn.style.left = `${x}px`;
        yesBtn.style.top = `${y}px`;
    });
}

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
