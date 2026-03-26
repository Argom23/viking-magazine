# 🛡️ Vikingr Magazine

Una revista web moderna inspirada en la estética nórdica, desarrollada con **Next.js + Tailwind CSS**, enfocada en contenido editorial sobre historia, mitología y cultura vikinga.

---

## 🌌 Descripción

**Vikingr Magazine** es una web tipo revista digital que combina:

* diseño editorial moderno
* estética nórdica (niebla, piedra, mar)
* estructura escalable para artículos
* componentes reutilizables

El proyecto está pensado como base para:

* blogs históricos
* revistas digitales
* proyectos narrativos interactivos

---

## 🧱 Stack tecnológico

* ⚛️ Next.js (App Router)
* 🎨 Tailwind CSS v4
* 🧩 Componentes modulares (React)
* 🖼️ Assets en `/public`

---

## 📁 Estructura del proyecto

```
app/
  page.tsx

components/
  Navbar.tsx
  Hero.tsx
  FeaturedArticles.tsx
  SectionsGrid.tsx
  Newsletter.tsx

public/
  images/
    asgard.jpg
    yggdrasil.jpg
    Valhallaa.jpg
    placeholder.png
```

---

## 🧩 Componentes

### 🧭 Navbar

* navegación principal
* configurable vía props

### 🌫️ Hero

* portada editorial
* imagen de fondo (Asgard)
* CTA principal + secundaria

### 📜 FeaturedArticles

* grid de artículos
* soporta placeholders
* diseño tipo revista

### 🧱 SectionsGrid

* organización de contenido
* categorías del sitio

### 📩 Newsletter

* formulario de suscripción
* preparado para integración futura

---

## ⚙️ Instalación

```bash
git clone <repo>
cd viking-magazine
npm install
npm run dev
```

---

## 🎨 Paleta de colores

```txt
#0C7489  (azul profundo)
#13505B  (verde oscuro)
#918868  (piedra/dorado apagado)
#FCFAF9  (blanco roto)
#B4D2E7  (azul claro)
```

---

## 🧠 Concepto visual

El diseño se inspira en:

* paisajes del norte
* mitología nórdica
* arquitectura monumental
* estética editorial moderna

---

## 📚 Artículos actuales

* 🪓 Barcos vikingos (Ensayo)
* ⚔️ Batalla de Stamford Bridge (Periódico)
* 🌊 Relato de un vikingo (Diario)
* 🧿 Tatuajes y símbolos (Cultura)
* 🛡️ Mujeres vikingas (Testimonio)
* 🌍 Leif Eriksen (Entrevista)

- placeholders para futuras publicaciones

---

## 🚀 Próximas mejoras

* [ ] Integración real de newsletter
* [ ] Animaciones (Framer Motion)
* [ ] CMS (Sanity / Contentful)
* [ ] Páginas individuales de artículos
* [ ] SEO + metadata
* [ ] Dark/light variations

---

## ⚠️ Notas técnicas

* `Newsletter.tsx` usa `"use client"` por eventos (`onSubmit`)
* resto de componentes = Server Components
* imágenes deben ir en `/public/images`

---

## 👾 Autor

Proyecto desarrollado como base editorial con enfoque en:

* desarrollo web moderno
* diseño UI/UX
* narrativa histórica

---