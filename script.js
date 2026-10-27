const searchForm = document.querySelector("#event-search");
const searchInput = document.querySelector("#event-search-input");
const searchStatus = document.querySelector("#event-search-status");
const eventCards = [...document.querySelectorAll(".grid article")];

if (!searchForm || !searchInput || !searchStatus || eventCards.length === 0) {
  throw new Error("Etkinlik araması için gerekli form, durum alanı veya kartlar bulunamadı.");
}

const normalize = (value) => value.trim().toLocaleLowerCase("tr");

function filterEvents() {
  const query = normalize(searchInput.value);
  let visibleCount = 0;

  for (const card of eventCards) {
    const title = card.querySelector("h2")?.textContent ?? "";
    const isMatch = normalize(title).includes(query);
    card.hidden = !isMatch;

    if (isMatch) {
      visibleCount += 1;
    }
  }

  if (visibleCount === 0) {
    searchStatus.textContent = `0 etkinlik gösteriliyor. “${searchInput.value.trim()}” ile eşleşen etkinlik bulunamadı.`;
    return;
  }

  searchStatus.textContent = `${visibleCount} etkinlik gösteriliyor.`;
}

searchInput.addEventListener("input", filterEvents);
searchForm.addEventListener("reset", () => {
  requestAnimationFrame(filterEvents);
});
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
});

filterEvents();
