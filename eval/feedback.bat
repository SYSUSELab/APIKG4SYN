@echo off
chcp 65001 >nul
cd path\to\your\DevEcoProject\test
set NODE_EXE="path\to\your\DevEco Studio\tools\node\node.exe"

set HVIGORW_JS="path\to\your\DevEco Studio\tools\hvigor\bin\hvigorw.js"

set LOG_PATH=path\to\your\research\log\feedback\hvigor_test_output.log

echo [INFO] 正在执行 hvigorw test 命令，请稍候...
%NODE_EXE% %HVIGORW_JS% test -p module=entry -p scope=localUnitTest --no-daemon > %LOG_PATH% 2>&1

echo [INFO] 执行完毕，日志已保存至 %LOG_PATH%
exit /b 0
