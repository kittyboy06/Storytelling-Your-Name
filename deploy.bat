@echo off
echo "==========================================="
echo " Deploying Vite App to GitHub Pages "
echo "==========================================="

echo.
echo [1/4] Building the project...
call npm run build

echo.
echo [2/4] Navigating into the build output directory (dist)...
cd dist

echo.
echo [3/4] Initializing a new git repository in the dist folder...
git init
git checkout -b main
git add -A
git commit -m "Deploy to GitHub Pages"

echo.
echo [4/4] Pushing to the gh-pages branch...
REM Get the remote origin URL from the parent directory
FOR /F "tokens=*" %%i IN ('git -C .. config --get remote.origin.url') do (SET REPO_URL=%%i)

if "%REPO_URL%"=="" (
    echo [ERROR] Remote 'origin' not found in the parent directory!
    echo Please make sure your main project is pushed to GitHub.
    echo Alternatively, replace the git push command below with your actual repository URL:
    echo git push -f git@github.com:USERNAME/REPOSITORY.git main:gh-pages
    cd ..
    exit /b 1
)

echo Pushing to: %REPO_URL%
git push -f %REPO_URL% main:gh-pages

cd ..
echo.
echo "==========================================="
echo " Deployment Complete! "
echo "==========================================="
pause
