const courseNavigationContainer = document.querySelector('.course-navigation-container');
const courseNavigationItems = document.querySelectorAll('.course-navigation-item');
const courseThemes = document.querySelectorAll('.course-theme');
const nextThemeButton = document.querySelector('.next-theme-button');
const submitButton = document.querySelector('.submit');

courseNavigationContainer.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('course-navigation-item')) {
        const currentActiveTheme = document.querySelector('.active');
        currentActiveTheme.classList.remove('active');
        currentActiveTheme.classList.add('hidden');
        const testMessage = currentActiveTheme.querySelector('.message');
        if (testMessage !== null) {
            testMessage.remove();
            const answers = currentActiveTheme.querySelectorAll('input[type="radio"]');
            for (const answer of answers) {
                answer.checked = false;
            }
        }
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
    const testMessage = currentActiveTheme.querySelector('.message');
    if (testMessage !== null) {
        testMessage.remove();
        const answers = currentActiveTheme.querySelectorAll('input[type="radio"]');
        for (const answer of answers) {
            answer.checked = false;
        }
    }
    const currentThemeNavigation = Array.from(courseNavigationItems).find((navItem) => navItem.id === currentActiveTheme.id);
    currentThemeNavigation.style.backgroundColor = '#D9D9D9';
    nextTheme.classList.remove('hidden');
    nextTheme.classList.add('active');
    const nextThemeNavigation = Array.from(courseNavigationItems).find((navItem) => navItem.id === nextTheme.id);
    nextThemeNavigation.style.backgroundColor = '#8FE998';
});

submitButton.addEventListener('click', () => {
    const currentActiveTheme = document.querySelector('.active');
    const answers = currentActiveTheme.querySelectorAll('input[type="radio"]');
    const testContainer = currentActiveTheme.querySelector('.test-container');
    for (const answer of answers) {
        if (answer.checked && answer.classList.contains('correct')) {
            const correctMessage = document.createElement('div');
            correctMessage.classList.add('correct-message');
            correctMessage.classList.add('message');
            correctMessage.innerHTML =
                `<img src='img/correct.png' width="33" height="31">
                <p>Верно!</p>`
            testContainer.append(correctMessage);
        }
    }
    if (testContainer === null || testContainer.querySelector('.correct-message') === null) {
        const errorMessage = document.createElement('div');
        errorMessage.classList.add('error-message');
        errorMessage.classList.add('message');
        errorMessage.innerHTML =
            `<img src='img/error.png' width="28" height="28">
            <p>Неверно!</p>`
        testContainer.append(errorMessage);
    }
});
