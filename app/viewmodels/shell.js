define(['plugins/router'],
function(router) {
    return {
        router: router,
        activate: function () {
            router.map([
                            { route: '',     moduleId: 'viewmodels/home' },
                            { route: 'home', moduleId: 'viewmodels/home',}
                        ]).buildNavigationModel();
            return router.activate('home');
        }
    };
});
