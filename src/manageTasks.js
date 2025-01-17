export const showDetails = (event) => {
    const targeting = event.target;

    switch(targeting.id){
        case "task1":
            const pTag = document.querySelector("#task1 p");
            pTag.style.display = "block";
            break;
    }

}