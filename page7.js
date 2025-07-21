// Montant initial vide
let amount = "";

// Ajouter un chiffre au montant
function addDigit(num) {
  if (amount.length < 6) { // Limite max 6 chiffres
    amount += num;
    updateDisplay();
  }
}

// Supprimer le dernier chiffre
function deleteDigit() {
  amount = amount.slice(0, -1);
  updateDisplay();
}

// Mettre à jour l'affichage
function updateDisplay() {
  document.getElementById("amount").innerText = amount || "0";
}

// Ajouter l'événement sur le bouton Send après que le DOM soit chargé
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("sendBtn").addEventListener("click", () => {
    if (amount === "" || amount === "0") {
      alert("Please enter an amount greater than 0.");
      return;
    }
    alert(`✅ Transferring $${amount} to Maya 👋`);
    amount = "";
    updateDisplay();
  });
});
