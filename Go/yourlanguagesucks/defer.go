package main

import "fmt"

func dogma() (i int) {
	defer func(){i++}()
	return 2+2
}
func main()  {
	fmt.Println(dogma())
}