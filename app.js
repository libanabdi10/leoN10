const carSelect = document.getElementById("carSelect");
const carInfo = document.getElementById("carInfo");
const nameInput = document.getElementById("fullname");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const submitBtn = document.getElementById("submitBtn");

const cars = {
  lamborghini: { price: "$900,000", image: "lamborghini-aventador.jpg" },
  dodge: { price: "$100,000", image: "dodge-challenger.jpg" },
  ferrari: { price: "$200,000", image: "ferrari-F40.jpg" },
  rolls: { price: "$350,000", image: "rolls-royce.jpg" },
  mclaren: { price: "$200,000", image: "mclaren.jpg" },
  landcruiser: { price: "$57,200", image: "land-cruiser.jpg" }
};


carSelect.addEventListener("change", function () {
  const selectedCar = carSelect.value;

  if (selectedCar === "") {
    carInfo.innerHTML = "";
    return;
  }

  carInfo.innerHTML = `
    <img src="${cars[selectedCar].image}">
    <div class="price">Qiimaha: ${cars[selectedCar].price}</div>
  `;
});


nameInput.addEventListener("input", function () {
  this.value = this.value.replace(/[^a-zA-Z\s]/g, "");
});

phoneInput.addEventListener("input", function () {
  this.value = this.value.replace(/[^0-9]/g, "");
});


submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();
  const selectedCar = carSelect.value;

  if (!name || !email || !phone || !selectedCar) {
    alert("Fadlan buuxi dhammaan fields-ka oo dooro baabuur");
    return;
  }

  alert(
    `Waad ku mahadsan tahay ${name}!\nWaxaad dooratay ${
      carSelect.options[carSelect.selectedIndex].text
    }`
  );
});

