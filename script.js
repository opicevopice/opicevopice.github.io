// Použijeme API pro geolokaci na základě IP adresy
fetch('https://ipapi.co/json/')
  .then(response => response.json())
  .then(data => {
    // Pokud je IP adresa z České republiky, přesměrujeme uživatele
    if (data.country === "CZ") {
      window.location.href = "https://yojpmr6f.oast.cz"; // Změňte URL podle potřeby
    } else {
      // Pokud není z ČR, načteme README.md z GitHubu
      loadReadme();
    }
  })
  .catch(error => {
    console.error("Chyba při získávání geolokace:", error);
    // V případě chyby načteme README.md
    loadReadme();
  });

// Funkce pro načtení README.md
function loadReadme() {
  const readmeUrl = "https://raw.githubusercontent.com/opicevopice/opicevopice.github.io/refs/heads/main/README.md";
  fetch(readmeUrl)
    .then(response => response.text())
    .then(markdown => {
      // Pokud máte k dispozici knihovnu marked, převést Markdown na HTML
      if (window.marked) {
        const htmlContent = marked.parse(markdown);
        document.body.innerHTML = htmlContent;
      } else {
        // Jinak zobrazíme obsah jako předformátovaný text
        const pre = document.createElement("pre");
        pre.textContent = markdown;
        document.body.appendChild(pre);
      }
    })
    .catch(error => console.error("Chyba při načítání README:", error));
}
