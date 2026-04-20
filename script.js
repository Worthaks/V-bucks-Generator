const spinner = document.getElementById("spinner");
const btn = document.getElementById("btn");
const consoleBox = document.getElementById("console");
const sound = document.getElementById("spamSound");

const images = [
    "https://i.redd.it/j8a1qfyrnsla1.png",
    "https://media.tenor.com/FtgLKfbxF84AAAAM/you-are-an-idiot.gif",
    "https://cdn-0001.qstv.on.epicgames.com/XuDshNXVdEHLfApTsP/image/landscape_comp.jpeg",
    "https://www.techi.com/wp-content/uploads/2025/10/20251022-Iraq-bans-US-gaming-platform-Roblox-over-child-safety-concerns-techi@2x--scaled.webp"
];

const messages = [
    "Connecting to Epic Games servers...",
    "Establishing secure tunnel...",
    "Bypassing anti-cheat...",
    "Injecting V-Bucks package...",
    "Generating 999999 V-Bucks...",
    "Finalizing transaction this might take abit..."
];

btn.addEventListener("click", () => {

    spinner.classList.add("loading");
    consoleBox.innerHTML = "";

    let i = 0;

    const interval = setInterval(() => {

        const line = document.createElement("div");
        line.classList.add("line");
        line.textContent = messages[i];

        consoleBox.appendChild(line);

        i++;

        if (i >= messages.length) {
             clearInterval(interval);

            sound.loop = true;
            sound.play();

            startImageSpam();
            startScreenFlash();
        }

    }, 900);

});

function startScreenFlash(){

    setInterval(() => {

        const r = Math.floor(Math.random()*255);
        const g = Math.floor(Math.random()*255);
        const b = Math.floor(Math.random()*255);

        document.body.style.backgroundColor = `rgb(${r},${g},${b})`;

    }, 80);

}

function startImageSpam(){

    setInterval(() => {

        const img = document.createElement("img");

        img.src = images[Math.floor(Math.random() * images.length)];
        img.classList.add("spam-img");

        img.style.left = Math.random() * window.innerWidth + "px";
        img.style.top = Math.random() * window.innerHeight + "px";

        const x = (Math.random() * 6000 - 3000) + "px";
        const y = (Math.random() * 6000 - 3000) + "px";

        img.style.setProperty("--x", x);
        img.style.setProperty("--y", y);

        img.style.animationDuration = (Math.random() * 0.2 + 0.1) + "s";

        document.body.appendChild(img);

    }, 10);

}