@echo off

@REM C:\Users\215861\Desktop\Darjan\Personal\Spremi_Ispit\backend\src\database\development\test.bat
@REM C:\Users\215861\Desktop\Darjan\Personal\Spremi_Ispit\backend\.env
set "env_file=%~dp0..\..\..\.env"

if exist "%env_file%" (
    for /f "tokens=1* delims==" %%a in ('type "%env_file%" ^| findstr "MYSQL_USER="') do (
        set "MYSQL_USER=%%b"
    )
)

echo %MYSQL_USER%