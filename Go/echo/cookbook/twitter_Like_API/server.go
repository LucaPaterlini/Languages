package main

import (
	"github.com/labstack/echo"
	"./handler"
	"github.com/labstack/echo/middleware"
	"github.com/labstack/gommon/log"
	mgo "gopkg.in/mgo.v2"
)

func main(){
	e := echo.New()
	e.Logger.SetLevel(log.ERROR)
	e.Use(middleware.Logger())
	e.Use(middleware.JWTWithConfig(middleware.JWTConfig{
		SigningKey:[]byte(handler.Key),
		Skipper: func(c echo.Context)bool {
			// Skip authentication for a signup login requests
			if c.Path() == "/login" || c.Path() == "/signup" {
				return true
			}
			return false
		},
	}))

	// Database connection
	db, err := mgo.Dial("localhost")
	if err != nil { e.Logger.Fatal(err)}

	// Create indices
	if err = db.Copy().DB("twitter").C("users").
		EnsureIndex(mgo.Index{
		Key: []string{"email"}, Unique : true,
	}); err != nil {log.Fatal(err)}

	// Initilize handler
	h := &handler.Handler{DB: db}

	// Routes
	e.POST("/signup",h.Signup)
	e.POST("/login", h.Login)
	e.POST("/follow/:id", h.Follow)
	e.POST("/posts",h.CreatePost)
	e.GET("/feed",h.FerchPost)

	// Start server
	e.Logger.Fatal(e.Start(":1323"))
}

/*
	Signup
	curl -X POST http://localhost:1323/signup -H "Content-Type: application/json" -d '{"email":"jon@labstack.com","password":"shhh!"}'
 	Login
 	curl -X POST http://localhost:1323/login -H "Content-Type: application/json" -d '{"email":"jon@labstack.com","password":"shhh!"}'
 	Follow
 	curl -X POST http://localhost:1323/follow/595a241be18cf94aecf6581d -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0OTkzMzg5MTYsImlkIjoiNTk1YTI0MWJlMThjZjk0YWVjZjY1ODFkIn0.US5q4m_YGCeDN7zG7uhK2yZXP3j27Dc0vwJLmX5vI_M"
	Request
	curl -X POST http://localhost:1323/posts -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0ODEyNjUxMjgsImlkIjoiNTg0NjViNGVhNmZlODg2ZDMyMTVjNmRmIn0.1IsGGxko1qMCsKkJDQ1NfmrZ945XVC9uZpcvDnKwpL0"-H "Content-Type: application/json" -d'{"to":"58465b4ea6fe886d3215c6df","message":"hello"}'



 */