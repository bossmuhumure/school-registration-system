// ARRAY TO STORE STUDENTS
const students = [];

// FUNCTION TO CALCULATE GRADE
function calculateGrade(marks){

  if(marks >= 80 && marks <= 100){
    return "A";
  }

  else if(marks >= 70){
    return "B";
  }

  else if(marks >= 60){
    return "C";
  }

  else if(marks >= 50){
    return "D";
  }

  else{
    return "F";
  }
}

// FUNCTION TO CHECK PASS OR FAIL
function getStatus(marks){

  if(marks >= 50){
    return "Pass";
  }

  else{
    return "Fail";
  }
}

// FUNCTION TO ADD STUDENT
function addStudent(){

  // GET VALUES FROM INPUTS
  const name =
    document.getElementById("name").value;

  const course1 =
    document.getElementById("course1").value;

  const marks1 =
    Number(document.getElementById("marks1").value);

  const course2 =
    document.getElementById("course2").value;

  const marks2 =
    Number(document.getElementById("marks2").value);

    
  const course3 =
    document.getElementById("course3").value;
     const marks3 =
    Number(document.getElementById("marks3").value);

   const total=
        marks1+marks2+marks3;

        const average=total/3;


 
  // CREATE OBJECT
  const student = {
    name: name,
    course1: course1,
    marks1: marks1,


     course2: course2,
    marks2: marks2,

     course3: course3,
    marks3: marks3,
    average:average,

    grade: calculateGrade(average),
    status: getStatus(average)
  };

  // PUSH OBJECT INTO ARRAY
  students.push(student);

  // DISPLAY RESULTS
  displayResults();

  // CLEAR INPUTS
  document.getElementById("name").value = "";
  document.getElementById("course1").value = "";
  document.getElementById("marks1").value = "";

   document.getElementById("course2").value = "";
  document.getElementById("marks2").value = "";

   document.getElementById("course3").value = "";
  document.getElementById("marks3").value = "";
}

// FUNCTION TO DISPLAY RESULTS
function displayResults(){

  const resultBody =
    document.getElementById("resultBody");

  resultBody.innerHTML = "";

  // LOOP THROUGH ARRAY
  students.forEach(student => {

    resultBody.innerHTML += `
      <tr>
        <td>${student.name}</td>
        <td>${student.course1}</td>
        <td>${student.marks1}</td>

        <td>${student.course2}</td>
        <td>${student.marks2}</td>

        <td>${student.course3}</td>
        <td>${student.marks3}</td>
        <td>${student.grade}</td>
        <td>${student.status}</td>
        <td>${student.average.toFixed(2)}</td>
      </tr>
    `;
  });
}






























































































































