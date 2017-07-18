package main

import "fmt"

func foo1(i bool)(r int){if i{r:= 12;fmt.Println(r)};return}
func foo2(i bool)(r int){if i{r=12;fmt.Println(r);return};return}
func foo3(i bool)(r int){if i{r:=12;fmt.Println(r);return };return }
func main(){
	print(foo1(false));
	print(foo2(false));
	print(foo3(false));
}
// nice to know, niente robe strane con scherzi di scope e rinomine