package main

import (
	"path/filepath"
	"net/http"
	"html/template"
	"fmt"
)

var TEMPLATES_DIR = "assets/templates/"

func home(w http.ResponseWriter, r *http.Request) {
	tmplPath := filepath.Join(TEMPLATES_DIR, "index.html")
	tmpl := template.Must(template.ParseFiles(tmplPath))
	data := "David"
	tmpl.Execute(w, data)
}

func startServer() {
	http.HandleFunc("/", home)
	http.ListenAndServe(":8080", nil)
}

func main() {
	fmt.Print("Hello World!")
	startServer()
}