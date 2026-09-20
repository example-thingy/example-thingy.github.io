const button = document.getElementById("runaway-btn");

button.addEventListener("mouseenter", () => {
    // Generate random numbers between 0 and 90 for screen percentages
    const randomTop = Math.floor(Math.random() * 30);
    const randomLeft = Math.floor(Math.random() * 30);

    // Apply new coordinates to the button style
    button.style.top = `${randomTop}%`;
    button.style.left = `${randomLeft}%`;
});
button.addEventListener('click', function () {
    window.location.href = "../purgatory-complete/";
});
