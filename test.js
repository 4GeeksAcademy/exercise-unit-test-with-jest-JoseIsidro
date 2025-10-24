const { fromEuroToDollar, fromYenToPound, fromDollarToYen } = require('./app.js');

test("One euro should be 1.07 dollars", function () {
    // Importo la funcion desde app.js

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
});



test("1 dolares deben ser 146.26168224299064 yenes ", function () {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');
    // Uso la función como debe ser usada
    const yenes = fromDollarToYen(1);

    // Si 1 euro son 1.07 dólares, entonces 10 euros debe ser (10 / 1.07)
    const euros = 1 / 1.07;
    // si un euro son 156.5 yenes, entonces euros debe ser (1o * 156.5)
    const expectativa = euros * 156.5
    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(1)).toBe(146.26168224299064);
});

test("1000 yen debe ser igual a 5.559 libras ", () => {
    // importar la funcion 
    const { fromYenToPound } = require('./app.js')
    //uso de la funcion 
    const libras = fromYenToPound(1000)
    //si 1 euro son 156.5 yenes entonces se divide 1000 yenes entre 156.5 
    const euros = 1000 / 156.5;
    //si 1 euro son 0.87 libras entonces ahora se multiplica la variable euros * 0.87libras
    const espectativa = euros * 0.87;
    
    expect(fromYenToPound(1000)).toBe(5.559105431309905);
})