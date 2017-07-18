package main
import ("net/http";"github.com/labstack/echo")

type User struct {
	Name string `json:"name" xml:"name" form:"name" query:"name"`
	Email string `json:"email" xml:"email" form:"email" query:"email"`
}


func users(c echo.Context) error {
	u := new(User)
	if err := c.Bind(u); err != nil {return err}
	return c.JSON(http.StatusCreated, u)
}

func main(){
	e := echo.New()
	e.POST("/users",users)
	e.Logger.Fatal(e.Start(":1323"))

}
