// Získáme jazykové nastavení prohlížeče
const userLang = navigator.language || navigator.userLanguage;

// Pokud jazyk začíná "cs", provedeme redirect
if (userLang && (userLang === "cs" || userLang.startsWith("cs-"))) {
  window.location.href = "https://example.com/cs"; // nahraďte URL podle potřeby
}
