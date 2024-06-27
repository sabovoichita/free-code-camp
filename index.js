function $(selector) {
  return document.querySelector(selector);
}

function renderDivs(lessonNumber) {
  const container = $("#container");
  for (let i = 1; i <= lessonNumber; i++) {
    const lessonDiv = document.createElement("div");
    lessonDiv.id = `l${i}`;
    container.appendChild(lessonDiv);
  }
}

function showLesson(lessonNumber, lesson) {
  const spaceRender = $(`#l${lessonNumber}`);
  if (!spaceRender) {
    console.error(`Lesson #l${lessonNumber} not found.`);
    return;
  }

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
    </div>
  `;

  spaceRender.innerHTML = lessonHTML;
}

function writeChapter(chapterContent, beforeLessonNumber) {
  const lessonDiv = $(`#l${beforeLessonNumber}`);
  if (!lessonDiv) {
    console.error(`Element #l${beforeLessonNumber} not found.`);
    return;
  }
  const chapterDiv = document.createElement("div");
  chapterDiv.className = "chapter";
  chapterDiv.innerHTML = `<h2>${chapterContent}</h2>`;
  lessonDiv.parentNode.insertBefore(chapterDiv, lessonDiv);
}

function loadLesson(lessonNumber) {
  fetch(`lessons/${lessonNumber}.json`)
    .then((r) => r.json())
    .then((lessonData) => {
      // console.log(`Loaded lesson ${lessonNumber}:`, lessonData);
      if (lessonData && lessonData.length > 0) {
        showLesson(lessonNumber, lessonData[0]);
      }

      // Write "Chapter 1: Basic JavaScript" at the start
      if (lessonNumber === 1) {
        writeChapter("Chapter 1: Basic JavaScript", lessonNumber);
      }

      // Write "Chapter 2: ES6" after lesson 113
      if (lessonNumber === 114) {
        writeChapter("Chapter 2: ES6", lessonNumber);
      }
      if (lessonNumber === 143) {
        writeChapter("Chapter 3: Regular Expressions", lessonNumber);
      }
    })
    .catch((error) => {
      console.error(`Error loading lesson ${lessonNumber}:`, error);
    });
}

function writeTitle() {
  const renderTitle = $("#container");
  if (!renderTitle) {
    console.error(`Container not found.`);
    return;
  }
  const titleDiv = document.createElement("div");
  titleDiv.id = "title";
  titleDiv.innerHTML = `
    <h1>JavaScript Lessons</h1>
  `;
  renderTitle.insertBefore(titleDiv, renderTitle.firstChild);
}

function initEvents() {
  const numberOfLessons = 145;
  renderDivs(numberOfLessons);

  writeTitle();

  // Load all lessons and insert chapters as needed
  for (let i = 1; i <= numberOfLessons; i++) {
    loadLesson(i);
  }
}

initEvents();
