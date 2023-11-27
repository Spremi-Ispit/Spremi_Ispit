@echo off

@REM C:\Users\215861\Desktop\Darjan\Personal\Spremi_Ispit\backend\src\database\development\test.bat
@REM C:\Users\215861\Desktop\Darjan\Personal\Spremi_Ispit\backend\.env
set "env_file=%~dp0..\..\..\.env"

if exist "%env_file%" (
    for /f "tokens=1* delims==" %%a in ('type "%env_file%" ^| findstr "DB_NAME="') do (
        set "DB_NAME=%%b"
    )
)

echo %DB_NAME%

@echo off
set "sql_file=database.sql"
set "temp_file=temp.sql"
set "line_to_add=USE `%DB_NAME%`;" 

echo %line_to_add% > %temp_file%
type %sql_file% >> %temp_file%
move /Y %temp_file% %sql_file%