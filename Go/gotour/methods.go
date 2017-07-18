//package main
//import ("fmt";"math")
//type Vertex struct {X,Y float64}
//func (v Vertex) Abs() float64 { return math.Sqrt(v.X*v.X + v.Y*v.Y)}
//func main()  { v := Vertex{3,4}; fmt.Println(v.Abs())}
//package main
//import ("fmt";"math")
//type Myfloat float6--4
//func (f Myfloat)Abs() float64{if f <0 { return float64(-f);};return float64(f);}
//func main()  {f := Myfloat(-math.Sqrt2);fmt.Println(f.Abs());}

//package main
//import ("fmt";"math")
//type Vertex struct {X, Y float64}
//func (v Vertex)Abs()float64  { return math.Sqrt(v.X*v.X + v.Y*v.Y)}
//func (v *Vertex) Scale (f float64)  {v.X = v.X * f; v.Y = v.Y * f}
//func main()  {
//	v:= Vertex{3,4};v.Scale(10);fmt.Println(v.Abs())
//}
//
//
//package main
//import ("fmt";"math")
//type Vertex struct {X, Y float64}
//
//func Abs(v Vertex) float64  { return math.Sqrt(v.X*v.X +v.Y*v.Y)}
//func Scale(v *Vertex, f float64){ v.X = v.X *f; v.Y = v.Y * f}
//func main()  { v := Vertex{3,4}; Scale(&v, 10);fmt.Println(Abs(v)) }

//package main; import "fmt";
//type Vertex struct { X, Y float64}
//func (v *Vertex) Scale (f float64)  { v.X = v.X *f; v.Y = v.Y *f}
//func ScaleFunc(v *Vertex, f float64)  { v.X = v.X *f; v.Y = v.Y * f}
//func main()  {
//	v := Vertex{3,4};v.Scale(2)
//	ScaleFunc(&v, 10); p := &Vertex{4,3}; p.Scale(3);
//	ScaleFunc(p, 8);fmt.Println(v, p);
//}

//package main
//import ("fmt";"math")
//
//type Vertex struct {X,Y float64}
//func (v Vertex) Abs() float64  { return math.Sqrt(v.X*v.X + v.Y*v.Y)}
//func AbsFunc(v Vertex) float64  { return math.Sqrt(v.X*v.X + v.Y*v.Y)}
//func main(){v:= Vertex{3,4};fmt.Println(v.Abs())}

//package main
//import("fmt";"math")
//type Vertex struct {X, Y float64}
//func (v Vertex) Abs() float64{return math.Sqrt(v.X*v.X + v.Y*v.Y)}
//func AbsFunc(v Vertex) float64{return math.Sqrt(v.X*v.X + v.Y*v.Y)}
//
//func main(){
//	v := Vertex{3,4 };fmt.Println(v.Abs())
//	fmt.Println(AbsFunc(v))
//	p:= &Vertex{3,4};fmt.Println(p.Abs())
//	fmt.Println(AbsFunc(*p))
//}
//

//package main
//import ("fmt";"math")
//
//type Vertex struct {X, Y float64}
//func (v * Vertex) Scale(f float64) {v.X = v.X * f;v.Y = v.Y * f}
//func (v *Vertex) Abs()float64 {return math.Sqrt(v.X*v.X + v.Y*v.Y)}
//
//func main()  {
//	v := &Vertex{3,4}
//	fmt.Printf("Before scaling: %+v, Abs: %v\n",
//	v,v.Abs());v.Scale(5)
//	fmt.Printf("After scaling: %+v, Abs: %v\n",v,v.Abs())
//}

// Strange Interface

//package main
//import ("fmt";"math")
//type Abser interface { Abs() float64}
//
//func main()  {
//	var a Abser;f := MyFloat(-math.Sqrt2);v := Vertex{3,4}
//	a = f;a = &v;a = v;fmt.Println(a.Abs())
//}
//type MyFloat float64
//func (f MyFloat) Abs() float64 {if f < 0 {return float64(-f)};return float64(f)}
//type Vertex struct {X, Y float64}
//func (v Vertex) Abs() float64 {return math.Sqrt(v.X*v.X + v.Y*v.Y)}

//package main;import "fmt"
//type I interface {M()}
//type T struct {S string}
//func (t T)M(){fmt.Println(t.S)}
//func main()  { var i I = T{"hello"};i.M()}

//package main
//import ("fmt";"math")
//
//type I interface { M()};type T struct { S string};func (t *T) M()  { fmt.Println(t.S)}
//type F float64;func (f F) M() {fmt.Println(f)}
//
//func main()  {
//	var i I; i= &T{"Hello"};describe(i);i.M();
//	i = F(math.Pi);describe(i);i.M()
//}
//func describe(i I)  {fmt.Printf("(%v, %T)\n",i,i)}

// Interface pay attention

//package main
//import "fmt"
//type I interface { M ()};type T struct { S string}
//func (t*T) M ()  {if t == nil { fmt.Println("<nil>");return };fmt.Println(t.S)}
//func main (){ var i I;var t*T; i = t; describe(i);i.M();i= &T{"hello"};describe(i);i.M()}
//func describe(i I)  { fmt.Println("(%v, %T)\n",i,i)}


// Interface attention they are not actual implementing
//package main;import "fmt"
//type I interface {M()}
//func main()  { var i I;describe(i);i.M()}
//func describe(i I)  { fmt.Println("(%v, %T\n",i,i)}

//package main;import "fmt"
//func main(){ var i interface{};describe(i);i=42;describe(i);i="hello";describe(i)}
//func describe(i interface{}){fmt.Printf("(%v, %T)\n",i,i)}

//package main;import "fmt"
//func main(){
//	var i interface{} = "hello"; s := i.(string); fmt.Println(s)
//	s, ok := i.(string);fmt.Println(s,ok);	f, ok := i.(float64);fmt.Println(f,ok)
//	f = i.(float64) // panic
//	fmt.Println(f)
//}

// type switches

//package main;import "fmt"
//func do(i interface{}){
//	switch v := i.(type) {
//	case int: fmt.Printf("Twice %v is %v\n",v,v*2)
//	case string: fmt.Printf("%q is %v bytes long\n",v,len(v))
//	default: fmt.Printf("I don't know about type %T!\n",v)
//	}
//}
//
//func main(){ do(21);do("hello");do(true)}

//package main;import "fmt";
//type Person struct {Name string;Age int }
//
//func (p Person) String() string{ return fmt.Sprintf("%v (%v years)",p.Name,p.Age)}
//func main()  { a := Person{"Arthur Dent",42};z:= Person{"Zaphod Beeblebrox",9001}
//	fmt.Println(a,z)
//}

// Welcome to method overriding
//package main;import "fmt";type IPAddr [4] byte
//func(i IPAddr) String() string {
//	return fmt.Sprint(fmt.Sprintf("%v.%v.%v.%v",i[0],i[1],i[2],i[3]))
//}
//func main()  {
//	hosts := map[string]IPAddr{"loopback":{127,0,0,1},"googleDNS":{8,8,8,8}}
//	for name,ip := range hosts {
//		fmt.Printf("%v: %v\n",name,ip)
//	}
//}

// Ovveride the error handling
//package main
//import ("fmt";"time")
//type MyError struct { When time.Time; What string}
//func (e *MyError) Error() string {return fmt.Sprintf("at %v, %s",e.When, e.What)}
//func run() error { return &MyError{time.Now(),"it didn't work"}}
//func main()  {
//	if err:=run(); err!=nil { fmt.Println(err)}
//}

////// 21/26 Reader Methods

//package main; import("fmt";"io";"strings")
//func main() {
//	r := strings.NewReader("Hello, Reader!")
//	b := make([]byte, 8)
//	for {
//		n, err := r.Read(b)
//		fmt.Printf("n = %v err = %v b = %v\n",n,err,b)
//		fmt.Printf("b[:n] = %q\n", b[:n])
//		if err == io.EOF {break}
//	}
//}

//package main
//import "golang.org/x/tour/reader"
//
//type MyRender struct {}
//func (r MyRender) Read(b []byte) (n int, err error)  {b[0] = 'A';return 1,nil}
//func main()  {reader.Validate(MyRender{})}


//package main; import("io";"os";"strings")
//type rot13Reader struct{ r io.Reader}
//func (rot *rot13Reader) Read(p []byte)(n int, err error)  {
//	n,err = rot.r.Read(p)
//	for i := 0; i < len(p);i++{
//		if (p[i] >= 'A' && p[i] < 'N') || (p[i]>='a' && p[i]<'n') {p[i] += 13
//		}else if (p[i]>'M'&&p[i]<='Z') || (p[i] > 'm' && p[i]<='z'){p[i] -=13}
//	}
//	return
//}
//func main(){
//	s := strings.NewReader("Lbh penpxrq gur pbqr!\n"); r:= rot13Reader{s}; io.Copy(os.Stdout, &r)
//}

//package main
//
//import (
//	"fmt"
//	"image"
//)
//func main()  {
//	m := image.NewNRGBA(image.Rect(0,0,100,100))
//	fmt.Println(m.Bounds())
//	fmt.Println(m.At(0,0).RGBA())
//}

package main
import ("image";"golang.org/x/tour/pic";"image/color")
type Image struct { Width, Height int; colr uint8}
func (r *Image) Bounds() image.Rectangle{
	return image.Rect(0,0, r.Width, r.Height)
}
func (r *Image) ColorModel() color.Model  {
	return color.RGBAModel
}
func (r *Image) At(x,y int) color.Color {
	return color.RGBA{r.colr+uint8(x), r.colr+uint8(y),255,255}
}
func main(){m := Image{100,100,120};pic.ShowImage(&m)}








