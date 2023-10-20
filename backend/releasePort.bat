@echo off
setlocal enabledelayedexpansion

set "PORT=5000"

for /F "tokens=5" %%P in ('netstat -ano ^| findstr :%PORT%') do (
    set "PID=%%P"
    taskkill /PID !PID! /F 2>NUL
)

@REM echo Process on port %PORT% killed, if it was running.
@REM pause

@REM ********TO KILL MANUALLY FROM TERMINAL, EXECUTE THESE COMMANDS
@REM netstat -ano | findstr :<PORT>
@REM taskkill /PID <PID> /F