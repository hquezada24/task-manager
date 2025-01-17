class ToDo {
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
    get taskName(){
        return this.name;
    }
    get taskDescription(){
        return this.description;
    }
}

export default class Task extends ToDo{
    constructor(name, description, date){
        super(name, description);
        this.date = date;
        this.completed = false;
    }
    set taskDate(date){
        this.date = date;
    }
    set taskComplete(completed){
        this.completed = completed;
    }
    get taskDate(){
        return this.date;
    }
    get taskComplete(){
        return this.completed;
    }
}