(() => {
  'use strict';

  // Read the release from the downloads so the badge follows future releases.
  const versionLabel = document.getElementById('game-version');
  const downloadLinks = Array.from(document.querySelectorAll('.download-btn'));
  const releasePattern = /^https:\/\/github\.com\/Pokemon-Platinum-Python-Version\/pokemon-platinum-python-version\.github\.io\/releases\/download\/(v[A-Za-z0-9][A-Za-z0-9._-]{0,79})\/PokemonPythonPlatinum-(windows-x86_64\.exe|linux-x86_64\.elf)$/;
  const releases = downloadLinks.map((link) => releasePattern.exec(link.href));
  if (versionLabel && releases.length === 2 && releases.every(Boolean)
      && releases[0][1] === releases[1][1] && releases[0][2] !== releases[1][2]) {
    versionLabel.textContent = `Version ${releases[0][1]}`;
    versionLabel.hidden = false;
  }

  const navigation = document.querySelector('.site-nav');
  if (!navigation) return;

  const updateNavigation = () => {
    navigation.classList.toggle('is-scrolled', window.scrollY > 20);
  };

  window.addEventListener('scroll', updateNavigation, { passive: true });
  window.addEventListener('pageshow', updateNavigation);
  updateNavigation();
})();
