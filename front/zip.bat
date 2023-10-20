

set PATH=%PATH%;C:\Program Files\7-Zip\

if exist "frontend.zip" (
    del /s /q "frontend.zip"
)

cd dist
7z a "../frontend.zip" *
echo Files and directory have been zipped
@REM pause