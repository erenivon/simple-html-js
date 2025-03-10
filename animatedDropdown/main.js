
let desc = document.getElementById('desc')


function arrowclick(index) {
    const desc = document.getElementById('desc' + index); 
    const arrow = document.getElementById('arrow' + index);

    if (desc.style.maxHeight === desc.scrollHeight + "px") {
        desc.style.maxHeight = "0";
        arrow.style.transform = 'rotate(0)';

    } else {
        desc.style.display = "block";
        desc.style.maxHeight = desc.scrollHeight + "px";
        arrow.style.transform = 'rotate(180deg)';
    }
}