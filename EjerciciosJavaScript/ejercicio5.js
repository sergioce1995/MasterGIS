const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
let mesesLargos = [];

for (let mes of meses) {
    if (mes.length > 7) {
        mesesLargos.push(mes.toUpperCase());
    }
}

console.log(mesesLargos);
console.log("Hay " + meses.length + " meses en total");
