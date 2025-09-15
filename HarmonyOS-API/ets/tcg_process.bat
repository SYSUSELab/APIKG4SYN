@echo off
setlocal enabledelayedexpansion
cd /d %~dp0

set COUNT=0
set GROUP=

set MAX= 50

for /R api %%F in (*.ts *.d.ts) do (
    set /a COUNT+=1
    set GROUP=!GROUP! "%%F"

    if !COUNT! GEQ %MAX% (
        echo Running: tcg !GROUP!
        tcg !GROUP!
        echo -----------------------------------------
        set COUNT=0
        set GROUP=
    )
)

if not "!GROUP!"=="" (
    echo Running: tcg !GROUP!
    tcg !GROUP!
    echo -----------------------------------------
)

echo Done. Press any key to exit...
pause
