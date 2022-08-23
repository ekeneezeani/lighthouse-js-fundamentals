const organizeInstructors = function(instructors) {
  // Put your solution here
  let courseAndInstructors = {};
  let instructorsForCourse = [];
  let allCourses = [instructors[0].course]
  for (let i = 0; i < instructors.length; i++){
    if(!allCourses.includes(instructors[i].course)){
      allCourses.push(instructors[i].course)
    }
  }
for(let i = 0; i < allCourses.length; i++){
  for(j = 0; j < instructors.length; j++){
    if(instructors[j].course === allCourses[i]){
     // console.log(instructors[j].name + " " + instructors[j].course)
      instructorsForCourse.push(instructors[j].name);
    }
  }
  courseAndInstructors[allCourses[i]] = instructorsForCourse;
  //console.log('_____________')
  //console.log(courseAndInstructors)
  instructorsForCourse = [];
}
  return courseAndInstructors;
};
console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));