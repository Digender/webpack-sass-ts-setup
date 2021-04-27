import './sass/main.scss';
import profile from './templates/profile.html';
import portfolio from './templates/portfolio.html';
import career from './templates/career.html';
import social from './templates/social.html';
import { bootstrap } from './ts/main';
window.addEventListener("DOMContentLoaded", function() {
    const template = {profile, portfolio, career, social};
    bootstrap(template);
}, false);
