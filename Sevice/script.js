// Optional: Add hover image change functionality
document.querySelectorAll('.service-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        const img = item.querySelector('images/project-4.png');
        const hoverImage = `hover-${img.src.split('/').pop()}`; // Generate hover image path
        img.src = 'images/project-4.png'; // Change to hover image
    });

    item.addEventListener('mouseleave', () => {
        const img = item.querySelector('.service-image');
        const originalImage = img.src.replace('hover-', '');
        img.src = originalImage; // Revert to original image
    });
});
