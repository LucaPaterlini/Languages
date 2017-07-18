// curl   -X POST   http://localhost:1323/users   -H 'Content-Type: application/json'   -d '{"name":"Joe","email":"joe@invalid-domain"}'{"message":"Key: 'User.Email' Error:Field validation for 'Email' failed on the 'email' tag"}
package main

import (
	"github.com/labstack/echo"
	"net/http"
)

type (
	User struct {
		Name  string `json:"name" validate:"required"`
		Email string `json:"email" validate:"required,email"`
	}

	CustomValidator struct {
		validator *validator.Validate
	}
)

func (cv *CustomValidator) Validate(i interface{}) error {
	return cv.validator.Struct(i)
}

func main() {
	e := echo.New()
	e.Validator = &CustomValidator{validator: validator.New()}
	e.POST("/users", func(c echo.Context) (err error) {
		u := new(User)
		if err = c.Bind(u); err != nil {
			return
		}
		if err = c.Validate(u); err != nil {
			return
		}
		return c.JSON(http.StatusOK, u)
	})
	e.Logger.Fatal(e.Start(":1323"))
}