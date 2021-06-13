$(document).ready(() => {
    const dropDowns = document.querySelectorAll(".m-dropdown");

    for(let i = 0; i < dropDowns.length; i++){
        dropDowns[i].addEventListener("click", dropDownClick);
        $(dropDowns[i].dataset.target).css({display: "none"});
    }
});

const dropDownClick = function(event){
    const data = event.target.dataset;
    const dropList = data.target;

    if(!dropList)
        return;

    $(dropList).toggle();
}
