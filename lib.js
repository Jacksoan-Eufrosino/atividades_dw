const sum = (a, b) => {
  return a + b;
};

const calculadora = (val1, val2, operador) => {
  switch (operador) {
    case "+":
      return val1 + val2;
    case "-":
      return val1 - val2;
    case "*":
      return val1 * val2;
    case "/":
      return val1 / val2;
    default:
      return "Operador invalido";
  }
};

const verificaTriangulo = (lado1, lado2, lado3) => {
  if (lado1 > 0 && lado2 > 0 && lado3 > 0) {
    if (lado1 === lado2 && lado1 === lado3 && lado2 === lado3) {
      return "Todos os lados sao iguais. Temos um triangulo equilatero.";
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
      return "Dois lados sao iguais. Temos um triangulo isoceles.";
    } else {
      return "Triangulo comum.";
    }
  } else {
    return "[!] Erro: Verifique os lados de seu triangulo.";
  }
};

export { sum, calculadora, verificaTriangulo };
