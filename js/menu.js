const $ = require('jquery');

module.exports = function(){

    function isBurgerActive(){
        return $('.burger').hasClass('active');
    }

    function toggleMenu(){
        let $this = $(this);
        $this.toggleClass('active');
        $('.main-menu').trigger('menu-state-change', $this.hasClass('active'));
    }

    function openMenu(){
        let $this = $('.main-menu');
        $this.removeAttr('hidden')
        setTimeout(function(){
            $this.addClass('active');
        }, 50);
    }

    function closeMenu(){
        $('.main-menu').removeClass('active');
        $('.main-menu').attr('hidden', true);
        if(isBurgerActive()){
            $('.burger').removeClass('active');
        }  
    }

    return { toggleMenu, openMenu, closeMenu };
}   