const students = [
  {
    name: "Alice Johnson",
    education: "Frontend",
    city: "Stockholm",
    year: 2,
  },
  {
    name: "Tom Smith",
    education: "Backend",
    city: "Gothenburg",
    year: 1,
  },
  {
    name: "Eve Brown",
    education: "Full Stack",
    city: "Malmo",
    year: 3,
  },
  {
    name: "Mike Davis",
    education: "Frontend",
    city: "Uppsala",
    year: 1,
  },
  {
    name: "Sara Wilson",
    education: "UX Design",
    city: "Lund",
    year: 2,
  },
];

const sortButton = document.querySelector(".sort-button");
const studentsContainer = document.querySelector(".students");
console.log(studentsContainer);

sortButton.addEventListener("click", () => {
  studentsContainer.innerHTML = "";
  let allCheckBoxesEducation = document.querySelectorAll(
    "[name = 'education']:checked"
  );

  //Go through all checkboxes firstly which we chose
  allCheckBoxesEducation.forEach((checkbox) => {
    students.forEach((student) => {
      console.log("Checkbox value:", checkbox.value);
      // If the "teacher" checkbox is selected, display all students
      if (checkbox.value === "teacher") {
        console.log("need to add all students here");
        let element = document.createElement("h3");
        element.textContent = `${student.name} is learning ${student.education}`;
        studentsContainer.appendChild(element);
      }
      if (checkbox.value === student.education) {
        console.log("added?");
        let element = document.createElement("h3");
        element.textContent = `${student.name} is learning ${student.education}`;
        studentsContainer.appendChild(element);
      }
    });
  });
  allCheckBoxesEducation.forEach((checkbox) => {
    checkbox.checked = false;
  });

  let allCitiesCheckboxes = document.querySelectorAll("[name='city']:checked");
  allCitiesCheckboxes.forEach((city) => {
    students.forEach((student) => {
      if (city.value === student.city) {
        let element = document.createElement("h3");
        element.textContent = `${student.name} leaves in ${student.city}`;
        studentsContainer.appendChild(element);
        console.log(`${student.name} lives in ${student.city}`);
      }
    });
  });
});

const studyButton = document.getElementById("study-button");
const yearsContainer = document.querySelector(".years-container");

studyButton.addEventListener("click", () => {
  yearsContainer.classList.toggle("show");
});
const menuItems = document
  .querySelectorAll("[name='years']")
  .forEach((item) => {
    item.addEventListener("click", (e) => {
      studentsContainer.innerHTML = "";

      const selectedYear = e.target.value;

      students.forEach((student) => {
        console.log(student.year);
        if (student.year.toString() === selectedYear) {
          let element = document.createElement("h3");
          element.textContent = `${student.name} studies for year ${item.value}`;
          studentsContainer.appendChild(element);
        }
      });
    });
  });
