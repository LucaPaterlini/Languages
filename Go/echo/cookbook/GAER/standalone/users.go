package main

import (
	"github.com/labstack/echo/middleware"
	"github.com/labstack/echo"
	"net/http"
)

type (
	user struct {
		ID string `json:"id"`
		Name string `json:"name"`
	}
)

var (
	users map[string]user
)

func init(){
	users = map[string]user{
		"1":user{
			ID: "1",
			Name: "Wreck-IT Ralph",
		},
	}

	g := e.Group("/users")
	g.Use(middleware.CORS())
	g.POST("",createUser)
	g.GET("",getUsers)
	g.GET("/:id",getUser)
}

func createUser(c echo.Context)error {
	u:= new(user)
	if err:=c.Bind(u);err!=nil{return err}
	users[u.ID] = *u
	return c.JSON(http.StatusCreated,u)
}

func getUsers(c echo.Context) error {
	return c.JSON(http.StatusOK, users)
}

func getUser(c echo.Context) error{
	return c.JSON(http.StatusOK, users[c.Param("id")])
}
