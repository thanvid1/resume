$(document).ready(function() {
    // 1. Initial Check for Stored Theme
    // Check if the user has a preferred theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark-mode') {
        $('body').addClass('dark-mode');
    }

    
    $('#themeToggle').on('click', function() {
        
        $('body').toggleClass('dark-mode');

       
        if ($('body').hasClass('dark-mode')) {
            localStorage.setItem('theme', 'dark-mode');
            // Update button text for clarity
            $(this).text('Toggle Light Mode');
        } else {
            localStorage.setItem('theme', 'light-mode');
            // Update button text for clarity
            $(this).text('Toggle Dark Mode');
        }
    });

    // Initial button text update
    if ($('body').hasClass('dark-mode')) {
        $('#themeToggle').text('Toggle Light Mode');
    } else {
        $('#themeToggle').text('Toggle Dark Mode');
    }
});
