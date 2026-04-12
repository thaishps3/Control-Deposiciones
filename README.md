# 🩺 Control Bio-Senior

**Control Bio-Senior** es una herramienta web progresiva (PWA) diseñada para el monitoreo ágil y profesional de parámetros biológicos (deposición y micción) en adultos mayores. Optimizada para cuidadores y personal sanitario que necesita un registro rápido y privado sin complicaciones técnicas.

## ✨ Características Principales

- **Gestión de Usuarios:** Añade, edita o elimina pacientes directamente desde la interfaz.
- **Lógica Automática Inteligente:** Al registrar una deposición, el sistema marca automáticamente la micción (Sí), ahorrando tiempo en cada registro.
- **Filtro ABC:** Localiza nombres rápidamente tocando la inicial del usuario.
- **Indicadores Visuales:** Escala de deposiciones con emojis para una identificación intuitiva.
- **Historial Dinámico:** Visualización de registros anteriores con opción de filtrar por fecha.
- **Privacidad Total:** Los datos se almacenan localmente en el dispositivo (`LocalStorage`). Nada se sube a la nube.
- **Reportes Listos para Imprimir:** Diseño optimizado (CSS Print) que oculta botones innecesarios para entregar informes limpios al médico.

## Historial de Cambios (Versión 2026.04)
Esta actualización marca la transición hacia un sistema de gestión de datos más robusto, optimizado para entornos de enfermería:

Motor de Filtros Avanzado: Implementación de filtrado inteligente por Fecha, Usuario y Género, permitiendo una búsqueda rápida de datos específicos sin navegar por historiales completos.

Reportes PDF y Exportación: Mejora en la visualización de datos para la generación de reportes listos para impresión y gestión de backups mediante archivos .json.

Gestión Inmutable: Refuerzo en la integridad de los datos, asegurando que los registros una vez ingresados no sean editables, garantizando la trazabilidad.

Optimización Offline-First: Mejora en el rendimiento de la aplicación para su uso sin conexión, permitiendo su despliegue seguro a través de GitHub Pages.

Diseño Responsive: Ajuste de la interfaz de usuario para una experiencia fluida y táctil en dispositivos móviles, facilitando la toma de notas en tiempo real por el equipo auxiliar.
---

## 📖 Guía de Uso

Para garantizar un flujo de trabajo eficiente, sigue estos pasos:

### 1. Configuración de Usuarios
Antes de empezar, dirígete a la sección **"Gestión de usuarios"** en la parte superior:
- Escribe el nombre del paciente y pulsa **Añadir**.
- La lista se ordenará alfabéticamente de forma automática.
- Puedes eliminar usuarios antiguos tocando la `[x]` roja.

### 2. Realizar un Registro
- **Paso 1:** Selecciona la inicial del usuario y haz clic sobre su nombre.
- **Paso 2:** Elige el tipo de deposición. *Nota: Si seleccionas cualquier tipo que no sea "Ninguna", el sistema marcará automáticamente que el usuario orinó.*
- **Paso 3:** Si el usuario solo orinó, selecciona directamente la opción en la sección de Micción.
- **Paso 4:** Añade notas en "Observaciones" si hay algo relevante (color, dolor, etc.).
- **Paso 5:** Pulsa **Guardar**. El registro aparecerá inmediatamente en el historial inferior.

### 3. Consultar y Exportar
- Usa el calendario para filtrar los registros de un día específico.
- Pulsa **Imprimir Reporte** para generar un documento físico o guardarlo como PDF.

---

## 🚀 Instalación en el Móvil (Acceso Directo)

Para usarla como una App sin ver la barra del navegador:

1. **Android (Chrome):** Abre el enlace -> Menú (3 puntos) -> "Añadir a pantalla de inicio".
2. **iOS (Safari):** Abre el enlace -> Botón Compartir (cuadrado con flecha) -> "Añadir a pantalla de inicio".

---

## 🛠️ Especificaciones Técnicas

- **Lenguajes:** HTML5, CSS3 y JavaScript (Vanilla).
- **Almacenamiento:** LocalStorage API.
- **Diseño:** Responsive & Mobile-First.
- **Autor:** Thais Perruolo © 2026
- **Código:** Generado por Gemini.

**Service Worker**
Para que la aplicación funcione sin internet (offline) incluso después de cerrar el navegador o reiniciar el móvil, se añade un archivo técnico llamado Service Worker. Es como un "asistente" que vive dentro del móvil. La primera vez que abres la app, este asistente hace una copia de seguridad de los archivos (index.html, estilos, etc.). Cuando te desconectas, el asistente entrega esa copia local en lugar de intentar buscarla en GitHub.