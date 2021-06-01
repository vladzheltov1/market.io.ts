const chooseSize = function(elem){
    const choosen = document.querySelectorAll('.btn-chosen');

    if(choosen.length !== 0){
        $(choosen[0]).toggleClass('btn-chosen');
    }

    $(elem).toggleClass('btn-chosen');
}