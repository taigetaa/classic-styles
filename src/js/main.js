import "./slider";
import modals from './modules/modals';
import initTabs from './modules/initTabs';

window.addEventListener('DOMContentLoaded', () => {
    modals();
    initTabs({
        headerSelector: '.glazing_slider',
        tabSelector: '.glazing_block',
        contentSelector: '.glazing_content',
        activeClass: 'active'
    });
    initTabs({
        headerSelector: '.decoration_slider',
        tabSelector: '.no_click',
        contentSelector: '.decoration_content > div > div',
        activeClass: 'after_click'
    });
});