package main

import "fmt"

func main() {
	// i := 0

	// for i < 10 {
	// 	i++
	// 	fmt.Println("Incrementando i")
	// 	time.Sleep(time.Second)
	// }
	// fmt.Println(i)

	// for j := 0; j < 10; j++ {
	// 	fmt.Printf("Incrementando j - %d", j)
	// 	time.Sleep(time.Second)
	// }

	nomes := [3]string{"Joao", "Davi", "Lucas"}

	for index, nome := range nomes {
		fmt.Println(index, nome)
	}

	for index, letra := range "PALAVRA" {
		fmt.Println(index, string(letra))
	}

	usuario := map[string]string{
		"nome":      "Leonardo",
		"sobrenome": "Silva",
	}

	for chave, valor := range usuario {
		fmt.Println(chave, valor)
	}
}
