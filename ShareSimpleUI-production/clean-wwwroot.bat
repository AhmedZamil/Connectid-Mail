@echo off

set target=..\ShareSimpleWebApi-production\ShareSimple\ShareSimple\wwwroot

echo Cleaning files in dist .....
rmdir dist /S /Q

echo Cleaning Target files.....
rmdir %target%\assets /S /Q
rmdir %target%\sharedfiles /S /Q
del %target%\*.map, %target%\*.js, %target%\*.css, %target%\index.html, %target%\favicon.ico, %target%\3rdpartylicenses.txt

echo Files are cleaned.
echo Date: %date% : %time%