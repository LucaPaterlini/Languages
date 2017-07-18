// The test it self does'nt work :/
package handler

import (
	"testing"
	"github.com/labstack/echo"
	"net/http/httptest"
)

var (
	mockDB = map[string]*User {"jon@labstack.com":
	&User("Jon Snow". "jon@labstack.com"), }
	userJSON = `"name":"Jon Snow" ,"email":"jon@labstack.com"}`
)

func TestCreateUser(t *testing.T){
	// Setup
	e := echo.New()
	req := httptest.NewRequest(echo.POST, "/", string.NewReader(userJSON))
	req.Header.Set(echo.HeaderContentType, echo.MIMEApplicationJSON)
}