# woffu-frontend-test

## Instalación

Después de clonar el repositorio realizar los siguientes comandos

### yarn or npm install

### yarn start

Ambas aplicaciones se encontrarán corriendo en :
localhost:3000 y localhost:3001

# Form

## Descripción

La aplicación del Formulario se muestra la información en una Lista.
Como biblioteca de componentes se utilizó `Ant Design`.

En la lista se aprecia la información a mostrar así como dos íconos con Tooltips con los que se pueden editar o eliminar dicha fila. Al intentar eliminar aparecerá un Modal para que el usuario confirme dicha acción.

Para realizar las llamadas al API se utilizó `axios` y todo el código referente a este se encuentra en la carpeta api.

Para el control del estado de la aplicación se utilizó `Redux` y `Saga`.

Tanto para añadir o editar una fila se realizó mediante el despliegue de modales, decidí esto en vez de crear rutas distintas para cada formulario para no complicar el código y porque la aplicación la pensé para ser utilizada preferentemente en computadoras y no teléfonos.

## Sugerencias

Se podria hacer la Lista para que se extienda al hacer click en una fila y muestre la información de una forma más organizada y agradable.
Mejorar el Responsive de la app.
En los formularios se puede mejorar el control de errores de los inputs.
Cambiar el API para que la información llegue paginada.

# Dashboard

## Descripción

La aplicación del Dashboard se muestra la información en una Gráfica utilizando la biblioteca `Recharts`.
Como biblioteca de componentes se utilizó `Ant Design`.

En la gráfica se muestra la información para que el usuario pueda ver de una forma intuitiva por cual caballo o jinete se ha apostado más, incluso puede verlo en un periodo de tiempo determinado .

Para realizar las llamadas al API se utilizó `axios` y todo el código referente a este se encuentra en la carpeta api.

## Sugerencias

Se podrían hacer datos estadísticos de las carreras, caballos y jinites y basado en ello dar quien tiene mayor posibilidades de victoria.
