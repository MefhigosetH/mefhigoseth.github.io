# mefhigoseth.github.io

Sitio web personal y portafolio de Victor Villarreal, construido con el generador de sitios estáticos Zola.

## Descripción

Este repositorio contiene el contenido y la configuración del sitio personal de Victor, incluyendo:

- `site/`: fuente del sitio Zola
- `site/content/`: publicaciones, páginas y proyectos
- `site/config.toml`: configuración principal de Zola
- `site/zola.toml`: configuración de compilación/deployment
- `docker-compose.yml`: servicio para ejecutar Zola localmente

El sitio se publica en: https://mefhigoseth.github.io/

## Cómo ejecutar localmente

1. Instala Docker.
2. En el directorio raíz del repositorio, ejecuta:

```bash
docker compose up
```

3. Abre en el navegador:

```text
http://localhost:1111
```

## Estructura del proyecto

- `site/content/`: contenido del sitio (blog, proyectos, páginas)
- `site/themes/tabi/`: tema Zola usado por el sitio
- `site/sass/`: estilos Sass que se compilan automáticamente
- `site/static/`: archivos estáticos incluidos en el sitio
- `site/public/`: sitio generado y recursos finales

## Configuración

El sitio está configurado en `site/config.toml` con:

- `base_url = "https://mefhigoseth.github.io"`
- `theme = "tabi"`
- taxonomías y menús en español
- enlaces a redes sociales de Victor

## Publicación

El sitio está pensado para publicarse como página estática en GitHub Pages usando el contenido generado por Zola.
