window.onload = () => {
    document.body.classList.remove("container");
    
    // Intro interaction
    const intro = document.getElementById('intro');
    const bgMusic = document.getElementById('bg-music');
    
    // Ensure body starts as 'not-loaded'
    document.body.classList.add('not-loaded');

    // Function to start experience
    const startExperience = () => {
        // Play music
        if(bgMusic){
            bgMusic.volume = 0.5; // Set volume to 50%
            bgMusic.play().then(() => {
                console.log("Audio playing successfully");
            }).catch(e => {
                console.error("Audio play failed:", e);
                // Try playing again on next interaction if blocked
            });
        }

        // Fade out intro
        if(intro) {
            intro.classList.add('fade-out');
            setTimeout(() => {
                intro.style.display = 'none'; // Remove from flow after fade
            }, 1500);
        }
        
        // Reveal flowers and other elements
        document.body.classList.remove('not-loaded');
    };

    if(intro){
        intro.addEventListener('click', startExperience);
    }
    
    // Backup: clickable body if intro fails to catch it (e.g. z-index issues)
    document.body.addEventListener('click', () => {
        if(document.body.classList.contains('not-loaded')){
           startExperience();
        }
    });
};