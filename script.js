const hoverSound = document.getElementById('hoverCard')
const flipSound = document.getElementById('flipCard')
// Step 1: Find all the elements on the page that have the class "card".
// We store this list of cards in a constant variable called 'cards'.
const cards = document.querySelectorAll('.card');

// Step 2: For each card we found, run a function.
// .forEach is a loop that goes through every item in our list.
cards.forEach(card => {
    // Step 3: For each individual card, add an event listener that waits for a 'click'.
    card.addEventListener('click', function () {
        // When a card is clicked, find the element with the class '.card__inner'
        // that is INSIDE the clicked card.
        // Then, access its list of classes (.classList) and toggle the 'is-flipped' class.
        card.querySelector('.card__inner').classList.toggle('is-flipped');
        if (flipSound) {
            flipSound.currentTime = 0;
            flipSound.play()
        }
    });
    card.addEventListener('mouseenter', function() {
        if (hoverSound) {
            hoverSound.currentTime = 0 
            hoverSound.play();
        }
    });
});
