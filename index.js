function $(selector) {
  return document.querySelector(selector);
}

function renderDivs(lessonNumber) {
  const container = $("#container");
  for (let i = 1; i <= lessonNumber; i++) {
    const div = document.createElement("div");
    div.id = `l${i}`;
    container.appendChild(div);
  }
}

function showLesson(lessonNumber, lesson) {
  const spaceRender = $(`#l${lessonNumber}`);

  const { title, content, eTitle, exercises, hint } = lesson;

  const lessonHTML = `
    <div class="lesson">
      <div class="left">
        <h2>${lessonNumber}. ${title}</h2>
        ${content.map((contentItem) => `<p>${contentItem}</p>`).join(" ")}
      </div>
      <div class="right">
        <h3><u>${eTitle}</u></h3>
        ${exercises
          .map(
            (exercise) => `
          <p>${exercise.instruction}</p>
          <details>
            <summary><b>Answer</b></summary>
            <textarea name="${lessonNumber}" cols="50" rows="5" placeholder="${exercise.placeholder
              .map((h) => `${h}`)
              .join("\r\n")}"></textarea>
          </details>
        `
          )
          .join(" ")}
          ${hint.map((h) => `<p>\b ${h}</p>`).join(" ")}
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

function writeTitle() {
  const renderTitle = $("#container");
  const titleDiv = document.createElement("div");
  titleDiv.id = "title";
  titleDiv.innerHTML = `
  <h1>JavaScript Lessons</h1>
 `;
  container.insertBefore(titleDiv, renderTitle.firstChild);
}

function initEvents() {
  const numberOfLessons = 132;
  renderDivs(numberOfLessons);
  writeTitle();

  for (let i = 1; i <= numberOfLessons; i++) {
    loadLesson(i);
  }
}

initEvents();
