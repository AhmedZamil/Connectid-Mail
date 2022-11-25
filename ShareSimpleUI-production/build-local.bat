@echo off
echo ng build
call ng build

set target=..\ShareSimpleWebApi-production\ShareSimple\ShareSimple\wwwroot

echo Cleaning Target files
rmdir %target%\assets /S /Q
del %target%\*.map, %target%\*.js, %target%\*.css, %target%\index.html, %target%\favicon.ico

echo Copy files to wwwroot
xcopy dist %target% /E /Y
echo done.... Deployed for local
echo Date: %date% : %time%