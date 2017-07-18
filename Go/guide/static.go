package main

import "github.com/labstack/echo"
//?? Big questions on static
func main(){
	e := echo.New()
	e.Static("/static","assets")
	e.File("/Best mix of Lindsey Stirling 2014.mp4", "assets/Best mix of Lindsey Stirling 2014.mp4")
	e.Logger.Fatal(e.Start(":1323"))
}