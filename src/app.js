

window.onload = function() {
  // Palos y valores
  const suits = ["heart", "spade", "club", "diamond"];
  const suitSymbols = {
    heart: "♥",
    spade: "♠",
    club: "♣",
    diamond: "♦"
  };
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  // Selección aleatoria
  let randomSuit = suits[Math.floor(Math.random() * suits.length)];
  let randomValue = values[Math.floor(Math.random() * values.length)];

  // Construir carta
  const card = document.getElementById("card");
  card.className = `card ${randomSuit}`; // aplica estilo según palo
  card.innerHTML = `
    <div class="top">${suitSymbols[randomSuit]}</div>
    <div class="center">${randomValue}</div>
    <div class="bottom">${suitSymbols[randomSuit]}</div>
  `;
};