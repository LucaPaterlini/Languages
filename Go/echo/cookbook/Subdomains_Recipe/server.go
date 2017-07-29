package main

import (
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
	"net/http"
)

type (
	Host struct {
		Echo *echo.Echo
	}
)

func initialize_sub(message string) *echo.Echo {
	sub := echo.New()
	sub.Use(middleware.Logger())
	sub.Use(middleware.Recover())
	sub.GET("/",func(c echo.Context)error{
		return c.String(http.StatusOK, message)
	})
	return sub
}

func main()  {
	// Hosts
	hosts := map[string]*Host{}

	hosts["api.localhost:1323"] = &Host{initialize_sub("API")}
	hosts["blog.localhost:1323"] = &Host{initialize_sub("Blog")}
	hosts["localhost:1323"] = &Host{initialize_sub("Website")}

	e := echo.New()
	e.Any("/*", func(c echo.Context)(err error){
		req := c.Request()
		res := c.Response()
		host := hosts[req.Host]
		if host == nil {
			err = echo.ErrNotFound
		} else {
			host.Echo.ServeHTTP(res,req)
		}
		return
	})
	e.Logger.Fatal(e.Start(":1323"))
}