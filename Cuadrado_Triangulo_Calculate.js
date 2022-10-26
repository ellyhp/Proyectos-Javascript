//calcular Cuadrado no tan dinámico
const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado,
});

//calcular Triangulo no tan dinámico

const ladoTringulo1 = 6;
const ladoTringulo2 = 6;
const ladoTringuloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTringulo = ladoTringulo1 + ladoTringulo2 + ladoTringuloBase;
const areaTriangulo = (ladoTringuloBase * alturaTriangulo) / 2;

console.log({
    ladoTringulo1,
    ladoTringulo2,
    ladoTringuloBase,
    perimetroTringulo,
    areaTriangulo,
});

//calcular Triangulo dinámico


function CalcularTringuloA(ladoTrianguloA1, ladoTrianguloA2, ladoTrianguloABase, alturaTringuloA){
    return {
        perimetroTrianguloA: ladoTrianguloA1 + ladoTrianguloA2 + ladoTrianguloABase,
        areaTrianguloA: (ladoTrianguloABase * alturaTringuloA) / 2,
    };
}

CalcularTringuloA(6,6,4,5.5);