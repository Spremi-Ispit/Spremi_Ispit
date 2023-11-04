@REM ______________SETUP ENVIRONMENT______________
@echo off
:input
set /p env=Enter environment (localDev/hostDev/hostProd): 

if /i "%env%"=="localDev" (
    set environment=.env.local.development
    goto next
) else if /i "%env%"=="hostDev" (
    set environment=.env.host.development
    goto next
) else if /i "%env%"=="hostProd" (
    set environment=.env.host.production
    goto next
) else (
    echo Invalid input.
    goto input
)

:next

copy %environment% ".env"
echo The environment hass been set up to "%env%". 

@REM ______________CHECK FOR dist directory______________

set dist_path=./dist

if exist "%dist_path%" (
    goto end
) 

echo In order to run database scripts: 'dropDatabase', 'createDatabase', 'populateDatabase', the project needs to be built first.

:input2
set /p build=Run build (y/n):

if /i "%build%"=="y" (
    npm run build
    goto end
) else if /i "%build%"=="n" (
    goto end
) else (
    echo Invalid input.
    goto input2
)
:end

@REM pause
