const subjectsListContainer = document.querySelector('.subjects-list-container');
const subjectCoursesContainer = document.querySelector('.subject-courses-container');
const subjectCourses = document.querySelectorAll('.subject-courses');
const catalogItems = document.querySelectorAll('.catalog-item');
const coursesPreview = document.querySelectorAll('.course-preview');

for (const catalogItem of catalogItems) {
    const coursesContainer = Array.from(subjectCourses).find((courses) => courses.id === catalogItem.id);
    const coursesCnt = catalogItem.querySelector('.courses-cnt');
    const courses = coursesContainer.querySelectorAll('.course-item');
    
    coursesCnt.textContent = courses.length;
}

subjectsListContainer.addEventListener('click', (evt) => {
    const target = evt.target.closest('.catalog-item');

    const activeSubjectCourses = Array.from(subjectCourses).find((courses) => courses.id === target.id);
    
    activeSubjectCourses.classList.remove('hidden');
    subjectsListContainer.classList.add('hidden');
});

subjectCoursesContainer.addEventListener('click', (evt) => {
    const target = evt.target.closest('.course-item');
    
    const activeCourse = Array.from(coursesPreview).find((course) => course.id === target.id);
    
    activeCourse.classList.remove('hidden');
    subjectCoursesContainer.classList.add('hidden');
});
