function fetchData() {
  let dateInput = document.getElementById("dateInput").value;
  if (!dateInput) {
    alert("Please select a date!");
    return;
  }

  fetch("https://api.rootnet.in/covid19-in/stats/history")
    .then(response => response.json())
    .then(data => {
      let selectedDateData = data.data.find(entry => entry.day === dateInput);

      if (!selectedDateData) {
        alert("No data found for the selected date!");
        return;
      }

      displayData(selectedDateData);
    })
    .catch(error => {
      console.error("Error fetching data:", error);
      alert("Something went wrong while fetching data.");
    });
}

function displayData(data) {
  let cardsContainer = document.getElementById("cardsContainer");
  cardsContainer.innerHTML = "";

  data.regional.forEach(state => {
    let card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${state.loc}</h3>
      <p><strong>Total Cases:</strong> ${state.totalConfirmed}</p>
      <p><strong>Recovered:</strong> ${state.discharged}</p>
      <p><strong>Deaths:</strong> ${state.deaths}</p>
    `;

    cardsContainer.appendChild(card);
  });
}
