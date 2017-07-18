package main

//import "fmt"
//func main()  {
//	sum := 0
//	for i:=0; i<10; i++ {sum += i}
//	fmt.Println(sum)
//}
//func main()  {sum := 1;for; sum<1000;{sum+=sum};fmt.Println(sum)}
//func main(){ sum:= 1; for sum < int(math.Pow(10,7)) { sum += 1 };fmt.Println(sum)
//func main(){for{}}

//import ("fmt";"math")
//func sqrt(x float64) string  {if x<0 { return sqrt(-x)+"i"};return fmt.Sprint(math.Sqrt(x))}
//func main(){fmt.Println(sqrt(2),sqrt(-4))}

//package main-
//import ("fmt";"math")
//
//func pow(x,n, lim float64) float64 {if v:=math.Pow(x,n);v<lim{return v};return lim}
//func main()  {fmt.Println(pow(3, 2, 10), pow(3,3,20))}

//import ("fmt";"math")
//
//func pow(x,n,lim float64)float64 {
//	if v := math.Pow(x,n); v<lim { return v}else {fmt.Printf("%g >= %g \n",v,lim)};return lim
//}

// 7 / 14

//const delta = 1e-6
//func Sqrt(x float64) float64  {z:= x;n := 0.0;for math.Abs(n-z)> delta {n, z = z, z -(z*z-x)/(2*z)};return z}
//func main()  {const x = 2;mine, theirs := Sqrt(x), math.Sqrt(x);fmt.Println(mine, theirs, mine-theirs)}

//func main()  {
//	fmt.Print("Go runs on ")
//	switch os:= runtime.GOOS; os {
//	case "darwin":fmt.Println("OS X.")
//	case "linux":fmt.Println("Linux. ")
//	default: fmt.Printf("%s. ",os)
//	}
//}
//
//import ("fmt";"time")
//
//func main()  {
//	fmt.Println("When's Saturday?")
//	today := time.Now().Weekday()
//	switch time.Saturday {
//	case today + 0: fmt.Println("Today.")
//	case today + 1: fmt.Println( "Tomorrow.")
//	case today + 2: fmt.Println( "In two days.")
//	default: fmt.Println("Too far away.")
//	}
//}

//import ("fmt";"time")
//
//func main()  {
//	t := time.Now()
//	switch  {
//	case t.Hour()<12: fmt.Println("Good morning!")
//	case t.Hour()<17: fmt.Println("Good afternoon.")
//	default: fmt.Println("Good evening.")
//	}
//}

//import "fmt"
//
//func main()  {
//	defer fmt.Println("world")
//	defer fmt.Println("world2")
//	fmt.Println("hello")
//}

import "fmt"
func main()  {fmt.Println("counting");for i:=0; i < 10; i++ {defer fmt.Println(i)};fmt.Println("done")}
