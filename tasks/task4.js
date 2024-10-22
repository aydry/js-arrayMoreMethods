function getMostFuelEfficientCars(cars, brand) {
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].fuelConsumption >= 6) {
      return [];
    }
  }
  const filteredCars = [];
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].brand === brand) {
      filteredCars.push(cars[i]);
    }
  }
  for (let i = 0; i < filteredCars.length - 1; i++) {
    for (let j = i + 1; j < filteredCars.length; j++) {
      if (filteredCars[i].fuelConsumption > filteredCars[j].fuelConsumption) {
        const temp = filteredCars[i];
        filteredCars[i] = filteredCars[j];
        filteredCars[j] = temp;
      }
    }
  }
  return filteredCars;
}
const cars = [
  { brand: 'Toyota', model: 'Corolla', fuelConsumption: 5.2 },
  { brand: 'Honda', model: 'Civic', fuelConsumption: 5.9 },
  { brand: 'Toyota', model: 'Camry', fuelConsumption: 5.5 },
  { brand: 'Ford', model: 'Focus', fuelConsumption: 6.1 },
  { brand: 'Honda', model: 'Accord', fuelConsumption: 5.8 },
  { brand: 'Audi', model: 'A3', fuelConsumption: 5.4 },  
  { brand: 'Audi', model: 'Q5', fuelConsumption: 5.7 },  
  { brand: 'Dodge', model: 'Charger', fuelConsumption: 5.8 }, 
  { brand: 'Dodge', model: 'Durango', fuelConsumption: 5.6 }, 
];
console.log(getMostFuelEfficientCars(cars, 'Toyota')); 
console.log(getMostFuelEfficientCars(cars, 'Honda')); 
console.log(getMostFuelEfficientCars(cars, 'Audi'));  
console.log(getMostFuelEfficientCars(cars, 'Dodge'));  
console.log(getMostFuelEfficientCars(cars, 'Ford')); 
module.exports = getMostFuelEfficientCars;