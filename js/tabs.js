let currentTab = 0;

let tabs = [
    ['/data/board.png', 'Seu <b>Plano de Aulas</b> pronto em segundos!', 'Nunca foi tão fácil e preparar seus materiais educacionais. Aproveite recursos avançados, alinhamento com as diretrizes curriculares e adaptação às necessidades dos alunos. Simplifique sua rotina, economize tempo e entregue um ensino de qualidade com nossa plataforma de AI para planejamento de aulas.'],
    ['/data/board.png', 'Seu <b>Plano de Aulas</b> pronto em segundos!', 'Nunca foi tão fácil e preparar seus materiais educacionais. Aproveite recursos avançados, alinhamento com as diretrizes curriculares e adaptação às necessidades dos alunos. Simplifique sua rotina, economize tempo e entregue um ensino de qualidade com nossa plataforma de AI para planejamento de aulas.'],
    ['/data/board.png', 'Seu <b>Plano de Aulas</b> pronto em segundos!', 'Nunca foi tão fácil e preparar seus materiais educacionais. Aproveite recursos avançados, alinhamento com as diretrizes curriculares e adaptação às necessidades dos alunos. Simplifique sua rotina, economize tempo e entregue um ensino de qualidade com nossa plataforma de AI para planejamento de aulas.'],
    ['/data/board.png', 'Seu <b>Plano de Aulas</b> pronto em segundos!', 'Nunca foi tão fácil e preparar seus materiais educacionais. Aproveite recursos avançados, alinhamento com as diretrizes curriculares e adaptação às necessidades dos alunos. Simplifique sua rotina, economize tempo e entregue um ensino de qualidade com nossa plataforma de AI para planejamento de aulas.'],
    ['/data/board.png', 'Seu <b>Plano de Aulas</b> pronto em segundos!', 'Nunca foi tão fácil e preparar seus materiais educacionais. Aproveite recursos avançados, alinhamento com as diretrizes curriculares e adaptação às necessidades dos alunos. Simplifique sua rotina, economize tempo e entregue um ensino de qualidade com nossa plataforma de AI para planejamento de aulas.'],
]

function updateTab() {
    let image = document.querySelector('#features .description img');
    let title = document.querySelector('#features .description .data .top');
    let description = document.querySelector('#features .description .data .info-small');
    
    image.src = tabs[currentTab][0];
    title.innerHTML = tabs[currentTab][1];
    description.innerHTML = tabs[currentTab][2];

    let buttons = document.querySelectorAll('#features .list .item');
    for (let i = 0; i < buttons.length; i++) {
        if (i == currentTab) {
            buttons[i].classList.add('active');
        } else {
            buttons[i].classList.remove('active');
        }
    }
}

function setTab(tab) {
    currentTab = tab;
    updateTab();
}

updateTab();