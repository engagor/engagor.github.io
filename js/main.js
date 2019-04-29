$(document).on('ready', function() {
    var $navbar = $('.menu-toggle');
    var $navbarToggle = $('.navbar-toggle');
    var $dismiss = $('.dismiss');
    var $sidebar = $('.dev-sidebar-main');

    function handleNavbarToggleClick() {
        $navbar.toggleClass('expanded');
        $sidebar.toggleClass('nav-expanded');
        $dismiss.toggle();
    }

    $navbarToggle.on('click', handleNavbarToggleClick);
    $dismiss.on('click', handleNavbarToggleClick);
});
