const courseNavigationContainer = document.querySelector('.course-navigation-container');
const courseNavigationItems = document.querySelectorAll('.course-navigation-item');
const courseThemes = document.querySelectorAll('.course-theme');
const nextThemeButton = document.querySelector('.next-theme-button');
const tests = document.querySelectorAll('.test-container');

const clearTestMessage = (currentActiveTheme) => {
    const testMessage = currentActiveTheme.querySelector('.message');
    if (testMessage !== null) {
        testMessage.remove();
    }
};

const clearTestAnswers = (currentActiveTheme) => {
    const answers = currentActiveTheme.querySelectorAll('input[type="radio"]');
    for (const answer of answers) {
        if (answer.checked) {
            answer.checked = false;
            break;
        }
    }
};

const hideElement = (elem) => {
    elem.classList.remove('active');
    elem.classList.add('hidden');
};

const showElement = (elem) => {
    elem.classList.remove('hidden');
    elem.classList.add('active');
};

const changeNavColor = (currentTheme, newTheme) => {
    currentTheme.style.backgroundColor = '#D9D9D9';
    newTheme.style.backgroundColor = '#8FE998';
};

courseNavigationContainer.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('course-navigation-item')) {
        const currentActiveTheme = document.querySelector('.active');
        hideElement(currentActiveTheme);

        const activeTheme = Array.from(courseThemes).find((theme) => theme.id === evt.target.id);
        showElement(activeTheme);

        const currentActiveNavigation = courseNavigationContainer.querySelector(`#${currentActiveTheme.id}`);
        changeNavColor(currentActiveNavigation, evt.target);

        clearTestMessage(currentActiveTheme);
        clearTestAnswers(currentActiveTheme);
    }
});

nextThemeButton.addEventListener('click', () => {
    const currentActiveTheme = document.querySelector('.active');
    hideElement(currentActiveTheme);

    const nextTheme = currentActiveTheme.nextElementSibling;
    showElement(nextTheme);

    const currentActiveNavigation = courseNavigationContainer.querySelector(`#${currentActiveTheme.id}`);
    const nextThemeNavigation = courseNavigationContainer.querySelector(`#${nextTheme.id}`);
    changeNavColor(currentActiveNavigation, nextThemeNavigation);

    clearTestMessage(currentActiveTheme);
    clearTestAnswers(currentActiveTheme);
});

const addCorrectMessage = (test) => {
    const submitButton = test.querySelector('.submit');
    const correctMessage = document.createElement('div');
    correctMessage.classList.add('correct-message');
    correctMessage.classList.add('message');
    correctMessage.innerHTML =
        `<img src='img/correct.png' width="33" height="31">
        <p>Верно!</p>`;
    test.insertBefore(correctMessage, submitButton);
};

const addErrorMessage = (test) => {
    const submitButton = test.querySelector('.submit');
    const errorMessage = document.createElement('div');
    errorMessage.classList.add('error-message');
    errorMessage.classList.add('message');
    errorMessage.innerHTML =
        `<img src='img/error.png' width="28" height="28">
        <p>Неверно!</p>`
    test.insertBefore(errorMessage, submitButton);
}

for (const test of tests) {
    const answersContainer = test.querySelector('form');
    answersContainer.addEventListener('change', () => {
        clearTestMessage(test);
    });

    const submitButton = test.querySelector('.submit');
    submitButton.addEventListener('click', () => {
        const answers = test.querySelectorAll('input[type="radio"]');
        for (const answer of answers) {
            if (answer.checked && answer.classList.contains('correct')) {
                addCorrectMessage(test);
                break;
            }
        }
        if (test.querySelector('.correct-message') === null) {
            addErrorMessage(test);
        }
    });
};
