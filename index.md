# Portafolio — Efrain Rivera Cadena

**Backend senior** · integración de APIs · Java / .NET · SQL y ETL · CDMX  
Hands-on aunque el título diga arquitecto: código, contratos y entregas.

[LinkedIn](https://www.linkedin.com/in/riveraec/) · [GitHub](https://github.com/riveraec) · [Perfil](perfil.md) · [Experiencia](experiencia.md)

Backend con más de 6 años en APIs, microservicios e integración. Base fuerte en **.NET**; foco reciente en **Java / Spring Boot** y **Python** (ETL + FastAPI). Sector financiero.

---

## Trayectoria (resumen)

**Grupo financiero retail**

| Rol | Período | Enfoque |
|-----|---------|---------|
| Arquitecto de software *(con desarrollo)* | 2025 – presente | Java 21, Spring Boot, Gradle, AWS |
| Jefe de desarrollo | 2024 – 2025 | C#, .NET Core, IIS, microservicios |
| Desarrollador .NET senior | 2021 – 2024 | ASP.NET Web API, SQL Server, SSIS |

**Rol actual**

- Servicios Java/Spring en AWS (EC2, Lambda, RDS, secretos) con desarrollo diario, no solo diseño en papel.
- Contratos REST/OpenAPI e integración entre servicios internos y externos.
- Criterios de solución (límites de servicio, viabilidad en nube) y continuidad de estándares / revisiones de APIs críticas.

**Antes:** liderazgo de 3–5 personas; APIs .NET, SQL Server (SP, CTE, MERGE) y ETL/SSIS. Detalle por rol: [perfil.md](perfil.md).

---

## Lenguajes

| Lenguaje | Nivel | Experiencia |
|----------|-------|-------------|
| **C# / .NET** | Avanzado | 6+ años — APIs, microservicios, SQL Server |
| **Java / Spring Boot** | Intermedio-avanzado | Microservicios, bibliotecas, REST/SOAP |
| **Python** | Intermedio | ETL, FastAPI, automatización |
| **SQL** | Avanzado | CTE, MERGE, window functions, SP, índices, planes, ETL |
| **Node.js** | Intermedio | APIs con Express |

---

## Caso destacado — datos → pipeline → API

Un sistema en dos repos: el batch carga y resume; la API dispara corridas y consulta el resultado.

![ETL + API de orquestación](assets/patron-etl-api.png)

| Pieza | Repo | Qué demuestra |
|-------|------|----------------|
| Pipeline | [etl-reportes](https://github.com/riveraec/etl-reportes) | CSV → pandas → SQLite, idempotencia por lote, resumen diario, pytest |
| API fina | [reportes-api](https://github.com/riveraec/reportes-api) | FastAPI: `POST /runs`, `GET /resumen`, health, OpenAPI, tests |

**Probar en local:** venv + `pip install -e .` en cada repo → `uvicorn reportes_api.main:app --reload` → `/docs` y `GET /resumen`.

---

## Otros demos (selección)

**Integración Java** — auth JWT + productos + cliente HTTP resiliente:

- [auth-api](https://github.com/riveraec/auth-api) · [productos-api](https://github.com/riveraec/productos-api) · [cliente-servicios-remotos](https://github.com/riveraec/cliente-servicios-remotos) (OpenFeign, retry, pool, WireMock)

**.NET** — [indicadores-api](https://github.com/riveraec/indicadores-api): .NET 8, EF Core, filtros, resumen, ProblemDetails, health, xUnit.

Lista completa y contexto: [perfil.md](perfil.md).

---

## Patrones

### Capas de una API REST

Controlador → servicio → repositorio → BD.

![Capas API REST](assets/patron-api-rest.png)

### Microservicio hexagonal

Dominio en el centro; adaptadores para HTTP, persistencia y externos.

![Microservicio hexagonal](assets/patron-microservicios.png)

### Flujo JWT

Login → Bearer → recurso protegido. Demo: [auth-api](https://github.com/riveraec/auth-api).

![Flujo JWT](assets/patron-jwt-flujo.png)

### ETL + API de orquestación

El batch no es la API: la API dispara y consulta.

![ETL + API](assets/patron-etl-api.png)

---

## Stack

**Lenguajes:** Java 21, C#, Python, JavaScript, SQL  
**Frameworks:** Spring Boot, .NET / ASP.NET Web API, FastAPI, Express  
**Datos:** SQL Server, Oracle, SQLite, EF Core, LINQ, SSIS, pandas · CTE, MERGE, window functions, SP, índices  
**Integración:** REST, SOAP, JWT, OpenAPI, OpenFeign  
**Herramientas:** Git, GitLab, Gradle, Maven, NuGet, Postman, Docker, AWS (EC2, Lambda, RDS)

---

## Qué busco

Rol de **desarrollador backend** (Java y/o .NET), con integración de APIs, SQL sólido y datos/ETL, en equipos con código limpio y entrega continua. CDMX / remoto según el rol.

[linkedin.com/in/riveraec](https://www.linkedin.com/in/riveraec/) · [github.com/riveraec](https://github.com/riveraec)

*Última actualización: agosto 2026*
