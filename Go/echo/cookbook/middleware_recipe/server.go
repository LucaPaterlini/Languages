package main

import (
	"time"
	"sync"
	"github.com/labstack/echo"
	"strconv"
	"net/http"
)

type(
	Stats struct {
		Uptime				time.Time `json:"uptime"`
		RequestCount 	uint64 `json:"request_count"`
		Statuses 			map[string]int `json:"statuses"`
		mutex					sync.RWMutex
	}
)
func NewStats()*Stats{
	return &Stats{
		Uptime: 	time.Now(),
		Statuses: map[string]int{},
	}
}

// Process is the middleware function.
func (s *Stats) Process(next echo.HandlerFunc)  echo.HandlerFunc {
	return func(c echo.Context) error {
		if err := next(c); err!=nil{c.Error(err)}
		s.mutex.Lock()
		defer s.mutex.Unlock()
		s.RequestCount++
		status := strconv.Itoa(c.Response().Status)
		s.Statuses[status]++
		return nil
	}
}

// Handle is the endpoint to get stats.
func (s *Stats) Hanle(c echo.Context) error {
	s.mutex.RLock()
	defer s.mutex.RUnlock()
	return c.JSON(http.StatusOK,s)
}

// ServerHeader middleware adds a `Server` header to the response.
func ServerHeader(next echo.HandlerFunc) echo.HandlerFunc {
	return func(c echo.Context) error {
		c.Response().Header().Set(echo.HeaderServer, "Echo/3.0")
		return next(c)
	}
}

func main(){
	e := echo.New()
	// Debug mode
	e.Debug = true
	s:= NewStats()
	e.Use(s.Process)
	e.GET("/stats", s.Hanle)
	// Server header
	e.Use(ServerHeader)
	e.GET("/", func(c echo.Context)error{
		return c.String(http.StatusOK, "Hello, World!")
	})
	// Start server
	e.Logger.Fatal(e.Start(":1323"))

}