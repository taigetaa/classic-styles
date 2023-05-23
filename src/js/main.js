import "./slider";
import modals from './modules/modals';
import initTabs from './modules/initTabs';

window.addEventListener('DOMContentLoaded', () => {
    modals();
    initTabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    initTabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
});