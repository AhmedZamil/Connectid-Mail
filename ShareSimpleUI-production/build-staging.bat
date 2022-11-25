@echo off
echo ng build --prod --environment staging
call ng build --prod --environment staging

set target=..\ShareSimpleWebApi-production\ShareSimple\ShareSimple\wwwroot

echo Cleaning Target files
rmdir %target%\assets /S /Q
del %target%\*.map, %target%\*.js, %target%\*.css, %target%\index.html, %target%\favicon.ico

::echo Bring myspace.html from wwwroot to dist
::xcopy %target%\myspace.html dist /Y

::echo add dynamic reference
::powershell -command "& "".\add-dynamic-reference.ps1"""

echo Copy files to wwwroot
xcopy dist %target% /E /Y
echo done.... Deployed for staging
echo Date: %date% : %time%