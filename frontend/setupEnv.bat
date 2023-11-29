@REM ______________SETUP ENVIRONMENT______________
@echo off
:input
set /p env=Backend running on? (local/host): 

if /i "%env%"=="local" (
    set environment=.env.local.development
    goto next
) else if /i "%env%"=="host" (
    goto input2
) else (
    echo Invalid input.
    goto input
)

:input2
set /p env=Development or production? (dev/prod): 

if /i "%env%"=="dev" (
    set environment=.env.host.development
    goto next
) else if /i "%env%"=="prod" (
    set environment=.env.host.production
    goto next
) else (
    echo Invalid input.
    goto input2
)

:next

copy %environment% ".env"
echo The environment has been set up to "%env%". 

if /i "%env%"=="local" (
    goto end
)

:input2
set /p deploy=Want to deploy the project to the hosting? (y/n):

if /i "%deploy%"=="y" (
    goto next2
) else if /i "%deploy%"=="n" (
    goto end
) else (
    echo Invalid input.
    goto input2
)

:next2

:input3
set /p version=Bump version? (y/n):

if /i "%version%"=="y" (
    echo Updating the project version...
    call npm version patch
    goto next3
) else if /i "%version%"=="n" (
    goto next3
) else (
    echo Invalid input.
    goto input3
)


:next3

echo Building the project...
call npm run build
echo The project has been built.

:end