package main

import (
	"github.com/labstack/echo"
	"github.com/facebookgo/grace/gracehttp"
	"net/http"
)

func main(){
	e:= echo.New()
	e.GET("/", func(c echo.Context)error{
		return c.String(http.StatusOK, "six scik bricks tick")
	})
	e.Server.Addr = ":1323"
	e.Logger.Fatal(gracehttp.Serve(e.Server))

}