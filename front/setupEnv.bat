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
@REM pause
