var a = prompt('Решаем квадратное уравнение, введите значение a(Ax^2+bx+c=0)', a);
var b = prompt('Решаем квадратное уравнение, введите значение b(ax^2+Bx+c=0)', b);
var c = prompt('Решаем квадратное уравнение, введите значение c(ax^2+bx+C=0)', c);
alert ('Итак, уравнение: '+a+'x^2+'+b+'x+'+c+'=0');

function calcD(a, b, c) {
    return b*b-4*a*c;
}

var discr = calcD(a, b, c);

if (discr > 0)    {
    let x1=(-b+Math.sqrt(discr))/2*a;
    let x2=(-b-Math.sqrt(discr))/(2*a);
    alert ('Корни квадратного уравнения: x1='+x1+', x2='+x2+'.');
}   else if (discr = 0) {
    let x = (-b)/(2*a);
    alert ('У этого квадратного уравнения только один корень: '+x+'.');
}   else if (discr < 0)  {
    alert ('Похоже, дискриминант меньше нуля, корней у этого уравнения нет.');
} else  {
    alert ('just');
};