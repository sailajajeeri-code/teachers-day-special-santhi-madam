function showSurprise() {

    const surprise = document.getElementById("surprise");

    surprise.style.display = "block";

    const emojis = ["🌸", "❤️", "✨", "🎉", "💐", "⭐"];

    for (let i = 0; i < 40; i++) {

        const item = document.createElement("span");

        item.className = "confetti";

        item.innerHTML =
            emojis[Math.floor(Math.random() * emojis.length)];

        item.style.left =
            Math.random() * 100 + "vw";

        item.style.animationDelay =
            Math.random() * 1.5 + "s";

        document.body.appendChild(item);

        setTimeout(function () {
            item.remove();
        }, 4000);
    }
}
