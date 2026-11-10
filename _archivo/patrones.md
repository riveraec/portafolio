# Patrones

[← Volver al portafolio](index.md)

## Capas de una API REST

Controlador → servicio → repositorio → BD.

![Capas API REST](../assets/diagrams/patron-api-rest.png)

## Microservicio hexagonal

Dominio, adaptadores, APIs y persistencia.

![Microservicio hexagonal](../assets/diagrams/patron-microservicios.png)

## Flujo JWT

Login → token Bearer → recurso protegido. [auth-api](https://github.com/riveraec/auth-api).

![Flujo JWT](../assets/diagrams/patron-jwt-flujo.png)

## ETL y API

El pipeline carga datos; la API orquesta y consulta. [etl-reportes](https://github.com/riveraec/etl-reportes) · [reportes-api](https://github.com/riveraec/reportes-api).

![ETL + API](../assets/diagrams/patron-etl-api.png)

[← Volver al portafolio](index.md)
