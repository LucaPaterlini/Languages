package main

import "fmt"

func randNumber () *int {
	return nil
}
func main()  {
	a := 1
	b := randNumber()
	fmt.Printf("%d\n",a+*b)
	// Runtime panic nil pointer
}