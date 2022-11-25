import { home } from "./home";
import { contact } from "./contact";
import { menu } from './menu';
import './style.css';

const maincontainer = document.querySelector('#content');

const content = document.createElement('div');
content.classList.add('content');
maincontainer.appendChild(content);

/* header */
const header = document.createElement('div');
header.classList.add('header');
content.appendChild(header);

const logo = document.createElement('div');
logo.classList.add('logo');
header.appendChild(logo);

const headerText = document.createElement('div');
headerText.classList.add('header-text');
headerText.textContent = "Duesy's very real restaurant";
header.appendChild(headerText);

const logo2 = document.createElement('div');
logo2.classList.add('logo');
header.appendChild(logo2);

/* sidebar */
const sidebar = document.createElement('div');
sidebar.classList.add('sidebar');
content.appendChild(sidebar);

const homeButton = document.createElement('div');
homeButton.classList.add('homebutton');
homeButton.classList.add('button');
homeButton.textContent = "Home";
sidebar.appendChild(homeButton);

const menuButton = document.createElement('div');
menuButton.classList.add('menubutton');
menuButton.classList.add('button');
menuButton.textContent = "Menu";
sidebar.appendChild(menuButton);

const contactButton = document.createElement('div');
contactButton.classList.add('contactbutton');
contactButton.classList.add('button');
contactButton.textContent = "Contact";
sidebar.appendChild(contactButton);

home();
homeButton.classList.add('active')

homeButton.addEventListener('click', () => {
  homeButton.classList.add('active');
  contactButton.classList.remove('active');
  menuButton.classList.remove('active');
  content.removeChild(content.lastChild);
  home();
});
contactButton.addEventListener('click', () => {
  contactButton.classList.add('active');
  homeButton.classList.remove('active');
  menuButton.classList.remove('active');
  content.removeChild(content.lastChild);
  contact();
});
menuButton.addEventListener('click', () => {
  menuButton.classList.add('active');
  contactButton.classList.remove('active');
  homeButton.classList.remove('active');
  content.removeChild(content.lastChild);
  menu();
})