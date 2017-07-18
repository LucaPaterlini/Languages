package main

import (
	"github.com/labstack/echo"
	"net/http")

type US struct {
Name  string `json:"name" form:"name" query:"name"`
Email string `json:"email" form:"email" query:"email"`
}

// Handler
func yo(c echo.Context) (err error) {
	u := new(US)
	if err = c.Bind(u); err != nil {
	return
	}
	return c.JSON(http.StatusOK, u)
}
/*
	TEST
	Method not allowed
	curl -X POST  http://localhost:1313/yo -H 'Content-Type: application/json' -d '{"name":"Joe","email":"joe@labstack"}'
	curl -X POST http://localhost:1313/yo -d 'name=Joe' -d 'email=joe@labstack.com'
	curl -X GET http://localhost:1313/yo?name=Joe&email=joe@labstack.com

 */

func formdata(c echo.Context) error {
	name := c.FormValue("name")
	return c.String(http.StatusOK, name+"\n")
}
/*
 curl -X POST http://localhost:1313 -d 'name=Joe'
 */



func main(){
	e := echo.New()
	e.GET("/yo",yo)
	e.POST("/",formdata)
	// Path Parameters
	e.GET("/users/:name", func(c echo.Context) error {
		name := c.Param("name")
		return c.String(http.StatusOK, name)
	})


	e.Logger.Fatal(e.Start(":1313"))


}