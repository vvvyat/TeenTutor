const courseNavigationContainer = document.querySelector('.course-navigation-container');
const courseNavigationItems = document.querySelectorAll('.course-navigation-item');
const courseThemes = document.querySelectorAll('.course-theme');
const nextThemeButton = document.querySelector('.next-theme-button');

courseNavigationContainer.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('course-navigation-item')) {
        const currentActiveTheme = document.querySelector('.active');
        currentActiveTheme.classList.remove('active');
        currentActiveTheme.classList.add('hidden');
        const currentActiveNavigation = courseNavigationContainer.querySelector(`#${currentActiveTheme.id}`);
        currentActiveNavigation.style.backgroundColor = '#D9D9D9';
        const activeTheme = Array.from(courseThemes).find((theme) => theme.id === evt.target.id);
        activeTheme.classList.remove('hidden');
        activeTheme.classList.add('active');
        evt.target.style.backgroundColor = '#8FE998';
    }
});

nextThemeButton.addEventListener('click', () => {
    const currentActiveTheme = document.querySelector('.active');
    const nextTheme = currentActiveTheme.nextElementSibling;
    currentActiveTheme.classList.remove('active');
    currentActiveTheme.classList.add('hidden');
    const currentThemeNavigation = Array.from(courseNavigationItems).find((navItem) => navItem.id === currentActiveTheme.id);
    currentThemeNavigation.style.backgroundColor = '#D9D9D9';
    nextTheme.classList.remove('hidden');
    nextTheme.classList.add('active');
    const nextThemeNavigation = Array.from(courseNavigationItems).find((navItem) => navItem.id === nextTheme.id);
    nextThemeNavigation.style.backgroundColor = '#8FE998';
});

