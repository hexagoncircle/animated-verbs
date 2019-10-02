Splitting();

const verbs = document.getElementById('verb-list');
const menu = document.getElementById('verb-menu');
const menuToggle = document.getElementById('menu-toggle');
const activeClass = 'menu-active';
let menuItems = [];

const setMenuToggleText = () => {
  if (!document.body.classList.contains(activeClass)) {
    menuToggle.textContent = 'View all';
  } else {
    menuToggle.textContent = '× Close';
  }
}

const handleMenuItemClick = (item) => {
  item.addEventListener('click', () => {
    document.body.classList.remove(activeClass);
    setMenuToggleText();
  });
}

const addMenuItemAction = (menu) => {
  [...menu.children].forEach(item => handleMenuItemClick(item));
}

const setupHeadlineRefs = (headlines) => {
  [...headlines].forEach(headline => {
    headline.id = headline.textContent;
    headline.tabIndex = 0;
    menuItems.push(headline.textContent);
  });
};

const buildMenu = (menu) => {
  menuItems.forEach(item => {
    const el = document.createElement('li');
    const html = `<a class="menu-item-link" href="#${item}">${item}</a>`;

    el.className = 'menu-item';
    el.innerHTML = html;
    menu.appendChild(el);
  });
};

menuToggle.addEventListener('click', (e) => {
  document.body.classList.toggle(activeClass);
  setMenuToggleText();
});

setupHeadlineRefs(verbs.children);
buildMenu(menu);
addMenuItemAction(menu);