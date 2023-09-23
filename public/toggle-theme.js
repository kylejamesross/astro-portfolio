const rootElement = document.documentElement; // html element

function toggleTheme() {
  const currentTheme = rootElement.getAttribute('data-theme');
  const newTheme = currentTheme === "dracula" ? "corporate" : "dracula";
  rootElement.setAttribute('data-theme', newTheme);
  localStorage.setItem("theme", newTheme);
}

document.onreadystatechange = () => {
  const toggleButton = document.getElementById('theme-toggle-btn');
  toggleButton.addEventListener('click', toggleTheme);

  const currentTheme = localStorage.getItem("theme");

  /* Set data-theme based on saved theme */
  if (currentTheme == "dracula") {
    rootElement.setAttribute('data-theme', 'dracula');
  } else if (currentTheme == "corporate") {
    rootElement.setAttribute('data-theme', 'corporate');
  }
}
