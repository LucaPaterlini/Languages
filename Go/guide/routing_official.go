package main

import (
	"github.com/labstack/echo"
	"net/http"
)

func hello (c echo.Context) error {
	return c.String(http.StatusOK, "Hello, World!")
}


func main(){
	e := echo.New()
	e.GET("/hello",hello)
	e.GET("/users/:id", func(c echo.Context) error {
		return c.String(http.StatusOK, "/users/:id")
	})

	e.GET("/users/new", func(c echo.Context) error {
		return c.String(http.StatusOK, "/users/new")
	})

	e.GET("/users/1/files/*", func(c echo.Context) error {
		return c.String(http.StatusOK, "/users/1/files/*")
	})




	e.Logger.Fatal(e.Start(":1323"))
}