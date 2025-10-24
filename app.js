
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
const fromDollarToYen = function(dolares){
    let euros = dolares / 1.07
    let eurosAYenes = euros * 156.5;
    return eurosAYenes
};
console.log(fromDollarToYen(1))

const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}


const fromYenToPound = function(yenes){
    let euros = yenes / oneEuroIs.JPY;
    return euros *oneEuroIs.GBP
}

console.log(fromYenToPound(1000))
module.exports = { fromYenToPound , fromDollarToYen ,fromEuroToDollar};

