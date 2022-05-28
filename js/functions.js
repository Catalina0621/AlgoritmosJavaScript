function saludo(){
    alert ("Hola mundo esto es JS")
}

function suma(){
    var n1;
    var n2;
    var Suma;

    alert ("Este sistema realiza una suma entre dos valores")

    n1 = parseInt (prompt("Por favor ingrese el primer valor"));
    n2 = parseInt (prompt("Por favor ingrese el segundo valor"));

    Suma = n1 + n2

    alert ("El resultado de la suma es: " + Suma);
}

function resta(){
    var n1;
    var n2;
    var Resta;

    alert ("Este sistema realiza una resta entre dos valores")

    n1 = parseInt (prompt("Por favor ingrese el primer valor"));
    n2 = parseInt (prompt("Por favor ingrese el segundo valor"));

    Resta = n1 - n2

    alert ("El resultado de la resta es: " + Resta);
}

function multiplicación(){
    var n1;
    var n2;
    var Multi;

    alert ("Este sistema realiza una multiplicación entre dos valores")

    n1 = parseInt (prompt("Por favor ingrese el primer valor"));
    n2 = parseInt (prompt("Por favor ingrese el segundo valor"));

    Multi = n1 * n2

    alert ("El resultado de la multiplicación es: " + Multi);
}

function división(){
    var n1;
    var n2;
    var Divi;

    alert ("Este sistema realiza una división entre dos valores")

    n1 = parseInt (prompt("Por favor ingrese el primer valor"));
    n2 = parseInt (prompt("Por favor ingrese el segundo valor"));

    Divi = n1 / n2

    alert ("El resultado de la división es: " + Divi);
}

function mayordosnum(){
    var n1;
    var n2;

    alert ("Este sistema mostrara el número mayor entre dos números")

    n1 = parseInt (prompt("Por favor ingrese el primer número"));
    n2 = parseInt (prompt("Por favor ingrese el segundo número"));

    if (n1==n2) { alert ("Los números son iguales")}
        else if (n1<n2) { alert (n2 + " es mayor que " + n1)}
            else { alert (n1 + " es mayor que " + n2)}

}

function menortresnum(){
    var n1;
    var n2;
    var n3;

    alert ("Este sistema mostrara el número menor entre tres números")

    n1 = parseInt (prompt("Por favor ingrese el primer número"));
    n2 = parseInt (prompt("Por favor ingrese el segundo número"));
    n3 = parseInt (prompt("Por favor ingrese el tercer número"));

    if (n1==n2 && n1==n3) { alert ("Los números son iguales")}
        else if (n1<n2 && n1<n3) { alert ("El número menor es " + n1)}
            else if (n2<n1 && n2<n3) { alert ("El número menor es " + n2)}
                else { alert ("El número menor es " + n3)}

}

function paroimpar(){
    var n1;

    alert ("Este sistema indicará si el número es par o impar")

    n1 = parseInt (prompt("Por favor ingrese un número"));
    
    if (n1 % 2 == 0) {alert ("El numero es par")}
        else { alert ("El numero es impar")}
}

function numcuadrado(){
    var n1;
    var c;

    alert ("Este sistema indicará el cuadrado de un número")

    n1 = parseInt (prompt("Por favor ingrese un número"));
    
    c = n1 * n1

    alert (n1 + " al cuadrado es " + c)
}

function areatriangulo(){
    var b;
    var h;
    var a;

    alert ("Este sistema indicará el area de un triangulo")

    b = parseInt (prompt("Por favor ingrese la medida de la base del triangulo en cm "));
    h = parseInt (prompt("Por favor ingrese la medida de la altura del triangulo en cm "));

    a = (b * h)/2

    alert ("El area del triangulo es " + a + " cm")
}

function mtracm(){
    var m;
    var cm;

    alert ("Este sistema convertira medidas de metros a centimetros")

    m = parseInt (prompt("Por favor ingrese la cantidad de metros que desea convertir "));

    cm = m * 100

    alert (m + " mtr equivalen a " + cm + " cm") 
}

function edad(){
    var año;
    var edad;

    alert ("Este sistema determina el año de nacimiento segun la edad")

    edad = parseInt (prompt("Por favor ingrese su edad actual"));

    año = 2022 - edad

    alert ("Señor usuario usted nacio en el año " + año) 
}

function inversion(){
    var c;
    var a;
    var g;
    var cg;

    alert ("Este sistema realizara la proyeccion de cuanto interes generara su inversion")

    c = parseInt (prompt("Por favor ingrese el capital que desea invertir "));
    a = parseInt (prompt("Por favor ingrese la cantidad de años en la que desea hacer su proyeccion "));

    a = a*12
    g = c*0.23
    g = g*a
    cg = g+c

    alert ("Señor usuario el interes que ganara en " + a + " meses sera $" + g +
            " y la ganancia total de su inversion sera de $" + cg)
}

function promedio(){
    var a;
    var b;
    var c;
    var d;
    var e;
    var f;

    alert ("Este sistema realizara el promedio de ingles")

    b = parseInt (prompt("Por favor ingrese su primera calificacion (1 a 5)"));
    c = parseInt (prompt("Por favor ingrese su segunda calificacion (1 a 5)"));
    d = parseInt (prompt("Por favor ingrese su tercera calificacion (1 a 5)"));
    e = parseInt (prompt("Por favor ingrese su cuarta calificacion (1 a 5)"));
    f = parseInt (prompt("Por favor ingrese su quinta calificacion (1 a 5)"));


    a = (b+c+d+e+f)/5

    alert ("Su promedio es " + a)

    if (a>=3) {alert ("Usted aprobo la materia")}
        else {alert ("Usted no aprobo la materia")}
}

function descuento(){
    var k;
    var d;
    var t;


    alert ("Este sistema calcula cual sera el descuento en la compra de manzanas")

    k = parseInt (prompt("Por favor ingrese los kilos de manzanas que compro"));

    if (k <= 2) {alert ("Su compra no tiene ningun descuento")}
        else if (k>=3 && k<=5) {d = (k*4500)*0.10
                             t = (k*4500)-d
                              alert ("El descuento aplicado a su compra es de $" + d + " y el valor final de su compra es $" + t)
                             }
            else if (k>=6 && k<=10) {d = (k*4500)*0.15
                                  t = (k*4500)-d
                                  alert ("El descuento aplicado a su compra es de $" + d + " y el valor final de su compra es $" + t)
                                }
               else {d = (k*4500)*0.20
                     t = (k*4500)-d
                alert ("El descuento aplicado a su compra es de $" + d + " y el valor final de su compra es $" + t)
                    }
}
