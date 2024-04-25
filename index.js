function $(selector) {
  return document.querySelector(selector);
}

function showLesson(lessonNumber, lesson) {
  const spaceRender = $(`#l${lessonNumber}`);

  const { title, content, eTitle, exercises } = lesson;

  // Rendering the lesson content
  const lessonHTML = `
    <div class="lesson">
      <div class="left">
        <h2>${lessonNumber}. ${title}</h2>
        ${content.map((contentItem) => `<p>${contentItem}</p>`).join("")}
      </div>
      <div class="right">
        <h3>${eTitle}</h3>
        ${exercises
          .map(
            (exercise) => `
          <p>${exercise.instruction}</p>
          <details>
            <summary>Answer</summary>
            <textarea name="${lessonNumber}" cols="50" rows="5" placeholder="${exercise.placeholder}"></textarea>
            <p>${exercise.hint}</p>
          </details>
        `
          )
          .join("/n")}
      </div>
    </div>`;

  spaceRender.innerHTML = lessonHTML;
}

function loadLesson(lessonNumber) {
  fetch(`lessons/${lessonNumber}.json`)
    .then((r) => r.json())
    .then((lesson) => {
      showLesson(lessonNumber, lesson[0]);
    })
    .catch((error) => {
      console.error(`Error loading lesson ${lessonNumber}:`, error);
    });
}

function initEvents() {
  const numberOfLessons = 8;
  for (let i = 1; i <= numberOfLessons; i++) {
    loadLesson(i);
  }
}

initEvents();
