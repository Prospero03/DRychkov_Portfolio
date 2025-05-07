document.addEventListener('DOMContentLoaded', function() {
    const listHeaders = document.querySelectorAll('.list-header');
    
    listHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const isActive = this.classList.contains('active');
            const content = this.nextElementSibling;
            
            // Закрываем все открытые элементы
            document.querySelectorAll('.list-header.active').forEach(activeHeader => {
                if (activeHeader !== this) {
                    activeHeader.classList.remove('active');
                    const activeContent = activeHeader.nextElementSibling;
                    activeContent.style.maxHeight = '0';
                    activeContent.style.padding = '0';
                }
            });

            // Переключаем текущий элемент
            if (!isActive) {
                this.classList.add('active');
                content.style.maxHeight = content.scrollHeight + 'px';
                content.style.padding = '15px 0';
            } else {
                this.classList.remove('active');
                content.style.maxHeight = '0';
                content.style.padding = '0';
            }
        });
    });
});

//Плавный переход
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Функция для кнопки "Контакты"
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}