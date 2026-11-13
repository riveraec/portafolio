# Portafolio — Efrain Rivera Cadena

**Desarrollador backend** · Java · C# · Python · Node.js · CDMX  

[LinkedIn](https://www.linkedin.com/in/riveraec/) · [GitHub](https://github.com/riveraec) · [Perfil](perfil.md) · [Experiencia](experiencia.md) · [Patrones](patrones.md)

Más de 6 años en APIs, microservicios e integración. Experiencia principal en **.NET**; trabajo reciente con **Java / Spring Boot** y **Python** (ETL, FastAPI). Sector financiero.

---

## Trayectoria

**Grupo financiero retail**

| Rol | Período | Stack |
|-----|---------|-------|
| Arquitecto de soluciones | 2025 – presente | Java 21, Spring Boot, Gradle, AWS, Terraform |
| Jefe de desarrollo | 2024 – 2025 | C#, .NET Core, Java / Spring Boot, Kafka, IIS |
| Desarrollador Backend | 2021 – 2024 | ASP.NET Web API, Java, SQL Server, SSIS, Tableau |

**Rol actual**

- Servicios Java/Spring en AWS: ECS Fargate, Lambda, RDS (y EC2 cuando aplica).
- Integración REST/OpenAPI entre sistemas internos; infraestructura con Terraform.
- Estándares de capas, revisión de código y seguimiento de APIs en producción.

**Antes:** equipo de 5 en APIs .NET y Java (vinculación Afore; Kafka de CECOS y Algorithia); SQL Server (SP, CTE, MERGE), ETL/SSIS y Tableau. Detalle: [perfil.md](perfil.md).

---

## Lenguajes

| Lenguaje | Nivel | Experiencia |
|----------|-------|-------------|
| **C# / .NET** | Avanzado | 6+ años — APIs, microservicios, SQL Server |
| **Java / Spring Boot** | Intermedio-avanzado | Microservicios, bibliotecas, REST/SOAP |
| **Python** | Intermedio | ETL, FastAPI, automatización |
| **SQL** | Avanzado | CTE, MERGE, window functions, SP, índices, planes, ETL · [ejemplos](https://github.com/riveraec/etl-reportes/tree/main/sql) |
| **Node.js** | Intermedio | APIs Express · [eventos-api](https://github.com/riveraec/eventos-api) |

---

## Proyecto destacado — ETL y API

Pipeline que carga y resume datos; API que dispara corridas y consulta el resultado.

| Pieza | Repo | Descripción |
|-------|------|-------------|
| Pipeline | [etl-reportes](https://github.com/riveraec/etl-reportes) | CSV → pandas → SQLite, idempotencia por lote, resumen diario, pytest · [sql/](https://github.com/riveraec/etl-reportes/tree/main/sql) |
| API | [reportes-api](https://github.com/riveraec/reportes-api) | FastAPI: `POST /runs`, `GET /resumen`, health, OpenAPI, tests |

Local: venv + `pip install -e .` → `uvicorn reportes_api.main:app --reload` → `/docs` y `GET /resumen`.

---

## Otros proyectos

**Node.js** — [eventos-api](https://github.com/riveraec/eventos-api): Express, Zod, SQLite, idempotencia por `id`, SuperTest, Docker. `GET /health` (200); `POST /eventos` 201 / 200 idempotente.

**Integración Java** — JWT, CRUD (SQL y Mongo) y cliente HTTP:

- [auth-api](https://github.com/riveraec/auth-api) · [productos-api](https://github.com/riveraec/productos-api) · [catalogo-mongo-api](https://github.com/riveraec/catalogo-mongo-api) (MongoDB) · [cliente-servicios-remotos](https://github.com/riveraec/cliente-servicios-remotos) (OpenFeign, retry, pool, WireMock)

**.NET** — [indicadores-api](https://github.com/riveraec/indicadores-api): .NET 8, EF Core, filtros, resumen, ProblemDetails, health, xUnit.

Más detalle: [perfil.md](perfil.md).

---

## Patrones

### Capas de una API REST

Controlador → servicio → repositorio → BD.

Hexagonal, JWT y ETL/API: [patrones.md](patrones.md).

---

## Stack

**Lenguajes:** Java 21, C#, Python, JavaScript, SQL  
**Frameworks:** Spring Boot, .NET / ASP.NET Web API, FastAPI, Express  
**Datos:** SQL Server, Oracle, SQLite, MongoDB, EF Core, LINQ, SSIS, Tableau, pandas · CTE, MERGE, window functions, SP, índices  
**Integración:** REST, SOAP, JWT, OpenAPI, OpenFeign, Kafka  
**Herramientas:** Git, GitLab, Gradle, Maven, NuGet, Postman, Docker, AWS (EC2, ECS Fargate, Lambda, RDS), Terraform

---

## Qué busco

Desarrollador backend, APIs, SQL y procesos de datos. CDMX o remoto.

[linkedin.com/in/riveraec](https://www.linkedin.com/in/riveraec/) · [github.com/riveraec](https://github.com/riveraec)

*Última actualización: noviembre 2026*
