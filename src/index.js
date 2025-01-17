import "./style.css";
import Task from "./manageTasks";
import { showDetails } from "./manageTasks";

/* 
* Things to do:
add a task
Be able to modify tasks
add a project
modify projects
select another project
Show description when hovering
*/

const input = document.getElementById("add");



// show and hide description of task 1
const task1 = document.querySelector("#task1");

task1.addEventListener("mouseover", () => {
    const description = document.querySelector("#task1 .description");
    description.style.display = "block";
});
task1.addEventListener("mouseout", () => {
    const description = document.querySelector("#task1 .description");
    description.style.display = "none";
});

// show and hide description of task 2
const task2 = document.querySelector("#task2");

task2.addEventListener("mouseover", () => {
    const description = document.querySelector("#task2 .description");
    description.style.display = "block";
});
task2.addEventListener("mouseout", () => {
    const description = document.querySelector("#task2 .description");
    description.style.display = "none";
});



