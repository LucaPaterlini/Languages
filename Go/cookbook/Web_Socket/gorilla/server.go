package main

import (
	"github.com/gorilla/websocket"
	"github.com/labstack/echo"
	"fmt"
	"github.com/labstack/echo/middleware"
)

var (upgrader = websocket.Upgrader{})

func hello(c echo.Context) error {
	ws, err := upgrader.Upgrade(c.Response(), c.Request(),nil)
	if err != nil { return err}
	defer ws.Close()

	for  {
		// Write
		err := ws.WriteMessage(websocket.TextMessage, []byte("Hello, Client! "))
		if err != nil { c.Logger().Error(err)}
		// Read
		_ , msg, err := ws.ReadMessage()
		if err != nil { c.Logger().Error(err)}
		fmt.Printf("%s\n",msg)
	}
}

func main(){
	e := echo.New()
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())
	e.Static("/","/home/pater92/Desktop/Go/echo/cookbook/Web_Socket/public")
	e.GET("/ws",hello)
	e.Logger.Fatal(e.Start(":1323"))
}