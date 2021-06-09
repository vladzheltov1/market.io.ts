$(document).ready(() => {
    const dropDowns = document.querySelectorAll(".m-dropdown");

    for(let i = 0; i < dropDowns.length; i++){
        dropDowns[i].addEventListener("click", dropDownClick);
    }
});

const dropDownClick = function(event){
    const data = event.target.dataset;
    const dropList = data.target;

    console.log("click");

    if(!dropList)
        return;

    $(dropList).toggle();
}
