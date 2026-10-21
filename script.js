(() => {
  'use strict';

  const navigation = document.querySelector('.site-nav');
  if (!navigation) return;

  const updateNavigation = () => {
    navigation.classList.toggle('is-scrolled', window.scrollY > 20);
  };

  window.addEventListener('scroll', updateNavigation, { passive: true });
  window.addEventListener('pageshow', updateNavigation);
  updateNavigation();
})();
