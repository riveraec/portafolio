# Portafolio — Efrain Rivera Cadena

**Desarrollador Backend** · Java · C# · Python · Node.js · CDMX  
[LinkedIn](https://www.linkedin.com/in/riveraec/) · [GitHub](https://github.com/riveraec)

Backend con más de 6 años en APIs, integración y microservicios. Base fuerte en **.NET**; trabajo reciente en **Java / Spring Boot** y **Python** (ETL + FastAPI). Sector financiero.

CV extendido: [perfil.md](perfil.md) · Competencias por área: [experiencia.md](experiencia.md)

---

## Trayectoria (resumen)

**Grupo financiero retail**

| Rol | Período | Enfoque |
|-----|---------|---------|
| Arquitecto de software *(con desarrollo)* | 2025 – presente | Java 21, Spring Boot, Gradle, AWS |
| Jefe de desarrollo | 2024 – 2025 | C#, .NET Core, IIS, microservicios |
| Desarrollador .NET senior | 2021 – 2024 | ASP.NET Web API, SQL Server, SSIS |

**Rol actual — aporte típico**

- Diseño e implementación de servicios Java/Spring en nube (AWS), con código en el día a día.
- Contratos REST/OpenAPI e integración entre servicios; evaluación técnica de soluciones backend.
- Continuidad de estándares de capas, revisiones y entregas de APIs críticas.

**Antes:** liderazgo de 3–5 personas (jefe); APIs .NET, SQL Server y ETL/SSIS (senior). Detalle con bullets por rol en [perfil.md](perfil.md).

---

## Lenguajes

| Lenguaje | Nivel | Experiencia |
|----------|-------|-------------|
| **C# / .NET** | Avanzado | 6+ años — APIs, microservicios, SQL Server |
| **Java / Spring Boot** | Intermedio-avanzado | Microservicios, bibliotecas, REST/SOAP |
| **Python** | Intermedio | ETL, FastAPI, automatización |
| **Node.js** | Intermedio | APIs con Express |
| **SQL** | Avanzado | Consultas, SP, ETL |

---

## Caso destacado — datos → pipeline → API

Sistema demo en dos repos: el ETL carga y resume; la API dispara corridas y consulta el resultado.

![ETL + API de orquestación](assets/patron-etl-api.png)

| Pieza | Repo | Qué demuestra |
|-------|------|----------------|
| Pipeline | [etl-reportes](https://github.com/riveraec/etl-reportes) | CSV → pandas → SQLite, idempotencia por lote, resumen diario, pytest |
| API fina | [reportes-api](https://github.com/riveraec/reportes-api) | FastAPI: `POST /runs`, `GET /resumen`, health, OpenAPI, tests |

---

## Otros proyectos demo

**Integración (Java)**

- [**auth-api**](https://github.com/riveraec/auth-api) — JWT, Spring Security, BCrypt, endpoint `/me`.
- [**productos-api**](https://github.com/riveraec/productos-api) — CRUD Spring Boot, JPA, validaciones, OpenAPI.
- [**cliente-servicios-remotos**](https://github.com/riveraec/cliente-servicios-remotos) — OpenFeign reutilizable (retry, pool, WireMock); demo contra auth + productos.

**.NET**

- [**indicadores-api**](https://github.com/riveraec/indicadores-api) — .NET 8, EF Core, filtros, resumen, ProblemDetails, health, xUnit.

---

## Patrones (cómo pienso el backend)

Diagramas en PNG (compatible con GitHub Pages). Fuentes Mermaid en `assets/*.mmd`.

### Capas de una API REST

Controlador → servicio → repositorio → BD. Separar exposición, reglas y datos.

![Capas API REST](assets/patron-api-rest.png)

### Microservicio hexagonal

Dominio en el centro; adaptadores para HTTP, persistencia y externos.

![Microservicio hexagonal](assets/patron-microservicios.png)

### Flujo JWT

Login → token → llamada con Bearer → validación en la API protegida. Demo: [auth-api](https://github.com/riveraec/auth-api).

![Flujo JWT](assets/patron-jwt-flujo.png)

### ETL + API de orquestación

El batch no es la API: la API dispara y consulta. Demo: [etl-reportes](https://github.com/riveraec/etl-reportes) + [reportes-api](https://github.com/riveraec/reportes-api).

---

## Stack principal

**Lenguajes:** Java 21, C#, Python, JavaScript, SQL  
**Frameworks:** Spring Boot, .NET Core / ASP.NET Web API, FastAPI, Express  
**Datos:** SQL Server, Oracle, SQLite, EF Core, LINQ, SSIS, pandas  
**Integración:** REST, SOAP, JWT, OpenAPI/Swagger, OpenFeign  
**Herramientas:** Git, GitLab, Gradle, Maven, NuGet, Postman, Docker, AWS (EC2, Lambda, RDS)

---

## Contacto

[linkedin.com/in/riveraec](https://www.linkedin.com/in/riveraec/) · [github.com/riveraec](https://github.com/riveraec)

*Última actualización: agosto 2026*
