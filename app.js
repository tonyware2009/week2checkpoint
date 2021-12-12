let helium = 0;

const clickUpgrades = {
  HeliumDrill: {
    price: 50,
    quantity: 0,
    multiplier: 1
  },
  HeliumDrillHardened: {
    price: 250,
    quantity: 0,
    multiplier: 2
  }
}

let automaticUpgrades = {
  HeliumGenerator: {
    price: 400,
    quantity: 0,
    multiplier: 40
  },
  SolarGenerator: {
    price: 1000,
    quantity: 0,
    multiplier: 100
  }
};

function harvest() {
  helium++
  helium += clickUpgrades.HeliumDrill.quantity * clickUpgrades.HeliumDrill.multiplier
  helium += clickUpgrades.HeliumDrillHardened.quantity * clickUpgrades.HeliumDrillHardened.multiplier

  // console.log(helium)
  update()

}

function update() {
  document.getElementById('heliumAmount').innerHTML = helium
}

function helDrill() {
  if (helium >= clickUpgrades.HeliumDrill.price) {
    clickUpgrades.HeliumDrill.quantity++
    helium -= clickUpgrades.HeliumDrill.price
    clickUpgrades.HeliumDrill.price *= 2
    update()
  }

  document.getElementById('heliumTool').innerHTML = clickUpgrades.HeliumDrill.quantity
  document.getElementById('hD').innerHTML = clickUpgrades.HeliumDrill.price *= price


}
function heliumHardened() {
  if (helium >= clickUpgrades.HeliumDrillHardened.price) {
    clickUpgrades.HeliumDrillHardened.quantity++
    helium -= clickUpgrades.HeliumDrillHardened.price
    clickUpgrades.HeliumDrillHardened.price *= 2

    update()
  }
  document.getElementById('heliumHD').innerHTML = clickUpgrades.HeliumDrillHardened.quantity
}



function helGen() {

  if (helium >= automaticUpgrades.HeliumGenerator.price) {
    automaticUpgrades.HeliumGenerator.quantity++
    helium -= automaticUpgrades.HeliumGenerator.price
    automaticUpgrades.HeliumGenerator.price *= 2
    update()
  }
  document.getElementById('genUp').innerHTML = automaticUpgrades.HeliumGenerator.quantity
}



function SolarG() {
  if (helium >= automaticUpgrades.SolarGenerator.price) {
    automaticUpgrades.SolarGenerator.quantity++
    helium -= automaticUpgrades.SolarGenerator.price
    automaticUpgrades.SolarGenerator.price *= 2
    update()
    document.getElementById('SgenUp').innerHTML = automaticUpgrades.SolarGenerator.quantity
  }
}
function collecautoupgrades() {
  helium += automaticUpgrades.HeliumGenerator.quantity * automaticUpgrades.HeliumGenerator.multiplier
  helium += automaticUpgrades.SolarGenerator.quantity * automaticUpgrades.SolarGenerator.multiplier
  console.log('collecting');
  update()
}
setInterval(collecautoupgrades, 3000)


document.getElementById('hhD').innerHTML

document.getElementById('hgen').innerHTML
document.getElementById('solarP').innerHTML