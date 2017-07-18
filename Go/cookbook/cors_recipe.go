package main
import (
	"net/http"
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)
var (users = []string{"Joe","Veer","Zion"})

func getUsers(c echo.Context) error {
	return c.JSON(http.StatusOK, users)
}

func main()  {
	e := echo.New()
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"https://labstack.com", "https://labstack.net"},
		AllowMethods: []string{echo.GET, echo.PUT, echo.POST, echo.DELETE},
	}))
	e.GET("/api/users", getUsers)
	e.Logger.Fatal(e.Start(":1323"))
}