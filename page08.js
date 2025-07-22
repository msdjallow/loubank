const graphData = [
  { date: "Jun 13", amount: 60, highlight: false },
  { date: "Jun 14", amount: 70, highlight: false },
  { date: "Jun 15", amount: 80, highlight: true }, // bar jaune
  { date: "Jun 16", amount: 60, highlight: false },
  { date: "Jun 17", amount: 100, highlight: false },
  { date: "Jun 18", amount: 75, highlight: false },
  { date: "Jun 19", amount: 50, highlight: false },
];

const transactions = [
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/7/70/Webflow_logo.svg",
    name: "Webflow",
    desc: "Outcoming transfer",
    amount: 45
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/5/59/Sketch_Logo.svg",
    name: "Sketch",
    desc: "Annual withdrawal of funds",
    amount: 79
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Youtube%28amin%29.png",
    name: "Youtube",
    desc: "Annual withdrawal of funds",
    amount: 15
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Unsplash_logo.svg",
    name: "Unsplash",
    desc: "Annual withdrawal of funds",
    amount: 9
  }
];


function createBar({ date, amount, highlight }) {
  return `
    <div class="text-center ${highlight ? 'text-warning' : 'text-white-50'}">
      <div class="bar ${highlight ? 'bar-yellow' : ''}" style="height: ${amount}px;"></div>
      <small>${date}</small>
    </div>
  `;
}

function createTransaction({ icon, name, desc, amount }) {
  return `
    <div class="d-flex justify-content-between align-items-center mb-3">
      <div class="d-flex align-items-center gap-2">
        <img src="${icon}" alt="${name}" width="32" height="32">
        <div>
          <strong>${name}</strong><br>
          <small class="text-secondary">${desc}</small>
        </div>
      </div>
      <span class="text-danger fw-bold">- $${amount}</span>
    </div>
  `;
}

function renderBudget() {
  const graphContainer = document.getElementById('graph-container');
  const transactionList = document.getElementById('transaction-list');

  // Générer graph
  graphContainer.innerHTML = graphData.map(createBar).join('');

  // Générer transactions
  transactionList.innerHTML = transactions.map(createTransaction).join('');
}

// Appeler la fonction quand DOM est prêt
window.addEventListener('DOMContentLoaded', renderBudget);
