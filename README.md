# PetCare: mantenimiento de software

Plataforma web de la veterinaria PetCare S.A.S. para dueños de mascotas:
servicios de consulta veterinaria, peluquería, paseo y cuidado temporal.
Se desarrolla en el curso Mantenimiento de Software de la Corporación
Universitaria Iberoamericana para aplicar el mantenimiento colaborativo
con Git y GitHub.

## Integrantes
- Bryan Stith Quintero Guacary
- Ronald Zambrano

## Flujo de ramas
| Rama | Entorno | Uso |
|---|---|---|
| `feature/HU-XX-descripcion` | Desarrollo | Una rama por historia de usuario |
| `develop` | Integración | Une el trabajo de todas las historias |
| `qa` | Pruebas | Validación antes de pasar a producción |
| `main` | Producción | Versión estable y entregable |

Flujo: `feature/HU-XX` → `develop` → `qa` → `main`

## Convención de commits
`categoría(HU-XX): descripción`, donde la categoría es el tipo de mantenimiento
según el SWEBOK: `correctivo`, `adaptativo`, `perfectivo` o `preventivo`.

Ejemplo: `perfectivo(HU-01): agrega el registro de mascotas`

## Historias de usuario
Ver [docs/historias-usuario.md](docs/historias-usuario.md)