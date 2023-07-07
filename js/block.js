let currentTab = 0; // Current tab is set to be the first tab (0)
let tabs = [
    "inicio", "tema", "publico", "aulas", "extras", "material"
];

function setTab(id) {
    let child = document.querySelectorAll('.tabs .item')[id];
    if(!child) return;

    document.querySelectorAll('.tabs .item').forEach((item) => item.classList.remove('active'));
    child.classList.add('active');

    currentTab = id;
    updateEmbed();
    updateArrows();
}

function nextTab() {
    if(currentTab >= tabs.length - 1) currentTab = 0;
    else currentTab++;
    setTab(currentTab);
}

function prevTab() {
    if(currentTab <= 0) currentTab = tabs.length - 1;
    else currentTab--;
    setTab(currentTab);
}

function updateEmbed() {
    let embed = document.querySelector('.block #content');
    embed.src = `/tabs/${tabs[currentTab]}.html`;
}

window.addEventListener("message", receiveMessage, false);
  
function receiveMessage(event) {
    if(event.data == 'nextTab') nextTab();
    else if(event.data == 'prevTab') prevTab();
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