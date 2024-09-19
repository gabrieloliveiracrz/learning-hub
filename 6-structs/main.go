package main

import "fmt"

type usuario struct {
	nome     string
	idade    int8
	endereco endereco
}

type endereco struct {
	logradouro string
	numero     uint8
}

func main() {
	fmt.Println("Arquivo structs")

	var u usuario
	u.nome = "Gabriel"
	u.idade = 26
	fmt.Println(u)

	enderecoExemplo := endereco{"Rua dos Bobos", 20}

	u2 := usuario{
		nome:     "Pedro",
		idade:    21,
		endereco: enderecoExemplo,
	}

	fmt.Println(u2)
}
