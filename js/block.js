let currentTab = 0; // Current tab is set to be the first tab (0)
let targetTab = 0;
let values = {};
let tabs = [
    "inicio", "tema", "publico", "aulas", "extras", "material"
];

function setTab(id) {
    let embed = document.querySelector('.block #content');
    embed.contentWindow.postMessage('getValue', '*');
    targetTab = id;
}

function nextTab() {
    if(currentTab == tabs.length - 1) {
        alert(`
        ${JSON.stringify(values).replace(/,/g, ',\n')}
        `)
        return;
    }

    let id = currentTab;
    if(id >= tabs.length - 1) id = 0;
    else id++;
    setTab(id);
}

function prevTab() {
    let id = currentTab;
    if(id <= 0) id = tabs.length - 1;
    else id--;
    setTab(id);
}

function updateEmbed() {
    let embed = document.querySelector('.block #content');
    embed.src = `/tabs/${tabs[currentTab]}.html`;
}

window.addEventListener("message", receiveMessage, false);

function receiveMessage(event) {
    if(event.data == 'nextTab') nextTab();
    else if(event.data == 'prevTab') prevTab();
    else if(event.data == 'getValue') {
        let embed = document.querySelector('.block #content');
        let value = values[currentTab];
        value = value ? (Array.isArray(value) ? value.join('|') : value) : '';
        embed.contentWindow.postMessage('setValue|' + value);
    } else if(event.data.startsWith('saveValue')) {
        let value = event.data.slice(10);
        value = value.split('|');
        values[currentTab] = value;

        let child = document.querySelectorAll('.tabs .item')[targetTab];
        if(!child) return;

        document.querySelectorAll('.tabs .item').forEach((item) => item.classList.remove('active'));
        child.classList.add('active');

        currentTab = targetTab;
        updateEmbed();
        updateArrows();
    }
}

function updateArrows() {
    let arrowLeft = document.querySelectorAll('.controls img')[0];
    let arrowRight = document.querySelectorAll('.controls img')[1];

    let arrowLeftActive = currentTab > 0;
    let arrowRightActive = currentTab < tabs.length - 1 && currentTab != 0;

    if(arrowLeftActive) arrowLeft.classList.add('active');
    else arrowLeft.classList.remove('active');

    if(arrowRightActive) arrowRight.classList.add('active');
    else arrowRight.classList.remove('active');
}

updateEmbed();
updateArrows();