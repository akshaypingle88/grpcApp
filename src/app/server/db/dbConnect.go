package db

import (
	"github.com/prometheus/common/log"
	mgo "gopkg.in/mgo.v2"
)

var (
	Connected bool = false
	session   *mgo.Session
	db        *mgo.Database
)

func Start() {
	log.Info("Connecting to DB")

	var err error
	session, err = mgo.Dial("mongodb://localhost:27017/testdb")
	if err != nil {
		log.Error("Failed to connect to the database. ", err)
	}

	db = session.DB("")
	Connected = true
}

func Stop() {
	log.Info("Closing DB connection")
	session.Close()
	Connected = false
}

func Collection(name string) *mgo.Collection {
	return db.C(name)
}
