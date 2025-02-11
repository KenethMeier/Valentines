const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const message = document.getElementById('message');
let noClicks = 0;

yesButton.addEventListener('click', () => {
    message.textContent = "Yay! I'm so happy! I can't wait to spend Valentine's Day with you! ❤️";
    message.style.display = "block";
});

noButton.addEventListener('click', () => {
    noClicks++;

    // Make "No" button smaller
    let noSize = 1 - (noClicks * 0.05); // Reduce size by 5% per click
    noButton.style.transform = `scale(${noSize})`;
    if (noSize <= 0.5) {
        noButton.disabled = true; // Disable "No" button when it gets too small
    }


    // Make "Yes" button slightly bigger
    let yesSize = 1 + (noClicks * 0.02); // Increase size by 2% per click
    yesButton.style.transform = `scale(${yesSize})`;

    switch (noClicks) {
        case 1:
            message.textContent = "Are you sure?  Like, *really* sure?";
            break;
        case 2:
            message.textContent = "Double-checking... you definitely don't want to be my Valentine? Think of the chocolates!";
            break;
        case 3:
            message.textContent = "Okay, last chance. This is your final answer?";
            break;
        case 4:
            message.textContent = "Fine... but you're missing out on a great Valentine's date! Just kidding, one last time, are you sure?";
            break;
        case 5:
            message.textContent = "Okay, okay, I get it! But seriously... are you *absolutely* positive?";
            break;
        case 6:
            message.textContent = "Are you sure you wouldn't like a romantic dinner and a movie?";
            break;
        case 7:
            message.textContent = "What about a cozy night in with some snacks?";
            break;
        case 8:
            message.textContent = "Last, last, LAST chance!  Don't make me beg!";
            break;
        case 9:
            message.textContent = "Okay, I give up!  But you're still awesome. 😊";
            break;
        default:
            message.textContent = "Alright, alright, you've made your point! I'll stop asking, but just so you know, the 'Yes' button is still here if you change your mind 😉";
    }
    message.style.display = "block";
});