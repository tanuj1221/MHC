document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.dt-header');
    const mobileToggle = document.querySelector('.dt-mobile-toggle');
    const nav = document.querySelector('.dt-nav');
    const dropdownItems = document.querySelectorAll('.dt-nav__item--has-dropdown');

    // Handle scroll for header background
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.classList.add('dt-header--scrolled');
            header.classList.remove('dt-header--transparent');
        } else {
            header.classList.remove('dt-header--scrolled');
            header.classList.add('dt-header--transparent');
        }
    });

    // Mobile menu toggle
    mobileToggle.addEventListener('click', function (e) {
        e.stopPropagation(); // Prevent event from bubbling up
        nav.classList.toggle('active');
        this.classList.toggle('active');
        // Add background to header when mobile menu is open
        header.classList.toggle('dt-header--scrolled');
    });

    // Mobile dropdown toggle
    dropdownItems.forEach(item => {
        item.addEventListener('click', function (e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                this.classList.toggle('active');
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function (e) {
        if (!nav.contains(e.target) && !mobileToggle.contains(e.target)) {
            nav.classList.remove('active');
            mobileToggle.classList.remove('active');
        }
    });
});