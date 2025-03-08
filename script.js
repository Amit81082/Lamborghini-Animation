
document.addEventListener("DOMContentLoaded", function () {
    let road = document.querySelector(".road");
    let position = 0;

    function moveRoad() {
        position -= 12; // Road speed
        road.style.backgroundPosition = position + "px 0";
        requestAnimationFrame(moveRoad);
    }

    moveRoad();
});

// 1️⃣ Engine Sound Load Karein
let engineSound = new Audio("car_running_sound.mp3");
engineSound.loop = true;  // Continuous loop me chalega
engineSound.volume = 0.4; // Volume adjust karein (0 to 1)

// 2️⃣ Function to Start Sound (User Interaction Required)
function startEngineSound() {
    engineSound.play().catch(error => console.log("Autoplay blocked:", error));
}

// 3️⃣ User Interaction Event (Click ya Key Press)
document.addEventListener("click", startEngineSound);
document.addEventListener("keydown", startEngineSound);

function shakeBackground() {
    let intensity = 1.2; // Shake intensity (jitna jyada, utna zyada shake)
    
    function move() {
        let x = (Math.random() * intensity * 2 - intensity).toFixed(2);
        let y = (Math.random() * intensity * 2 - intensity).toFixed(2);
        
        document.body.style.transform = `translate(${x}px, ${y}px)`;
        
        requestAnimationFrame(move); // Smooth animation ke liye
    }

    move();
}

shakeBackground();


