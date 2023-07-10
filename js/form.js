function scrollToForm(id) {
    document.getElementById('forms').scrollTo({
        top: document.getElementById('forms').children[id - 1].offsetTop,
        behavior: 'smooth'
    });
}

function updateActiveForm() {
    let formTabs = document.querySelector('.tabs').children;
    let forms = document.getElementById('forms').children;

    for (let i = 0; i < formTabs.length; i++) {
        let form = forms[i];
        if(!form) continue;
        let input = form.querySelector('input') || form.querySelector('textarea');
        let focused = document.activeElement === input;

        if (focused) {
            formTabs[i].classList.add('active');
        } else {
            formTabs[i].classList.remove('active');
        }
    }
}