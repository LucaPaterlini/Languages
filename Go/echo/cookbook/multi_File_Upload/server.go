package main

import (
	"github.com/labstack/echo"
	"os"
	"io"
	"fmt"
	"net/http"
	"github.com/labstack/echo/middleware"
)

func upload(c echo.Context) error {
	// Read form field
	name := c.FormValue("name")
	email := c.FormValue("email")
	// Multipart form
	form, err := c.MultipartForm();if err!=nil{return err}
	files := form.File["files"]

	for _, file := range files{
		// Source
		src,err := file.Open();if err!=nil {return err}
		defer src.Close()
		// Destination
		dst, err := os.Create("multi_File_Upload/data/"+file.Filename);if err!=nil{return err}
		defer dst.Close()
		// Copy
		if _, err = io.Copy(dst, src); err!=nil{return err}
	}
	return c.HTML(http.StatusOK, fmt.Sprintf("<p>Uploaded successfully %d files with fields name=%s and email=%s.</p>", len(files), name, email))
}

func main(){
	e := echo.New()
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())
	e.Static("/","/home/pater92/Desktop/Go/echo/cookbook/multi_File_Upload/public")
	e.POST("/upload", upload)
	e.Logger.Fatal(e.Start(":1323"))
}
