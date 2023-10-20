

set PATH=%PATH%;C:\Program Files\7-Zip\

if exist "backend.zip" (
    del /s /q "backend.zip"
)

mkdir "tmp\dist"
xcopy /s /e "dist\*" "tmp\dist"
copy ".env.production" "tmp"
copy "package.json" "tmp"
cd tmp
7z a "..\backend.zip" *
cd ..
rmdir /s /q tmp
echo Files and directory have been zipped
@REM pause