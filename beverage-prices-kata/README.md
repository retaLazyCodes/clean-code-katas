# Kata de Precios de Bebidas

Este proyecto consiste en la resolución de la siguiente kata:  
👉 [Beverage Prices Kata](https://github.com/Codesai/practice-program-java/tree/master/katas_java/05-refactoring-awful-inheritance-use-with-beverage-prices-kata)

## Objetivo

El código original calcula los precios de las bebidas servidas en una cafetería.  
El objetivo de la kata es **agregar un suplemento opcional de canela**, que cuesta **0,05 €**, a todas las bebidas del catálogo.

## Enfoque

La implementación original está basada fuertemente en herencia.  
Este ejercicio propone **refactorizar el diseño reemplazando la herencia por composición**, siguiendo principios de buen diseño de software como:

- **Preferir composición sobre herencia**
- **Principio de Responsabilidad Única**
- **Principio de Abierto/Cerrado**

## Notas

- Esta implementación **no** sigue una metodología estricta de TDD.
- El foco está puesto exclusivamente en la **refactorización y mejora del diseño**, sin añadir funcionalidades más allá de lo propuesto por la kata.

## Cómo ejecutar

```bash
npm install
npm test
```
