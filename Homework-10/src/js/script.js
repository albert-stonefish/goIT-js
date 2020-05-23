'use strict';

import menuItems from '../menu.json';
import menuTemplate from '../template/menu-template.hbs';

const refs = {
  body: document.querySelector('body'),
  themeSwitch: document.querySelector('input.js-switch-input'),
  menu: document.querySelector('ul.js-menu'),
};

const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

let bckgrndTheme = localStorage.getItem('bckgrndTheme');

if (bckgrndTheme === null) {
  bckgrndTheme = theme.LIGHT;
}
refs.body.classList.add(bckgrndTheme);

if (bckgrndTheme === theme.DARK) {
  refs.themeSwitch.setAttribute('checked', 'checked');
}

const toggleTheme = function () {
  if (refs.body.classList.contains(theme.LIGHT)) {
    refs.body.classList.replace(theme.LIGHT, theme.DARK);
    localStorage.setItem('bckgrndTheme', theme.DARK);
  } else {
    refs.body.classList.replace(theme.DARK, theme.LIGHT);
    localStorage.setItem('bckgrndTheme', theme.LIGHT);
  }
};

refs.themeSwitch.addEventListener('change', toggleTheme);

menuItems.forEach(item => {
  let itemHTML = menuTemplate(item);
  console.log(itemHTML);
  refs.menu.insertAdjacentHTML('beforeend', itemHTML);
});
