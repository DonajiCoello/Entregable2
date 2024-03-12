
function tuArregloSuma(array1){const valorInicial = 0;
    const sumaArray = array1.reduce(
      (a, b) => a + b,
      valorInicial);
    console.log(sumaArray);
    }
    
    function tuArregloMulti(array2){const valorInicial = 1;
        const multiArray = array2.reduce(
          (a, b) => a * b,
          valorInicial);
        console.log(multiArray);
        }

tuArregloSuma([2,3,7]);

tuArregloMulti([2,3,7]);