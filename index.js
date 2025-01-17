// featching data form api
let url =
  "https://gist.githubusercontent.com/harsh3195/b441881e0020817b84e34d27ba448418/raw/c4fde6f42310987a54ae1bc3d9b8bfbafac15617/demo-json-data.json";
let studentData = [];

async function fetchData(callback) {
  let response = await fetch(url);
  let data = await response.json();
  studentData = data;
  populateData(studentData);
}
function populateData(data) {
  let table = document.querySelector("tbody");
  table.innerHTML = "";
  data.forEach((data) => {
    let tr = document.createElement("tr");
    table.appendChild(tr);
    tr.innerHTML = `
          <td>${data.id}</td>
        <td>
          <div class="name_img" >
          <img src=${data.img_src} alt="Student_profile"/>
          ${data.first_name} ${data.last_name}
          </div>
        </td>
          <td>${data.gender}</td>
          <td>${data.class}</td>
          <td>${data.marks}</td>
          <td>${data.passing ? "pass" : "falied"}</td>
          <td>${data.email}</td>`;
  });
}

setTimeout(() => {
  fetchData(populateData);
}, 500);

// now applying flilering data

// sort by a-z
let shortA_Z = document.getElementById("shorta_z");
shortA_Z.addEventListener("click", shortDataA_Z);
function shortDataA_Z() {
  let table = document.querySelector("tbody");
  studentData.sort((a, b) => a.first_name.localeCompare(b.first_name));
  table.innerHTML = "";
  studentData.forEach((data) => {
    let tr = document.createElement("tr");
    table.appendChild(tr);
    tr.innerHTML = `
        <td>${data.id}</td>
        <td>
          <div class="name_img" style="color: green";>
          <img src=${data.img_src} alt="Student_profile"/>
          ${data.first_name} ${data.last_name}
          </div>
        </td>
          <td>${data.gender}</td>
          <td>${data.class}</td>
          <td>${data.marks}</td>
          <td>${data.passing ? "pass" : "falied"}</td>
          <td>${data.email}</td>
        `;
  });
}

// short z-a

let shortz_a = document.getElementById("shortz_a");
shortz_a.addEventListener("click", shortZ_A);
function shortZ_A() {
  studentData.sort((a, b) => b.first_name.localeCompare(a.first_name));
  let tbody = document.querySelector("tbody");
  tbody.innerHTML = "";
  studentData.forEach((data) => {
    let tr = document.createElement("tr");
    tbody.appendChild(tr);
    tr.innerHTML = `
         <td>${data.id}</td>
         <td>
          <div class="name_img" style="color: green;">
          <img src=${data.img_src} alt="Student_profile"/>
          ${data.first_name} ${data.last_name}
          </div>
        </td>          
        <td>${data.gender}</td>
          <td>${data.class}</td>
          <td>${data.marks}</td>
          <td>${data.passing ? "pass" : "falied"}</td>
          <td>${data.email}</td>
         `;
  });
}

// sort my marks
let sort_Marks = document.getElementById("sort_marks");
sort_Marks.addEventListener("click", sortMarks);

function sortMarks() {
  studentData.sort((a, b) => {
    if (a.marks === b.marks) {
      return a.first_name.localeCompare(b.first_name);
    }
    return b.marks - a.marks;
  });
  let tbody = document.querySelector("tbody");
  tbody.innerHTML = "";
  studentData.forEach((data) => {
    let tr = document.createElement("tr");
    tbody.appendChild(tr);
    tr.innerHTML = `
          <td>${data.id}</td>
          <td>
          <div class="name_img">
          <img src=${data.img_src} alt="Student_profile"/>
          ${data.first_name} ${data.last_name}
          </div>
        </td>          
        <td>${data.gender}</td>
          <td>${data.class}</td>
          <td style="color:green">${data.marks}</td>
          <td>${data.passing ? "pass" : "falied"}</td>
          <td>${data.email}</td>
         `;
  });
}

//sort by passing
let passing_short = document.getElementById("passing_short");
passing_short.addEventListener("click", passingShort);

function passingShort() {
  studentData.sort((a, b) => {
    return b.passing - a.passing;
  });
  let tbody = document.querySelector("tbody");
  tbody.innerHTML = "";
  studentData.forEach((data) => {
    let tr = document.createElement("tr");
    tbody.appendChild(tr);
    tr.innerHTML = `
        <td>${data.id}</td>
        <td>
          <div class="name_img">
          <img src=${data.img_src} alt="Student_profile"/>
          ${data.first_name} ${data.last_name}
          </div>
        </td>          
        <td>${data.gender}</td>
          <td>${data.class}</td>
          <td>${data.marks}</td>
          <td style="color:green">${data.passing ? "pass" : "falied"}</td>
          <td>${data.email}</td>
        `;
  });
}

// short by class
let sort_class = document.getElementById("sort_class");
sort_class.addEventListener("click", classSort);

function classSort() {
  studentData.sort((a, b) => {
    return a.class - b.class;
  });
  let tbody = document.querySelector("tbody");
  tbody.innerHTML = "";
  studentData.forEach((data) => {
    let tr = document.createElement("tr");
    tbody.appendChild(tr);
    tr.innerHTML = `
        <td>${data.id}</td>
        <td>
          <div class="name_img">
          <img src=${data.img_src} alt="Student_profile"/>
          ${data.first_name} ${data.last_name}
          </div>
        </td>          
        <td>${data.gender}</td>
          <td style="color:green">${data.class}</td>
          <td>${data.marks}</td>
          <td>${data.passing ? "pass" : "falied"}</td>
          <td>${data.email}</td>
        `;
  });
}


// short by Gender
let sort_gender = document.getElementById("sort_gender");
sort_gender.addEventListener("click", sortGender);

function sortGender() {
  const order = {
    Male: 1,
    Female: 2,
    Agender: 3,
    Bigender: 4,
    Genderfluid: 5,
    Genderqueer: 6,
    Polygender: 7,
    "Non-binary": 8,
  };
  studentData.sort((a, b) => {
    return order[a.gender] - order[b.gender];
  });
  let tbody = document.querySelector("tbody");
  tbody.innerHTML = "";
  studentData.forEach((data) => {
    let tr = document.createElement("tr");
    tbody.appendChild(tr);
    tr.innerHTML = `
        <td>${data.id}</td>
        <td>
          <div class="name_img">
          <img src=${data.img_src} alt="Student_profile"/>
          ${data.first_name} ${data.last_name}
          </div>
        </td>          
        <td style="color:green">${data.gender}</td>
          <td>${data.class}</td>
          <td>${data.marks}</td>
          <td>${data.passing ? "pass" : "falied"}</td>
          <td>${data.email}</td>
        `;
  });
}




// serch by input
let search = document.getElementById("search");
search.addEventListener("change", searchStudent); // also can use input live change
search.addEventListener('keydown', (e)=>{
    if(e.key === 'Enter'){
        searchStudent();
    }
})

function searchStudent() {
  let tbody = document.querySelector("tbody");
  tbody.innerHTML = "";
  let queryData = search.value.toLowerCase();
  let filterData = studentData.filter((data) => {
    return (
      data.first_name.toLowerCase().includes(queryData) ||
      data.last_name.toLowerCase().includes(queryData) ||
      data.email.toLowerCase().includes(queryData)
    );
  });

  filterData.forEach((data) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${data.id}</td>
        <td>
          <div class="name_img">
          <img src=${data.img_src} alt="Student_profile"/>
          ${data.first_name} ${data.last_name}
          </div>
        </td>          
        <td>${data.gender}</td>
          <td>${data.class}</td>
          <td>${data.marks}</td>
          <td>${data.passing ? "pass" : "falied"}</td>
          <td style="color:green">${data.email}</td>
        `;
    tbody.appendChild(tr);
  });

  if (filterData.length === 0) {
    let tr = document.createElement("tr");
    tr.innerHTML = `
          <td colspan="7" style="text-align: center; color:red;">No results found</td>
        `;
    tbody.appendChild(tr);
  }
}
// when user click on button then filter data show
let searchButton = document.querySelector('#search_button');
searchButton.addEventListener('click', searchStudent);



