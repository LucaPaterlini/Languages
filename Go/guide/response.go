package main

import (
	"github.com/labstack/echo"
	"net/http"
	"encoding/json"
	"os"
	"io/ioutil"
)
// User
type User struct {
	Name  string `json:"name" xml:"name"`
	Email string `json:"email" xml:"email"`
}
const FILE  =  "/home/pater92/Desktop/Go/echo/guide/assets/Best mix of Lindsey Stirling 2014.mp4"

func sj(c echo.Context) error {
	u := &User{
		Name: "Jon",
		Email: "jon@labstack.com",
	}
	return c.JSONPretty(http.StatusOK, u, "  ")
}

func lsj(c echo.Context) error {
	u := &User{
		Name: "Jon",
		Email: "jon@labstack.com",
	}
	c.Response().Header().Set(echo.HeaderContentType,echo.MIMEApplicationJavaScriptCharsetUTF8)
	c.Response().WriteHeader(http.StatusOK)
	return json.NewEncoder(c.Response()).Encode(u)
}

func sf(c echo.Context) error {
	return c.File("/home/pater92/Desktop/Go/echo/guide/Best mix of Lindsey Stirling 2014.mp4")
}

func sa(c echo.Context)error  {
	return c.Attachment("/home/pater92/Desktop/Go/echo/guide/Best mix of Lindsey Stirling 2014.mp4", "luca")
}

func si(c echo.Context) error {
	return c.Inline(FILE, "luca's smile")
}

func sb(c echo.Context)(err error){
	data := []byte(`0306703,0035866,NO_ACTION,06/19/2006
	  0086003,"0005866",UPDATED,06/19/2006`)
	return c.Blob(http.StatusOK, "text/csv",data)
}


func ss(c echo.Context) error {
	f, err := os.Open(FILE)
	if err != nil { return err}
	return c.Stream(http.StatusOK, "video/mp4", f)
}

func snc(c echo.Context) error {
	return c.NoContent(http.StatusOK)
}

func rr(c echo.Context) error {
	return c.Redirect(http.StatusMovedPermanently, "http://127.0.0.1:1313/si")
}

func main(){
	e := echo.New()
	e.GET("/sj",sj)
	e.GET("/lsj",lsj)
	e.GET("/sf",sf)
	// In order to straigth dowload
	e.GET("/sa",sa)
	e.GET("/si",si)
	e.GET("/hello.csv",sb)
	e.GET("/ss",ss)
	e.GET("/snc",snc)
	e.GET("/rr",rr)
	e.GET("/routes",func(c echo.Context)error{
		data, err := json.MarshalIndent(e.Routes(), "", "  ")
		if err != nil {return err}
		ioutil.WriteFile("routes.json", data, 0644)
		return nil
	})
	e.Logger.Fatal(e.Start(":1313"))
}
