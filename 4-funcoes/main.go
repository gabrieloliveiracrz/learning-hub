package main

import "fmt"

func somar(n1 int8, n2 int8) int8 {
	return n1 + n2
}

func calculosMatematicos(n1, n2 int8) (int8, int8) {
	soma := n1 + n2
	subtracao := n1 - n2

	return soma, subtracao
}

func main() {
	soma := somar(10, 5)
	println(soma)

	var f = func(txt string) string {
		fmt.Println(txt)
		return txt + " adicionado"
	}

	resultado := f("Texto da função 1")
	fmt.Println(resultado)

	// resultadosSoma, resultadoSubtracao := calculosMatematicos(10, 15)
	resultadosSoma, _ := calculosMatematicos(10, 15)
	fmt.Println(resultadosSoma)
}
