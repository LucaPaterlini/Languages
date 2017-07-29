package handler
import mgo "gopkg.in/mgo.v2"

type (
	Handler struct {
		DB *mgo.Session
	}
)

const (
	Key = "secret"
)