@echo off
IF NOT EXIST "node_modules\" (
    call npm install
)
start node server.js
start http://localhost:3000
