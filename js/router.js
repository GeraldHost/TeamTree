const createRouter = require('router5').default;
const { constants } = require('router5');
const browserPlugin = require('router5-plugin-browser');
const Mustache = require('mustache');
const $ = require('jquery');
const menu = require('./menu')();

const routes = require('./routes');
const views = require('./views');

const router = createRouter(routes, { allowNotFound: true });
router.usePlugin(browserPlugin());

function mask() {
    const $loading = $(`
        <div class="loading-page">
            <div class="spinner">
                <div class="icon"></div>
            </div>
        </div>
    `);

    const hasMask = () => {
        return !!$('.loading-page');
    }

    const show = function () {
        if (!hasMask()) {
            $('#root').append($loading);
        }
    }

    const hide = function () {
        if (hasMask()) {
            $loading.remove();
        }
    }

    return { show, hide };
}

const beforeRoute = () => {
    mask().show();
}

const afterRoute = () => {
    menu.closeMenu();
    window.scrollTo(0, 0);
    mask().hide();
}

const handleRouteChange = ({ route, previousRoute }) => {
    beforeRoute();
    if (route.name === constants.UNKNOWN_ROUTE) {
        $.get(`views/error.mst.html`, (template) => {
            const rendered = Mustache.render(template, {});
            $('#root').html(rendered);
        });
    } else {
        $.get(`views/${route.name}.mst.html`, (template) => {
            const rendered = Mustache.render(template, views[route.name]);
            let section = route.meta.options ? route.meta.options.hash : false;
            let $rendered = $(rendered);
            $('#root').html($rendered);
            if(section){
                let top = $rendered.find(section).offset().top;
                $('html, body').animate({scrollTop: top}, 200, 'linear');
            }
        });
    }
    afterRoute();
}

const handleRouteStart = (err, state) => {
    // add navigation listener
    $(document).on('click', 'a', function (event) {
        event.preventDefault();
        let currentRoute = window.location.pathname.replace('/', '');
        let nextRouteHash = this.hash;
        let nextRoute = this.pathname.replace('/', '');
        navigate(router, currentRoute, nextRoute, nextRouteHash || false);
    });
    return handleRouteChange({ route: state, previousRoute: null })
};

const handleNavigationError = (err, nextRoute) => {
    switch (err.code) {
        case 'SAME_STATES':
            return afterRoute();
        case 'ROUTE_NOT_FOUND':
            // redirect to route
            window.location.href = nextRoute;
            break;
        default:
    }
}

const navigate = (router, currentRoute, nextRoute, hash = false) => {
    if (currentRoute === nextRoute) {
        return afterRoute();
    }
    router.navigate(nextRoute, {}, { hash }, function (err, state) {
        if (err) handleNavigationError(err, nextRoute);
    });
}

const navigateToSection = (section) => {
    let $section;
    if ($section = $(`${section}`)) {
        let top = $section.offset().top;
        $('html, body').animate({ scrollTo: top }, 100, 'linear');
    }
}
module.exports = { router, handleRouteChange, handleRouteStart };