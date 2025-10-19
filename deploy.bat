@echo off
echo 🚀 Desplegando Nordic Globe Website...
echo.

echo 📦 Agregando archivos al repositorio...
git add .

echo 💾 Haciendo commit...
git commit -m "Deploy: $(date)"

echo 🌐 Subiendo a GitHub...
git push origin master

echo.
echo ✅ ¡Despliegue completado!
echo 🌍 Tu sitio web estará disponible en:
echo    https://yassinfennir.github.io/nordic-globe-website
echo.
echo 📱 También puedes usar:
echo    - Netlify: https://netlify.com (drag & drop)
echo    - Vercel: https://vercel.com (import from GitHub)
echo.
pause
