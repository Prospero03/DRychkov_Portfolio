document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const mobileNav = document.querySelector('.mobile-nav');
    
    burgerMenu.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileNav.classList.toggle('active');
    });
    
    // Закрывать меню при клике на пункт
    const navItems = mobileNav.querySelectorAll('a, button');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            burgerMenu.classList.remove('active');
            mobileNav.classList.remove('active');
        });
    });
});