function $(selector) {
  return document.querySelector(selector);
}

function addLessonsAsHTML(lessons) {
  //   console.log("inside map");
  const spaceRender = $("#l2");
  const text = lessons.map((lesson) => {
    return `
  <div class="lesson">
    <div class ="left">
         <h2>${lesson.title}</h2>
            <p>${lesson.c1}</p>
            <p>${lesson.c2}</p>
            <p>${lesson.c3}</p>
            <p>${lesson.c4}</p>
            <p>${lesson.c5}</p>
            <p>${lesson.c6}</p>
            <p>${lesson.c7}</p>
    </div>
    <div class ="right">
        <h3>${lesson.eTitle}</h3>
        <p>${lesson.c8}</p>
        <p>${lesson.c9}</p>
        <details>
        <summary>Answer</summary>
            <textarea
            name="1"
            id="1"
            cols="50"
            rows="5"
            placeholder="Write your answer here">
            </textarea>
        </details>
    </div>
  </div>`;
  });
  spaceRender.innerHTML = text.join("");
}

function loadLessons() {
  //   console.log("here");
  fetch("lessons/lesson2.json").then((r) => {
    r.json().then((lessons) => {
      //   console.log("lessons", lessons);
      addLessonsAsHTML(lessons);
    });
  });
}
// function renderLessons(lessons) {
//   const lessonsHTML = lessons.map(addLessonsAsHTML);
//   console.log("lessons as html", lessonsHTML);
//   const spaceRender = document.$("#l2");
//   spaceRender.innerHTML = lessonsHTML.join("");
// }
function initEvents() {
  loadLessons();
}
initEvents();
