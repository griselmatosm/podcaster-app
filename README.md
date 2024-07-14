# Podcaster App

## Descripción

Podcaster App es una aplicación de una sola página (SPA) para escuchar podcasts musicales. La aplicación tiene tres vistas principales:

1. Vista principal con los 100 podcasts más populares.
2. Vista de detalles de un podcast.
3. Vista de detalles de un episodio de un podcast.

## Tecnologías Utilizadas

- **React**: Librería principal para la creación de la SPA.
- **CSS**: Uso de CSS para el diseño y la maquetación.
- **ContextAPI**: Gestión de estado.
- **React Router**: Para la navegación entre las vistas.
- **Webpack**: Para el empaquetado de la aplicación.

## Arquitectura

La aplicación sigue una arquitectura modular y escalable, dividida en componentes para mantener la separación de responsabilidades:

- **Componentes**: Cada componente tiene una única responsabilidad y está diseñado para ser reutilizable.
- **Hooks**: Uso de custom hooks para manejar la lógica del estado y las llamadas a la API.

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/griselmatosm/podcaster-app.git

2. Navega al directorio del proyecto:
  ```bash
  cd podcaster-app
3. Instala las dependencias:
  ```bash
npm install

## Ejecución

Para ejecutar la aplicación en modo desarrollo:
    ```bash
npm run start

Para crear una versión de producción:
    ```bash
npm run build

## Funcionalidades
- **Vista Principal**: Muestra los 100 podcasts más populares obtenidos de Apple Podcasts. Permite filtrar los podcasts por título y autor.
- **Detalles del Podcast**: Muestra la información detallada de un podcast seleccionado, incluyendo una lista de episodios.
- **Detalles del Episodio**: Muestra información detallada de un episodio seleccionado y un reproductor de audio básico.

## Decisiones de Diseño
- **Gestión del Estado**: Se utilizó ContextAPI para manejar el estado de la aplicación debido a su simplicidad y eficiencia.
- **Caché**: Se implementó almacenamiento en cliente para reducir las llamadas a la API y mejorar la eficiencia.
- **Responsive**: La aplicación está diseñada para ser responsive y funcional en diferentes tamaños de pantalla.

## Mejoras de UI/UX
- **Indicadores de Carga y Errores**:
Se implementaron indicadores visuales para mejorar la experiencia del usuario al cargar datos. Actualmente, se muestra un mensaje de "Loading..." mientras se cargan los datos y un mensaje de "Error loading podcasts" en caso de error. Sin embargo, este diseño no es el óptimo y se considera una mejora pendiente.

if (isLoading) return <div>Loading...</div>;
if (isError) return <div>Error loading podcasts</div>;

## Mejoras Pendientes
- **TypeScript**: Aunque no se utilizó debido a la falta de dominio, se considera una mejora futura.
- **Tests**: Faltan tests para algunos componentes. Se planea implementar tests completos para garantizar la calidad del código.
**UI/UX**: Mejorar la UI/UX relacionada con los estados de carga y error para ofrecer una mejor experiencia al usuario.
````




