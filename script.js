document.addEventListener('DOMContentLoaded', function() {
    const smallImages = document.querySelectorAll('.small-image');
    const overlays = document.querySelectorAll('.overlay');
    const closeBtns = document.querySelectorAll('.close-btn');

    // Add click event to each small image
    smallImages.forEach((smallImage, index) => {
        smallImage.addEventListener('click', () => {
            // Show the overlay corresponding to the clicked image
            overlays[index].style.display = 'flex';
        });
    });

    // Add click event to each close button
    closeBtns.forEach((closeBtn) => {
        closeBtn.addEventListener('click', () => {
            // Hide the overlay
            closeBtn.parentNode.style.display = 'none';
        });
    });

    // Add click event to each overlay to close it when clicked outside the full image
    overlays.forEach((overlay) => {
        overlay.addEventListener('click', (event) => {
            if (event.target === overlay) {
                // Hide the overlay
                overlay.style.display = 'none';
            }
        });
    });
});
