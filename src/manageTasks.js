export default class ToDo {
    constructor(name, description){
        this.name = name;
        this.description = description;
    }
    set taskName(name){
        this.name = name;
    }
    set taskDescription(newDescription){
        this.description = newDescription;
    }
}

export const showDetails = (e) => {
    const target = e.target;

    switch(target.id){
        case "task1":
            const pTag = document.querySelector("#task1 p");
            pTag.style.display = "block";
            break;
    }

}