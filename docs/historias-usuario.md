# Historias de usuario - PetCare

Proyecto base: prototipo web de PetCare desarrollado en el módulo Análisis y diseño de sistemas.
Cada historia se clasifica según el tipo de mantenimiento del SWEBOK y se trabaja en su propia rama
(`feature/HU-XX-descripcion`) que se integra a `develop` mediante un pull request. Cada historia modifica
archivos distintos, de modo que pueden desarrollarse en paralelo sin conflictos.

| HU | Historia | Tipo de mantenimiento | Responsable | Rama |
|---|---|---|---|---|
| HU-01 | Filtrar servicios por precio máximo | Perfectivo | Ronald Zambrano | `feature/HU-01-filtro-precio` |
| HU-02 | Filtrar mis solicitudes por estado | Correctivo | Bryan Quintero | `feature/HU-02-filtro-solicitudes` |
| HU-03 | Menú de navegación para celular | Adaptativo | Ronald Zambrano | `feature/HU-03-menu-movil` |
| HU-04 | Validar formularios de registro y mascotas | Preventivo | Bryan Quintero | `feature/HU-04-validacion-formularios` |
| HU-05 | Recuperar la contraseña | Perfectivo | Ronald Zambrano | `feature/HU-05-recuperar-contrasena` |
| HU-06 | Gestionar el estado de las solicitudes (proveedor) | Perfectivo | Bryan Quintero | `feature/HU-06-gestion-solicitudes` |

---

## HU-01: Filtrar servicios por precio máximo
**Como** dueña de una mascota, **quiero** filtrar los servicios por un precio máximo **para** ver solo las opciones que puedo pagar.

**Tipo de mantenimiento:** perfectivo. Agrega una función que no estaba en la versión entregada: el filtro de precio se mostraba pero no hacía nada.

**Criterios de aceptación**
1. Al elegir un precio máximo y pulsar "Aplicar filtros", solo se muestran los servicios con precio menor o igual.
2. El texto de resultados muestra cuántos servicios quedan ("1 servicio", "2 servicios").
3. Si ningún servicio cumple, aparece el mensaje "No hay servicios por debajo de ese precio".
4. Con "Sin límite" se muestran todos los servicios.
5. Se agrega la opción de $50.000 a la lista de precios.

**Archivos:** `buscar.html`, `js/filtro-precio.js` (nuevo).

---

## HU-02: Filtrar mis solicitudes por estado
**Como** dueña de una mascota, **quiero** filtrar mis solicitudes por estado **para** encontrar rápido las que siguen activas.

**Tipo de mantenimiento:** correctivo. Los botones "Todas", "Activas", "Finalizadas" y "Canceladas y rechazadas" se marcaban, pero la lista no cambiaba. Además, al pulsarlos aparecía un error en la consola del navegador (`The provided selector is empty`), porque el grupo de botones usaba un comportamiento genérico (`data-toggle-group`) que esperaba un elemento de salida que esta página no tiene.

**Criterios de aceptación**
1. "Activas" muestra solo las solicitudes Pendientes, Aceptadas o En atención.
2. "Finalizadas" muestra solo las Finalizadas.
3. "Canceladas y rechazadas" muestra solo esos estados.
4. "Todas" vuelve a mostrar la lista completa.
5. Al pulsar los filtros no aparece ningún error en la consola del navegador.

**Archivos:** `solicitudes.html`, `js/filtro-solicitudes.js` (nuevo).

---

## HU-03: Menú de navegación para celular
**Como** usuaria que entra desde el celular, **quiero** un menú que se pueda abrir y cerrar **para** que la navegación no ocupe media pantalla.

**Tipo de mantenimiento:** adaptativo. Ajusta el sistema a un entorno distinto al del diseño original: pantallas de celular de menos de 820 px de ancho.

**Criterios de aceptación**
1. En pantallas de menos de 820 px, el menú aparece cerrado y se muestra un botón "Menú".
2. Al pulsar "Menú" se despliegan las opciones y el botón cambia a "Cerrar".
3. En computador el menú se ve igual que antes, sin botón.
4. El botón indica a los lectores de pantalla si el menú está abierto (`aria-expanded`).

**Archivos:** `css/petcare.css`, `js/app.js`.

---

## HU-04: Validar formularios de registro y mascotas
**Como** administrador de PetCare, **quiero** que los formularios validen los datos antes de enviarlos **para** evitar cuentas y mascotas con información inválida.

**Tipo de mantenimiento:** preventivo. Evita que entren datos erróneos que más adelante causarían fallas (correos mal escritos, contraseñas débiles, pesos negativos).

**Criterios de aceptación**
1. Registro: el nombre debe tener mínimo 3 caracteres, el correo un formato válido y la contraseña mínimo 8 caracteres con al menos un número.
2. Registro: no se puede crear la cuenta sin aceptar la política de datos personales (Ley 1581).
3. Mascotas: el nombre es obligatorio, la edad debe estar entre 0 y 30 años y el peso entre 0,1 y 100 kg.
4. Cada error se muestra debajo de su campo, en rojo, y el cursor va al primer campo con error.
5. Si todo está bien, el formulario se envía normalmente.

**Archivos:** `registro.html`, `mascotas.html`, `js/validacion.js` (nuevo).

---

## HU-05: Recuperar la contraseña
**Como** usuaria que olvidó su contraseña, **quiero** pedir un enlace de recuperación **para** volver a entrar sin crear otra cuenta.

**Tipo de mantenimiento:** perfectivo. El enlace "¿Olvidaste tu contraseña?" existía en el inicio de sesión, pero no llevaba a ninguna parte.

**Criterios de aceptación**
1. El enlace "¿Olvidaste tu contraseña?" abre la página `recuperar.html`.
2. La página pide el correo y tiene el botón "Enviar enlace".
3. Al enviar, se muestra una confirmación con el correo escrito y la vigencia del enlace (30 minutos).
4. La página tiene un enlace para volver al inicio de sesión.

**Archivos:** `login.html`, `recuperar.html` (nuevo), `js/recuperar.js` (nuevo).

---

## HU-06: Gestionar el estado de las solicitudes (proveedor)
**Como** proveedor de servicios, **quiero** aceptar, rechazar y avanzar el estado de cada solicitud **para** que el propietario sepa en qué va la atención de su mascota.

**Tipo de mantenimiento:** perfectivo. En la versión entregada los botones del panel del proveedor se veían, pero no cambiaban nada.

**Criterios de aceptación**
1. "Aceptar" cambia el estado a Aceptada y deja el botón "Iniciar atención".
2. "Rechazar" cambia el estado a Rechazada y quita las acciones.
3. "Iniciar atención" cambia a En atención y deja el botón "Marcar finalizada".
4. "Marcar finalizada" cambia a Finalizada.
5. El indicador "Por responder" y el aviso amarillo se actualizan; el aviso desaparece cuando no quedan pendientes.

**Archivos:** `proveedor.html`, `js/gestion-solicitudes.js` (nuevo).
