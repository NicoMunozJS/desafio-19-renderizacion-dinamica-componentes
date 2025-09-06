# 📌 Hito 3 - Pizzería Mamma Mía

Este proyecto corresponde al **Hito 3** del bootcamp Desafío Latam.  
El objetivo es validar conocimientos de **renderización dinámica de componentes** en React, utilizando arrays de objetos para generar contenido en la interfaz de forma automática.

---

## 🚀 Objetivo del desafío

- Renderizar dinámicamente **tarjetas de pizzas** en la página principal usando un array de objetos (`pizzas.js`).
- Simular un **carrito de compras** que permita aumentar o disminuir la cantidad de pizzas.
- Mostrar el **total de la compra** calculado dinámicamente.
- Integrar todos los componentes con el diseño base de la aplicación (**Navbar** y **Footer**).

---

## ✅ Requerimientos cumplidos

### Página Home
- Recorre el array de pizzas (`pizzas`) y renderiza un componente `<CardPizza />` por cada pizza.
- Cada tarjeta muestra:
  - Nombre de la pizza
  - Precio
  - Lista de ingredientes
  - Imagen de la pizza

### Componente Cart
- Recorre el array `pizzaCart` y muestra:
  - Imagen de la pizza
  - Nombre y precio
  - Cantidad
- Botones para **aumentar** y **disminuir** la cantidad de pizzas.
- Si la cantidad llega a 0, se elimina del carrito.
- Calcula y muestra el **total de la compra**.
- Botón de "Pagar" (no funcional por ahora).

### Navbar y Footer
- Navbar con botones de Home, Login, Register y total del carrito (simulado).
- Footer fijo con derechos de autor.

---

## 🛠️ Tecnologías utilizadas

- React 18
- JavaScript (JSX, useState, eventos)
- CSS3
- Bootstrap 5
- Vite como bundler
- Git para control de versiones

---

## ▶️ Cómo ejecutar el proyecto

1. Clona este repositorio:

```bash
git clone https://github.com/NicoMunozJS/hito-3-pizzeria.git
