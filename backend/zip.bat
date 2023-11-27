@echo off
:input
set /p files=Zip files (Y/N): 

if /i "%files%"=="Y" (
    set PATH=%PATH%;C:\Program Files\7-Zip\

    if exist "backend.zip" (
        del /s /q "backend.zip"
    )

    mkdir "tmp\dist"
    xcopy /s /e "dist\*" "tmp\dist"
    mkdir "tmp\files"
    xcopy /s /e "files\*" "tmp\files"
    copy ".env" "tmp"
    copy "package.json" "tmp"
    cd tmp
    7z a "..\backend.zip" *
    cd ..
    rmdir /s /q tmp

    goto next
) else if /i "%files%"=="N" (
    set PATH=%PATH%;C:\Program Files\7-Zip\

    if exist "backend.zip" (
        del /s /q "backend.zip"
    )

    mkdir "tmp\dist"
    xcopy /s /e "dist\*" "tmp\dist"
    copy ".env" "tmp"
    copy "package.json" "tmp"
    cd tmp
    7z a "..\backend.zip" *
    cd ..
    rmdir /s /q tmp
    goto next
) else (
    echo Invalid input.
    goto input
)

:next
echo Files and directory have been zipped
@REM pause
