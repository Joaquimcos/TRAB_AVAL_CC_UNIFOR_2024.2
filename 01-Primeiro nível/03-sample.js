let data1 = "2024-01-01";
let data2 = "2024-12-31";

function calcDif(data1, data2) {
    const umDiaEmMs = 1000 * 60 * 60 * 24;
    const diferencaEmMs = new Date(data2) - new Date(data1);
    return Math.round(diferencaEmMs / umDiaEmMs);
}

let res = calcDif(data1, data2);
console.log(res); 
