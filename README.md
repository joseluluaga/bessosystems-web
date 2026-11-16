# bessosystems-web

Sitio estático de **bessosystems.com**: HTML, CSS y JS sin build, sin dependencias y sin gestor de paquetes.

> Este README se publica junto con el sitio (GitHub Pages sirve todo el repositorio). No pongas aquí nada privado.

## Estructura

| Ruta | Contenido |
|---|---|
| `index.html`, `about/`, `cases/`, `knowledge/`, `toolbox/`, `Lab/` | Páginas con el diseño v3 |
| `cases/{manufacturing,energy,automation}.html`, `knowledge/{diagnose,scada-mes,shopfloor-a3}.html`, `contact/` | Páginas de la v1.5 (diseño anterior), pendientes de migrar |
| `assets/css/v3-style.css` | Punto de entrada v3: importa `tokens → base → layout → components → responsive` |
| `assets/css/v3-responsive.css` | Breakpoints y menú móvil. **Va último**, para que sus reglas ganen a las de `components` |
| `assets/js/v3-nav.js` | Menú móvil v3 (mejora progresiva: sin JS, los enlaces quedan visibles) |
| `assets/js/calc.js` | Calculadoras de Toolbox |
| `assets/css/legacy/`, `assets/js/legacy/` | CSS/JS de la v1.5 (commit `6f3c502`) que usan las páginas antiguas. Se eliminan al migrarlas |
| `assets/img/` | Imágenes (`about/`, `knowledge/cynefin/`, `cases/...`) |
| `*-mockup.html`, `*-content.md`, `README_for_claude_code*.md` | Material de trabajo. **Hoy se publica**; ver "Pendiente" |
| `CNAME` | Dominio personalizado `bessosystems.com` |

Convenciones:
- Rutas en minúsculas y sin espacios (excepción: `Lab/`, ver "Pendiente"). GitHub Pages distingue mayúsculas; Windows no.
- Una regla responsiva nueva va en `v3-responsive.css`, no en `layout` ni en `components`.

## Iniciar en local

Requisitos: Git y Python 3.

```sh
git clone https://github.com/joseluluaga/bessosystems-web.git
cd bessosystems-web
git config core.longpaths true      # Windows: evita errores con rutas largas
python -m http.server 8080 --bind 127.0.0.1
# abrir http://127.0.0.1:8080
```

En Windows, este servidor **no** detecta errores de mayúsculas: `/lab/` funciona en local y da 404 en producción.

## Verificar antes de publicar

1. **Rutas exactas.** Cada `href`/`src` local tiene que coincidir con un archivo de `git ls-files`, respetando mayúsculas; la referencia no es el explorador de Windows.
2. **Navegador, escritorio y móvil.** En DevTools (F12 → Toggle device toolbar), revisar cada página modificada a 1440 px y a 390 px:
   - sin scroll horizontal;
   - sin errores en la consola;
   - sin recursos en rojo en la pestaña Network.

   Una ventana normal de Chrome no baja de unos 500 px; usá la emulación de dispositivo.
3. **Menú móvil (390 px).**
   - Tab hasta "Menu" y Enter abre.
   - Tab recorre los 5 enlaces.
   - Esc cierra y devuelve el foco al botón.
   - Un clic fuera del menú lo cierra.
   - Al pasar a escritorio con el menú abierto, se cierra.
   - Con JavaScript desactivado, los enlaces se ven igual.
4. **Interactivos.**
   - Toolbox: al cambiar un valor de cada calculadora, el resultado se actualiza.
   - Knowledge: cada dominio del diagrama Cynefin abre su imagen con clic o con Enter, y se vuelve con clic o con Esc.
   - Cynefin sorter: se puede completar solo con teclado.
5. `git status` y `git diff --cached` revisados: solo archivos del sitio, sin capturas ni temporales.

No hay tests, linter ni CI dentro del repositorio. Las herramientas que automatizan estos pasos (servidor sensible a mayúsculas, auditoría y pruebas de interacción por Chrome DevTools Protocol) se guardan en la carpeta de trabajo del proyecto, fuera del repositorio publicado.

## Publicar

**Comprobado:**
- GitHub Pages en modo *deploy from branch*; el único workflow es el automático `pages-build-deployment`.
- Un push a `main` dispara la publicación. En el último deploy pasó menos de un minuto entre el push y el sitio actualizado.
- El dominio resuelve a las IPs de GitHub Pages.

**No verificado** (requiere `gh auth login`): carpeta de origen (presumiblemente `/` de `main`) y si HTTPS está forzado.

Flujo previsto: trabajar en una rama → verificar → merge a `main` → push.

## Pendiente

- `www.bessosystems.com` no resuelve.
- No hay `.nojekyll`: Pages procesa el sitio con Jekyll, que también publica cada `.md` como `.html`.
- El material de trabajo y 77 imágenes fuente sin uso se publican (y el repositorio es público).
- `Lab/` en mayúscula: `/lab/` da 404.
- Las páginas v1.5 usan otra navegación y otro diseño.
- No hay favicon.
