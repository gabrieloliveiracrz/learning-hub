package main

import (
	"errors"
	"fmt"
)

func main() {
	var numero int = 100
	fmt.Println(numero)

	var err error = errors.New("Erro interno")
	fmt.Println(err)
}
