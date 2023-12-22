// set inital value to zero
let count = 0;
let timerRunning = false; //Checks if timer is working or not
// select value and buttons
const value = document.querySelector("#value");
const hint = document.querySelector("#hint");
const btns = document.querySelectorAll(".btn");

let positive = "Positive";
let negative = "Negative";
let defaultValue = "TallyUp";

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    if (!timerRunning){
        enableButtons();
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--;
        }
        else if (styles.contains("increase")){
            count++;
        }
        else if (styles.contains("doubleup")){
            count *= 2;
            // checks if doubling up results in negative answer or not
            // if it is negative answer, times by -1 to convert to positive number
            if (count < 0){
                count *= -1;
            }
        }
        else if (styles.contains("doubledown")){
            count*= -2;
            // Check if multiplying by 2 negtaives give positive or not
            // If it results in positive, we keep going down as a negative number
            if (count > 0){
                count = -count;
            }
        }
        else if (styles.contains("duosplit")){
            if (count > 0){
                count /= 2;
            }
        }
        else if (styles.contains("squadsplit")){
            if (count > 0){
                count /= 4;
            }
        }
        else {
            count = 0;
        }

        if (count > 0){
            value.style.color = "#20F766";
            hint.textContent = positive;
            hint.style.color = "#fff";
        }
        else if (count < 0){
            value.style.color = "#F75820";
            hint.textContent = negative;
            hint.style.color = "#CD20F7";
        }
        else {
            value.style.color = "#20E5F7"
            hint.textContent = defaultValue;
            hint.style.color = "#3F7C85";
        }
        value.textContent = count;
    }
  });
});


document.querySelector('.countdown').addEventListener('click', function() {
    const userNumber = parseInt(document.getElementById('userNumber').value);
    if (!isNaN(userNumber) && userNumber > 0 && !timerRunning) {
        timerRunning = true;
        disableButtons();
        startCountdown(userNumber);
    } else {
        alert('Please enter a valid number!');
    }
});

function startCountdown(startFrom) {
    count = startFrom;
    const countdownInterval = setInterval(function() {
        value.textContent = count;
        if (count == 0) {
            clearInterval(countdownInterval);
            timerRunning = false;
            enableButtons();
            playSoundEffect();
        } else {
            count--;
        }
    }, 1000); // Countdown is in milliseconds --> 1000ms = 1s
}

//Functions to check is all buttons should work or be disabled

function disableButtons() {
    btns.forEach(function (btn) {
        btn.disabled = true;
    });
}

function enableButtons() {
    btns.forEach(function (btn) {
        btn.disabled = false;
    });
}
