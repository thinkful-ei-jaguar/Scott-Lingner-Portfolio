$('.splash-nav-toggle').click(event => {
  const sibling = $(event.target).siblings('.splash-nav-dropdown');
  const isHidden = sibling.hasClass('splash-nav-dropdown-hidden');
  // Hide all dropdowns
  $('.splash-nav-dropdown').addClass('splash-nav-dropdown-hidden');

  if (isHidden) {
    // Show the one we selected if it was hidden before
    sibling.removeClass('splash-nav-dropdown-hidden');
  }
});
$('.hamburger').click(event => {
  $('.splash-nav-desktop-grid').toggleClass('splash-nav-desktop-grid-closed');
});
