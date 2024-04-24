function $(selector) {
  return document.querySelector(selector);
}

function showLesson1(lessons) {
  // console.log("inside map");
  const spaceRender = $("#l1");
  const text = lessons.map((lesson) => {
    return `
  <div class="lesson">
    <div class ="left">
         <h2>1. ${lesson.title}</h2>
            <p>${lesson.c1}</p>
            <p>${lesson.c2}</p>
            <p>${lesson.c3}</p>
            <p>${lesson.c4}</p>
            <p>${lesson.c5}</p>
            <p>${lesson.c6}</p>
            <p>${lesson.c7}</p>
            <p>${lesson.c8}</p>
            <p>${lesson.c9}</p>
    </div>
    <div class ="right">
        <h3>${lesson.eTitle}</h3>
        <p>${lesson.c10}</p>
      
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

function loadLesson1() {
  //   console.log("here");
  fetch("lessons/1.json").then((r) => {
    r.json().then((lessons) => {
      //   console.log("lessons", lessons);
      showLesson1(lessons);
    });
  });
}

function showLesson2(lessons) {
  // console.log("inside map");
  const spaceRender = $("#l2");
  const text = lessons.map((lesson) => {
    return `
  <div class="lesson">
    <div class ="left">
         <h2>2. ${lesson.title}</h2>
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

function loadLesson2() {
  //   console.log("here");
  fetch("lessons/2.json").then((r) => {
    r.json().then((lessons) => {
      //   console.log("lessons", lessons);
      showLesson2(lessons);
    });
  });
}

function showLesson3(lessons) {
  // console.log("inside map");
  const spaceRender = $("#l3");
  const text = lessons.map((lesson) => {
    return `
  <div class="lesson">
    <div class ="left">
         <h2>3. ${lesson.title}</h2>
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

function loadLesson3() {
  //   console.log("here");
  fetch("lessons/3.json").then((r) => {
    r.json().then((lessons) => {
      //   console.log("lessons", lessons);
      showLesson3(lessons);
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
  loadLesson1();
  loadLesson2();
  loadLesson3();
}
initEvents();
