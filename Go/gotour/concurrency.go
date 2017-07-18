//package main
//import ("fmt";"time")
//func say(s string){
//	for i:=0;i<5;i++{time.Sleep(100 *time.Millisecond);fmt.Println(s)}
//}
//func main(){go say("world");say("hello")}

//package main
//import "fmt"
//func sum(s []int, c chan int)  {sum := 0;for _,v := range s{sum += v};c <-sum}
//
//func main()  {
//	s := []int {7,2,8,-9,4,0};
//	c := make(chan int)
//
//	go sum(s[:len(s)/2],c)
//	go sum(s[len(s)/2:],c)
//	x, y := <-c, <-c
//
//	fmt.Println(x,y,x+y)
//}
//
//package main;import "fmt"
//func main()  { ch := make(chan int,2)
//	ch <-1
//	ch <-2
//	fmt.Println(<-ch)
//	fmt.Println(<-ch)
//}
//package main;import("fmt")
//func fibonacci(n int, c chan int){
//	x,y := 0,1
//	for i := 0;i<n;i++{c<-x;x,y = y,x+y}
//	close(c)
//}
//
//func main(){
//	c := make(chan int,10)
//	go fibonacci(cap(c),c)
//	for i:= range c{ fmt.Println(i)}
//}
//
//package main;import "fmt"
//func fibonacci(c, quit chan int){
//	x,y := 0, 1
//	for {
//		select {
//		case c <- x: x,y = y, x+y
//		case <-quit: fmt.Println("quit");return}
//	}
//}
//
//func main(){
//	c := make(chan int)
//	quit := make(chan int)
//	go func(){
//		for i := 0; i<10;i++{fmt.Println(<-c)}
//		quit <- 0
//	}();
//	fibonacci(c, quit)
//}

//package main;import ("fmt";"time")
//func main(){
//	tick := time.Tick(1000 * time.Millisecond)
//	boom := time.After(5000 *time.Millisecond)
//	for {
//		select {
//		case <-tick: fmt.Println("tick.")
//		case <-boom: fmt.Println("BOOM!");return
//		default:
//			fmt.Println("    .")
//			time.Sleep(500 * time.Millisecond)
//		}
//	}
//}

//
//package main
//import ("golang.org/x/tour/tree";"fmt")
//func Walk(t *tree.Tree, ch chan int){_walk(t,ch);close(ch)}
//func _walk(t *tree.Tree, ch chan int){
//	if t!=nil{_walk(t.Left,ch);ch <- t.Value;_walk(t.Right, ch)}
//}
//func Same(t1, t2 *tree.Tree)bool{
//	ch1 := make(chan int);ch2 := make(chan int);go Walk(t1,ch1);go Walk(t2, ch2)
//	for i:= range ch1 {if i != <-ch2 { return false}};return true
//}
//
//func main() {
//	//tree.New(2)
//	ch := make(chan int);go Walk(tree.New(1), ch)
//	for v := range ch {fmt.Print(v)}
//	fmt.Println();fmt.Println(Same(tree.New(1), tree.New(1)));fmt.Println(Same(tree.New(1), tree.New(2)))
//}

package main

import ("fmt";"sync")
type SafeCounter struct {v map[string]int;mux sync.Mutex;}
func (c *SafeCounter) Inc(key string,wg *sync.WaitGroup) {
	defer  wg.Done();c.mux.Lock();c.v[key]++;c.mux.Unlock();
}
func (c *SafeCounter) Value(key string) int {
	c.mux.Lock();defer c.mux.Unlock();return c.v[key]
}
func main() {
	var wg sync.WaitGroup
	c := SafeCounter{v: make(map[string]int)}
	for i := 0; i < 1000; i++ { wg.Add(1);go c.Inc("somekey",&wg)}
	wg.Wait()
	fmt.Println(c.Value("somekey"))
}
