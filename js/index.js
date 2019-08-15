const menu = require('./menu')();
const $ = require('jquery');

const { router, handleRouteChange, handleRouteStart }  = require('./router');

router.start(handleRouteStart);
router.subscribe(handleRouteChange);

const globalUi = () => {
    $(document).on('click', '.burger', menu.toggleMenu);
    $(document).on('menu-state-change', '.main-menu', function(event, isActive){
        (isActive ? menu.openMenu : menu.closeMenu)();
    });
}
$(document).ready(globalUi);
