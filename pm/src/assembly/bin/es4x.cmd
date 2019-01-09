@ECHO OFF

SETLOCAL

SET "JAVA_EXE=%JAVA_HOME%\bin\java.exe"
IF NOT EXIST "%JAVA_EXE%" (
  SET "JAVA_EXE=java"
)

:: if package.json exists but no node_modules\@lib -> run install
IF EXIST "package.json" (
  IF NOT EXIST "node_modules\@lib" (
    %~dp0\es4x-pm.cmd install
  )
)

:: if no node_modules, use local jar as classpath
IF NOT EXIST "node_modules\@lib" (
  "%JAVA_EXE%" "%JAVA_OPTS%" -jar %~dp0\es4x-pm-bin.jar %*
) ELSE (
  IF EXIST "node_modules\@jvmci" (
    SET "JVMCI=--module-path=node_modules\@jvmci -XX:+UnlockExperimentalVMOptions -XX:+EnableJVMCI --upgrade-module-path=node_modules\@jvmci\compiler.jar"
  )

  "%JAVA_EXE%" -XX:+IgnoreUnrecognizedVMOptions "%JVMCI%" "%JAVA_OPTS%" -cp "node_modules\@lib\*" io.reactiverse.es4x.ES4X %*
)