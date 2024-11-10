const menubtn = document.getElementById('menu-btn');
const mobilemenu = document.getElementById('mobile-menu');

menubtn.addEventListener('click', () => {
    menubtn.classList.toggle('open');
    mobilemenu.classList.toggle('flex');
    mobilemenu.classList.toggle('hidden');
});