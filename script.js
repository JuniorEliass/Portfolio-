let displayy = document.querySelector(".menu__itens")

function clickMenu () {
    if(displayy.style.display == 'none'){
        displayy.style.display = 'flex'
    } else {
        displayy.style.display = 'none'
    }
}