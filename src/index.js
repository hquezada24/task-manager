import "./style.css";
import ToDo from "./manageTasks";
import { showDetails } from "./manageTasks";

/* 
* Things to do:
Show description when hovering
Be able to modify tasks
add a task
add a project
modify projects
select another project
*/

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

const list = document.querySelector("#list");