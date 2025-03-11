// Získáme jazykové nastavení prohlížeče
const userLang = navigator.language || navigator.userLanguage;

// Pokud jazyk začíná "cs", provedeme redirect
if (userLang && (userLang === "cs" || userLang.startsWith("cs-"))) {
  window.location.href = "blz6bbgo.oast.cz"; // nahraďte URL podle potřeby
}
