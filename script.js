const sections = [...document.querySelectorAll("main section")];
const navLinks = [...document.querySelectorAll(".site-nav a")];

const updateActiveNav = () => {
  const current = sections.reduce((closest, section) => {
    const distance = Math.abs(section.getBoundingClientRect().top - 90);
    return distance < closest.distance ? { id: section.id, distance } : closest;
  }, { id: "about", distance: Infinity });
  navLinks.forEach((link) => link.toggleAttribute("aria-current", link.getAttribute("href") === `#${current.id}`));
  document.body.dataset.section = current.id;
};

window.addEventListener("scroll", updateActiveNav, { passive: true });
updateActiveNav();
