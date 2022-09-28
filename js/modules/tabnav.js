export default function initTabNav() {
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
    const tabContent = document.querySelectorAll('[data-tab="content"] section');


    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('ativo');

        function activeTable(index) {
            const valueDataset = tabContent[index].dataset.anime;
            tabContent.forEach((section) => {
                section.classList.remove('ativo', valueDataset);
            })

            tabContent[index].classList.add('ativo', valueDataset);
            console.log(tabContent[index]);
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTable(index);
            })
        })
    }
}
initTabNav();