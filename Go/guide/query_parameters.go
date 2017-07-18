package main
import ("net/http";"github.com/labstack/echo"
	"os"
	"io"
)

func show(c echo.Context) error {
	team := c.QueryParam("team")
	member := c.QueryParam("member")
	return c.String(http.StatusOK, "team:" + team + ", member:" + member)
}

func save1(c echo.Context) error {
	name := c.FormValue("name")
	email := c.FormValue("email")
	return c.String(http.StatusOK, "name:" + name + ", email:" + email+"\n")
}

func save(c echo.Context) error {
	name := c.FormValue("name")
	avatar, err := c.FormFile("avatar")
	if err != nil { return err}
	src,err := avatar.Open()
	if err != nil { return  err}
	defer src.Close()
	dst, err := os.Create(avatar.Filename)
	print(avatar.Filename)
	if err != nil { return err}
	defer dst.Close()
	if _, err = io.Copy(dst,src); err != nil {return err}
	return c.HTML(http.StatusOK, "<b>Thank you! "+name+"</b>")

	/*
	curl -F "name=Joe Smith" -F "avatar=/home/pater92/Desktop/Go/echo/from/avatar.jpg" http://localhost:1323/save
	 */
}



func main(){
	e := echo.New()
	e.GET("/show",show)
	e.POST("/save1",save1)
	e.POST("/save",save)
	e.Logger.Fatal(e.Start(":1323"))
}