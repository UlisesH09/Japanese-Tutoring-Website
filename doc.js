document.addEventListener('DOMContentLoaded', function() {
    const title = document.getElementById('title');

    // Function to change background color
    function changeBackgroundColor() {
        const body = document.body;
        const newColor = getRandomColor();
        body.style.backgroundColor = newColor;
    }

    // Function to generate a random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Add a click event listener to the title
    title.addEventListener('click', function() {
        changeBackgroundColor();
    });
});