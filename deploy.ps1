#!/usr/bin/env powershell
# Script para hacer push automático a GitHub
# Uso: .\deploy.ps1

Write-Host "╔════════════════════════════════════════════════════════════╗" -ForegroundColor Green
Write-Host "║  W03 PROJECT 2 - GITHUB DEPLOYMENT AUTOMÁTICO              ║" -ForegroundColor Green
Write-Host "╚════════════════════════════════════════════════════════════╝`n" -ForegroundColor Green

# Cambiar a la carpeta del proyecto
Set-Location "C:\Users\Usuario\Desktop\cse-341"
Write-Host "📁 Carpeta: $(Get-Location)`n" -ForegroundColor Cyan

# Verificar si Git está instalado
Write-Host "🔍 Verificando Git..." -ForegroundColor Yellow
$gitExists = $null
try {
    $gitExists = git --version 2>&1
    Write-Host "✅ Git encontrado: $gitExists`n" -ForegroundColor Green
} catch {
    Write-Host "❌ Git no está instalado o no está en el PATH" -ForegroundColor Red
    Write-Host "Descarga Git desde: https://git-scm.com/download/win`n" -ForegroundColor Yellow
    exit 1
}

# Inicializar Git si no existe .git
if (-not (Test-Path ".\.git")) {
    Write-Host "📝 Inicializando repositorio Git..." -ForegroundColor Yellow
    git init
    Write-Host "✅ Repositorio inicializado`n" -ForegroundColor Green
}

# Configurar Git (si no está configurado)
Write-Host "⚙️  Configurando Git..." -ForegroundColor Yellow
$userName = git config user.name
$userEmail = git config user.email

if (-not $userName) {
    Write-Host "Ingresa tu nombre de GitHub (ej: Juan Pérez): " -ForegroundColor Cyan -NoNewline
    $userName = Read-Host
    git config user.name "$userName"
}

if (-not $userEmail) {
    Write-Host "Ingresa tu email de GitHub (ej: juan@example.com): " -ForegroundColor Cyan -NoNewline
    $userEmail = Read-Host
    git config user.email "$userEmail"
}

Write-Host "✅ Usuario configurado: $userName ($userEmail)`n" -ForegroundColor Green

# Agregar archivos
Write-Host "📦 Agregando archivos..." -ForegroundColor Yellow
git add .
Write-Host "✅ Archivos agregados`n" -ForegroundColor Green

# Crear commit
Write-Host "💾 Creando commit..." -ForegroundColor Yellow
git commit -m "W03 Project 2 Part 1 - CRUD API with validation, error handling, and Swagger documentation"
Write-Host "✅ Commit creado`n" -ForegroundColor Green

# Verificar rama
Write-Host "🌳 Verificando rama..." -ForegroundColor Yellow
$branch = git branch --show-current
if ($branch -ne "main") {
    Write-Host "Renombrando rama a 'main'..." -ForegroundColor Yellow
    git branch -M main
}
Write-Host "✅ Rama: $branch`n" -ForegroundColor Green

# Pedir URL de repositorio
Write-Host "🔗 Necesito tu URL de GitHub..." -ForegroundColor Cyan
Write-Host "Para obtenerla:" -ForegroundColor Yellow
Write-Host "  1. Ve a https://github.com/new" -ForegroundColor Gray
Write-Host "  2. Crea un repositorio llamado 'cse-341'" -ForegroundColor Gray
Write-Host "  3. Copia la URL (ej: https://github.com/tuusuario/cse-341.git)`n" -ForegroundColor Gray

Write-Host "Ingresa tu URL de repositorio de GitHub: " -ForegroundColor Cyan -NoNewline
$repoURL = Read-Host

# Verificar si ya existe remote origin
$remoteExists = git remote | Select-String "origin"
if ($remoteExists) {
    Write-Host "Removiendo remote origin existente..." -ForegroundColor Yellow
    git remote remove origin
}

# Agregar remote
Write-Host "📡 Agregando remote origin..." -ForegroundColor Yellow
git remote add origin $repoURL
Write-Host "✅ Remote agregado: $repoURL`n" -ForegroundColor Green

# Push al repositorio
Write-Host "🚀 Haciendo push a GitHub (esto puede pedir tu contraseña)..." -ForegroundColor Cyan
Write-Host "Si te pide autenticación:" -ForegroundColor Yellow
Write-Host "  - Usuario: tu nombre de usuario de GitHub" -ForegroundColor Gray
Write-Host "  - Contraseña: tu token personal (PAT) o contraseña`n" -ForegroundColor Gray

git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n╔════════════════════════════════════════════════════════════╗" -ForegroundColor Green
    Write-Host "║  ✅ ¡PUSH COMPLETADO EXITOSAMENTE!                           ║" -ForegroundColor Green
    Write-Host "╚════════════════════════════════════════════════════════════╝" -ForegroundColor Green
    
    Write-Host "`n📊 Próximas acciones:" -ForegroundColor Cyan
    Write-Host "  1. Ve a https://github.com/[tuusuario]/cse-341" -ForegroundColor Gray
    Write-Host "  2. Verifica que el código está ahí" -ForegroundColor Gray
    Write-Host "  3. Copia el URL de tu repositorio" -ForegroundColor Gray
    Write-Host "  4. Sigue la guía PROXIMOS_PASOS.md`n" -ForegroundColor Gray
    
    Write-Host "Tu repositorio: $repoURL`n" -ForegroundColor Green
} else {
    Write-Host "`n❌ Error al hacer push. Verifica:" -ForegroundColor Red
    Write-Host "  - Tu conexión a internet" -ForegroundColor Gray
    Write-Host "  - Tu token de GitHub (usa PAT en lugar de contraseña)" -ForegroundColor Gray
    Write-Host "  - La URL del repositorio" -ForegroundColor Gray
}

Write-Host "═══════════════════════════════════════════════════════════`n" -ForegroundColor White
