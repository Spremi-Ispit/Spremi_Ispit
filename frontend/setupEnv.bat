@REM ______________SETUP ENVIRONMENT______________
@echo off
:input
set /p env=Where is backend? (local/host): 

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
set /p build=Build for deployment (y/n):

if /i "%build%"=="y" (
    echo Updating the project version...
    call npm version patch
    echo Building the project...
    call npm run build
    echo The project has been built.

    goto end
) else if /i "%build%"=="n" (
    goto end
) else (
    echo Invalid input.
    goto input2
)
:end


:end