# Impulso Digital

Sitio institucional con landing pages optimizadas para conversión, construido en Next.js 14.

## Estructura

```
/                    Home con los 3 servicios
/sistema-ventas      Landing del Sistema de Ventas
/google-ads          Landing de Campañas Google Ads
/sitios-web          Landing de Sitios Web
/gracias             Página post-form
/api/contact         Endpoint que recibe leads y envía email
```

## Setup local

```bash
# 1. Instalar dependencias
npm install

# 2. Copiar variables de entorno
cp .env.example .env.local

# 3. (Opcional) Configurar Resend para que los emails se envíen de verdad
# Sin esto, los leads se logean en console.log (útil para desarrollo)
# Crear cuenta gratis en https://resend.com y obtener API key

# 4. Levantar el servidor de desarrollo
npm run dev
```

Abrir http://localhost:3000

## Variables de entorno

- `RESEND_API_KEY` — API key de Resend (https://resend.com)
- `LEAD_EMAIL_TO` — Email donde llegan los leads (ej: `hola@impulsodigital.com`)
- `LEAD_EMAIL_FROM` — Email remitente, debe ser de un dominio verificado en Resend

## Producción

### Deploy en Vercel (recomendado)
1. Push del código a un repo de GitHub
2. Importar el proyecto en https://vercel.com
3. Configurar las variables de entorno en Project Settings
4. Deploy automático

### Otras opciones
- Netlify
- Railway
- Cualquier servidor Node.js con `npm run build && npm start`

## Configurar Resend (envío de emails)

1. Crear cuenta en https://resend.com
2. Verificar tu dominio (o usar `onboarding@resend.dev` para pruebas)
3. Crear API key y agregarla a `RESEND_API_KEY`
4. Configurar `LEAD_EMAIL_FROM` con un email de tu dominio verificado

## Personalización

### Cambiar la marca
- `components/Logo.tsx` — Logo SVG
- `components/Header.tsx` — Nombre en el header
- `components/Footer.tsx` — Datos de contacto en el footer
- `app/layout.tsx` — Metadata global
- `tailwind.config.ts` — Colores de la marca

### Cambiar testimonios
- `components/Testimonials.tsx` — `DEFAULT_TESTIMONIALS`

### Cambiar casos de éxito
- `components/CaseStudies.tsx` — `DEFAULT_CASES`

### Modificar planes y precios
- `app/google-ads/page.tsx` — Sección "Plans"

## Stack técnico

- **Next.js 14** (App Router)
- **TypeScript** con paths alias `@/*`
- **Tailwind CSS 3** con paleta personalizada
- **Resend** para envío de emails
- **Lucide React** para íconos
- **Fraunces** (display) + **Inter** (sans) — Google Fonts

## Licencia
© Impulso Digital — Todos los derechos reservados.
