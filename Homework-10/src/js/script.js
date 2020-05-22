'use strict';

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

// import source from '../menu.json';
// const source = JSON.parse(importedSource);
// console.log(source);

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

// const Handlebars = require('handlebars');
// const template = Handlebars.compile("Name: {{name}}");
// console.log(template({ name: "Nils" }));

// import menuTemplate from "../template/menu-template.hbs";
// console.log(menuTemplate);

// console.log(menuTemplate);

// const template = Handlebars;

// refs.menu.innerHTML = template(source);
