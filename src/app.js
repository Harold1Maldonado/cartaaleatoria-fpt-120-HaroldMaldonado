

window.onload = function() {
 
  const suits = ["heart", "spade", "club", "diamond"];
  const suitSymbols = {
    heart: "♥",
    spade: "♠",
    club: "♣",
    diamond: "♦"
  };
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

 
  let randomSuit = suits[Math.floor(Math.random() * suits.length)];
  let randomValue = values[Math.floor(Math.random() * values.length)];

  const card = document.getElementById("randomCard");
  card.className = `card ${randomSuit}`; 
  card.innerHTML = `
    <div class="top">${suitSymbols[randomSuit]}</div>
    <div class="center">${randomValue}</div>
    <div class="bottom">${suitSymbols[randomSuit]}</div>
  `;
};

document.getElementById("refrescarPag").addEventListener("click", function() {
  location.reload(); // refresca la página
});