// Pop up JS

// Define variables
const popUp = document.querySelector('div');
const closeButton = document.querySelector('button');

// Set some timers so the pop up doesn't display for 5 seconds and transitions in
setTimeout(() => { popUp.style.display = 'flex'; }, 5000);
setTimeout(() => { popUp.style.opacity = '1'; }, 5010);

// when the user clicks the button to close the window, the pop up will transition back to a state of invisibility
closeButton.addEventListener('click', function(){
    popUp.style.opacity = '0';
    setTimeout(() => { popUp.style.display = 'none'; }, 1000);
})
