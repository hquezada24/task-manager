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

const list = document.querySelector("#list");

list.addEventListener("mouseover", showDetails);