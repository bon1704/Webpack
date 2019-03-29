$(document).ready(function() {
    var menuLink = $('.burger');
    var menu = $('.menunav');
    var close = $('.btn-close');

    menuLink.click(function() {
        menu.toggleClass('menu_active');
    });

    close.click(function() {
        menu.toggleClass('menu_active');
    });
});