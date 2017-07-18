package trans
import("fmt";"os")
func main()  {
	os.Setenv("GOOS", "Linux")
	var goos  string = os.Getenv("GOOS")
	fmt.Printf("The operating system is: %s\n",goos)
	path := os.Getenv("PATH")
	fmt.Printf("Path is %s\n",path)
}