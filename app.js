let helium = 0;

const clickUpgrades = {
  HeliumDrill: {
    price: 50,
    quantity: 0,
    multiplier: 1
  },
  HeliumDrillHardened: {
    price: 100,
    quantity: 0,
    multiplier: 2
  }
}

let automaticUpgrades = {
  HeliumGenerator: {
    price: 400,
    quantity: 0,
    multiplier: 20
  },
  SolarGenerator: {
    price: 1000,
    quantity: 0,
    multiplier: 4
  }
};

function harvest() {
  helium++
  // console.log(helium)
  update()
}

function update() {
  document.getElementById('heliumAmount').innerHTML = helium
}