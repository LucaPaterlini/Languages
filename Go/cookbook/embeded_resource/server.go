package main

import (
	"github.com/labstack/echo"
	"net/http"
	"github.com/GeertJohan/go.rice"
)

func main()  {
	e := echo.New()
	assetHandler := http.FileServer(rice.MustFindBox("app").HTTPBox())
	e.GET("/", echo.WrapHandler(assetHandler))
	e.GET("/static/", echo.WrapHandler(http.StripPrefix("/static/",assetHandler)))
	e.Logger.Fatal(e.Start(":1323"))
}
