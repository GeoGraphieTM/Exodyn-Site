@echo off
cd /d %~dp0

echo.
echo ===============================
echo     Committing changes...
echo ===============================
git add .

git commit -m "update123"
if %errorlevel% neq 0 (
    echo Nothing to commit or error.
) else (
    echo Commit successful.
)

echo.
echo ===============================
echo     Pushing to GitHub...
echo ===============================
git push origin main
if %errorlevel% neq 0 (
    echo Push failed.
) else (
    echo Push successful.
)

pause
