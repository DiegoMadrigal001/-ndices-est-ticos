//inicio un arreglo desordenado
arregloprincipal = [3, 5, 1, 5]
//esta funcion deberia devolverme los indices del arreglo desordenado luego ser ordenado
function ordenarDosArrays(arreglo) {
    //este es el arreglo donde se almacenan los indices
    arreglodeIndices = []
    for (let i = 0; i < arreglo.length; i++) {
        //le doy exactamente el mismo numero de valores que mi arreglo principal
        arreglodeIndices.push(i)
    }
    //aqui intento ordenar ambos arreglos tomando como referencia mi arreglo principal 
    //que pasé como parametro de esta funcion
    //atravez del metodo de burbuja voy a repetir hasta que el aerreglo principal este ordenado
    while (equivalentes(arr) == false) {
        for (let k = 0; k < arreglo.length; k++) {
            alert("akjkj")
            if (arreglo[k] > arreglo[k + 1]) {
                //array 1
                //temporal soolo es para hacer el cambio de valores de k=n a k=n+1
                temporal = arreglo[k];
                arreglo[k] = arreglo[k + 1];
                arreglo[k + 1] = temporal;
                //array 2
                //hago exactamente lo mismo de arriba pero solo para mantener sus indices
                // en su correpondiente lugar haciendo referencia al lugar que tyendrian
                // junto con su variable de arriba
                temporal2 = arreglodeIndices[k]
                arreglodeIndices[k] = arreglodeIndices[k + 1]
                arreglodeIndices[k + 1] = temporal2

            } else if (equi(arreglo)) {//si el arreglo principal ya esta ordenado rompo el ciclo
                break
            }
        }
    }
    return arreglodeIndices //retorno el arreglo de los indices que deberian estar desordenados pero esto retorna 
    // retorna [0,1,2,3] :/
}
//llamo a la funcion principal y le paso el arreglo a ordenar <---------------------------------
console.log(ordenarDosArrays(arregloprincipal))
//esta funcion me dice si el arreglo ra esta ordenado o no
function equivalentes(params) {
    eso = false
    conttt = 0
    eso2 = params.sort()
    for (let g = 0; g < params.length; g++) {
        if (params[g] == eso2[g]) {
            conttt++
        }
    }
    if (conttt == params.length) {
        eso = true
    }
    return eso
}