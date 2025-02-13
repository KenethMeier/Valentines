const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const message = document.getElementById('message');
let noClicks = 0;

yesButton.addEventListener('click', () => {
    message.textContent = "Yown oh nag yes, hehee. Iloveyouuuu💖 \n";
    message.style.display = "block";

    yesButton.style.display = "none";
    noButton.style.display = "none";

    // Redirect after 5 seconds
    const redirectDelay = 5; // 5-second delay
    message.textContent += `\n  Teka lang ahhh! Redirecting in ${redirectDelay} seconds...`; // Updated message

    let countdown = redirectDelay; // Initialize countdown

    const countdownDisplay = document.createElement('span'); // Create a span for the countdown
    countdownDisplay.textContent = countdown;
    message.appendChild(countdownDisplay); // Add it to the message

    const countdownInterval = setInterval(() => {
        countdown--;
        countdownDisplay.textContent = countdown; // Update the countdown display

        if (countdown < 0) {
            clearInterval(countdownInterval); // Stop the countdown
            const youtubeLink = "https://www.youtube.com/shorts/QijWFU2j-dI"; // **REPLACE WITH YOUR YOUTUBE LINK**
            window.location.href = youtubeLink; // Redirect to YouTube
        }
    }, 1000); // Update every 1000ms (1 second)
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
            message.textContent = "Sus, bat no? Sure ka?";
            break;
        case 2:
            message.textContent = "Eh pinindot uli yung no eh. Sus naman, dahil ba wala ako pera? Isa pang tanong :D";
            break;
        case 3:
            message.textContent = "Okay, last na. Sure ka ayaw mo tlaga??";
            break;
        case 4:
            message.textContent = "Okee, sayang naman may plano naman na sana ehhh... Isa pa hehee";
            break;
        case 5:
            message.textContent = "Okay, okay, what if sa bahay na lang then treat ko?";
            break;
        case 6:
            message.textContent = "Sure ka? Kakain hangang mabusog sobra, habang nanunuod ganunnn...";
            break;
        case 7:
            message.textContent = "Last, chance na talagaa itoo :(((";
            break;
        case 8:
            message.textContent = "Okey titigil na, click mo na lang yung no para mag close na syaa.. :(((";
            break;
        default:
            message.textContent = "Heheee last na talagaa need mo sumagott, promise andyan naman yung option para mag no tlagaa";
    }
    message.style.display = "block";
});