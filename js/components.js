// Function to load an external HTML file into an element
function loadComponent(containerId, filePath) {
  fetch(filePath)
      .then(response => response.text())
      .then(data => {
          document.getElementById(containerId).innerHTML = data;
      })
      .catch(error => console.error(`Error loading ${filePath}:`, error));
}

// Load navbar and footer
document.addEventListener("DOMContentLoaded", () => {
  loadComponent("navbar-container", "../components/header.html");
  loadComponent("footer-container", "../components/footer.html");
});
