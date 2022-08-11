let valores = [8, 1, 3, 2, 5, 7];

for (let p = 0; p < valores.length; p++){
    console.log(` A posição ${p} tem o valor ${valores[p]}`);
}

for (let p in valores) {
    console.log(valores[p]);
}