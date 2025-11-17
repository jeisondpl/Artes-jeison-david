# Portafolio de Jeison David Díaz - Pintor Artístico

Landing page profesional construida con Next.js 14 y TailwindCSS para el artista samario Jeison David Díaz.

## Características

- **Next.js 14** con App Router
- **TailwindCSS** con paleta de colores cálidos personalizados
- **Responsive Design** optimizado para todos los dispositivos
- **Galería de imágenes** con visualizador modal
- **Formulario de contacto** funcional con Resend
- **Optimización de imágenes** con next/image
- **Animaciones suaves** con Tailwind CSS

## Instalación

1. **Instalar dependencias:**

```bash
npm install
```

2. **Configurar variables de entorno:**

El archivo `.env.local` ya tiene configurada la API key de Resend.

3. **Ejecutar en desarrollo:**

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Formulario de Contacto

El formulario está completamente funcional y enviará emails a: **jeisond3@gmail.com**

Si quieres cambiar el email de destino, edita el archivo `app/api/send/route.ts` línea 16.

## Desplegar en Vercel

### Método 1: Importar desde GitHub

1. **Crear repositorio en GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Portafolio Jeison David Díaz"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/tu-repositorio.git
   git push -u origin main
   ```

2. **Importar en Vercel:**
   - Ve a [vercel.com](https://vercel.com) e inicia sesión
   - Click en "Add New Project"
   - Importa tu repositorio de GitHub
   - Vercel detectará automáticamente Next.js

3. **Configurar variable de entorno:**
   - En Vercel, ve a: Project Settings → Environment Variables
   - Añade: `RESEND_API_KEY` = `re_jEpv2k8L_GdBycUPQix2qAUj1hhKim1jh`
   - Click en "Deploy"

### Método 2: Desde la CLI de Vercel (más rápido)

1. **Instalar Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login en Vercel:**
   ```bash
   vercel login
   ```

3. **Desplegar:**
   ```bash
   vercel
   ```
   Sigue las instrucciones en pantalla.

4. **Configurar variable de entorno:**
   ```bash
   vercel env add RESEND_API_KEY production
   ```
   Cuando te lo pida, pega: `re_jEpv2k8L_GdBycUPQix2qAUj1hhKim1jh`

5. **Desplegar a producción:**
   ```bash
   vercel --prod
   ```

¡Listo! Tu sitio estará en línea en unos segundos.

## Estructura del Proyecto

```
Artista/
├── app/
│   ├── api/send/route.ts         # API para envío de emails
│   ├── components/
│   │   ├── About.tsx             # Sobre el artista
│   │   ├── Contact.tsx           # Formulario de contacto
│   │   ├── EmailTemplate.tsx     # Template de email
│   │   ├── Footer.tsx            # Pie de página
│   │   ├── Gallery.tsx           # Galería de obras
│   │   ├── Header.tsx            # Navegación
│   │   ├── Hero.tsx              # Portada
│   │   └── Services.tsx          # Servicios
│   ├── globals.css               # Estilos globales
│   ├── layout.tsx                # Layout principal
│   └── page.tsx                  # Página principal
├── imagenes/                     # 18 imágenes de obras
└── package.json                  # Dependencias
```

## Comandos Útiles

```bash
npm run dev      # Modo desarrollo
npm run build    # Compilar para producción
npm run start    # Servidor de producción
npm run lint     # Verificar código
```

## Redes Sociales del Artista

- Instagram: [@jdiaz.art](https://www.instagram.com/jdiaz.art?igsh=MTd6N3FpcjRqNTJwMg==)
- Facebook: [Jeison Díaz Art](https://www.facebook.com/profile.php?id=100090278273465&mibextid=ZbWKwL)
- WhatsApp: +57 320 596 66 24

---

Desarrollado para Jeison David Díaz - Santa Marta, Magdalena 🎨
