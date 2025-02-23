# **Documentación del Parcial - Aseguramiento de la Calidad del Software - Pruebas Unitarias**

## **Datos del Estudiante**
- **Nombre:** Cristian Eulises Sánchez Ramírez  
- **Matrícula:** 25-0688  

---

## **Descripción de la Actividad**
Este documento forma parte del **parcial de la asigntura Aseguramiento de la Calidad del Software**. La actividad consiste en evaluar y aplicar los conocimientos adquiridos a lo largo del curso mediante la ejecución de pruebas sobre una API pública.

El parcial se divide en dos entregables:

1. **Documento de Pruebas:** Unificación de todas las pruebas realizadas a lo largo del curso en un único documento estructurado.
2. **Entrega del Código:** Implementación de pruebas unitarias sobre una API pública con Jest y Supertest, validando su funcionalidad y generando logs para análisis.

### **Mandato de la Actividad**
> "Dado los conocimientos adquiridos a lo largo de la asignatura, usted debe unificar en un documento lo aprendido. Además, debe realizar pruebas unitarias sobre una API pública y proporcionar el enlace a su código."

---

## **Estructura del Proyecto**
El proyecto contiene los siguientes archivos:

- **`api.test.js`** → Archivo que contiene las 15 pruebas unitarias para la API pública JSONPlaceholder.
- **`package.json`** → Configuración del proyecto y dependencias.
- **`README.md`** → Documentación general del parcial.

---

## **Casos de Prueba Implementados**

| # | Caso de Prueba | Descripción | Resultado Esperado |
|---|--------------|-------------|--------------------|
| 1 | Obtener todos los posts | Validar que la API devuelva una lista de posts | Código 200 y lista con datos |
| 2 | Obtener un post por ID | Consultar un post específico por su ID | Código 200 y objeto con el ID solicitado |
| 3 | Obtener comentarios de un post | Validar que se obtienen los comentarios asociados a un post | Código 200 y lista de comentarios |
| 4 | Obtener todos los usuarios | Verificar la lista de usuarios registrados en la API | Código 200 y lista de usuarios |
| 5 | Obtener un usuario por ID | Consultar un usuario específico por su ID | Código 200 y datos del usuario |
| 6 | Obtener los álbumes de un usuario | Verificar los álbumes asociados a un usuario | Código 200 y lista de álbumes |
| 7 | Obtener las fotos de un álbum | Validar la lista de fotos dentro de un álbum | Código 200 y lista de fotos |
| 8 | Crear un nuevo post | Enviar un nuevo post y verificar la respuesta | Código 201 y objeto creado |
| 9 | Crear un nuevo comentario en un post | Publicar un comentario en un post y validar la respuesta | Código 201 y comentario creado |
| 10 | Actualizar un post existente | Modificar un post y verificar la actualización | Código 200 y objeto actualizado |
| 11 | Actualizar parcialmente un post con PATCH | Modificar parcialmente un post | Código 200 y campo modificado |
| 12 | Eliminar un post | Intentar eliminar un post existente | Código 200 y objeto vacío |
| 13 | Verificar error en un usuario inexistente | Consultar un usuario que no existe | Código 404 |
| 14 | Intentar crear un post sin datos | Enviar un post vacío y validar la respuesta | Código 201 (JSONPlaceholder asigna valores predeterminados) |
| 15 | Intentar eliminar un usuario inexistente | Intentar eliminar un usuario que no existe | Código 200 y objeto vacío |


---

## **Tecnologías Utilizadas**
- **Node.js** → Entorno de ejecución.
- **Jest** → Framework de pruebas unitarias.
- **Supertest** → Librería para realizar peticiones HTTP en pruebas automatizadas.

---

## **Ejecución de las Pruebas**
Para ejecutar las pruebas unitarias, seguir estos pasos:

1. Instalar las dependencias necesarias:
   ```bash
   npm install
   ```
2. Ejecutar las pruebas con Jest:
   ```bash
   npm test -- --verbose
   ```

Esto generará un reporte detallado de las pruebas y mostrará los logs de las respuestas de la API.

---

## **Enlace al Documento de Pruebas**
[🔗 **Documento de Pruebas (PDF)**](https://unibedom-my.sharepoint.com/my?id=%2Fpersonal%2Fcsanchez32%5Fest%5Funibe%5Fedu%5Fdo%2FDocuments%2F25%2D0688%20Primer%20Parcial%2FCristian%20Sanchez%2025%2D0688%20%2D%20Actividad%20final%20primer%20parcial%2Epdf&parent=%2Fpersonal%2Fcsanchez32%5Fest%5Funibe%5Fedu%5Fdo%2FDocuments%2F25%2D0688%20Primer%20Parcial&ga=1)

---

✍️ **Cristian Eulises Sánchez Ramírez - 25-0688**

