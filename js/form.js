function scrollToForm(id) {
    document.getElementById('forms').scrollTo({
        top: document.getElementById('forms').children[id - 1].offsetTop,
        behavior: 'smooth'
    });
}