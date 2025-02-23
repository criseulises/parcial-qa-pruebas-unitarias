const request = require("supertest");

const API_URL = "https://jsonplaceholder.typicode.com";

describe("API JSONPlaceholder - Pruebas Unitarias", () => {
  // 1. Obtener todos los posts
  test("Debe obtener todos los posts", async () => {
    const res = await request(API_URL).get("/posts");
    console.log("🔹 GET /posts RESPONSE:", res.body);
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  // 2. Obtener un post por ID
  test("Debe obtener un post por ID", async () => {
    const res = await request(API_URL).get("/posts/1");
    console.log("🔹 GET /posts/1 RESPONSE:", res.body);
    expect(res.status).toBe(200);
    expect(res.body.id).toBe(1);
  });

  // 3. Obtener comentarios de un post
  test("Debe obtener los comentarios de un post", async () => {
    const res = await request(API_URL).get("/posts/1/comments");
    console.log("🔹 GET /posts/1/comments RESPONSE:", res.body);
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  // 4. Obtener todos los usuarios
  test("Debe obtener todos los usuarios", async () => {
    const res = await request(API_URL).get("/users");
    console.log("🔹 GET /users RESPONSE:", res.body);
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  // 5. Obtener un usuario por ID
  test("Debe obtener un usuario por ID", async () => {
    const res = await request(API_URL).get("/users/1");
    console.log("🔹 GET /users/1 RESPONSE:", res.body);
    expect(res.status).toBe(200);
    expect(res.body.id).toBe(1);
  });

  // 6. Obtener los álbumes de un usuario
  test("Debe obtener los álbumes de un usuario", async () => {
    const res = await request(API_URL).get("/users/1/albums");
    console.log("🔹 GET /users/1/albums RESPONSE:", res.body);
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  // 7. Obtener las fotos de un álbum
  test("Debe obtener las fotos de un álbum", async () => {
    const res = await request(API_URL).get("/albums/1/photos");
    console.log("🔹 GET /albums/1/photos RESPONSE:", res.body);
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  // 8. Crear un nuevo post
  test("Debe crear un nuevo post", async () => {
    const newPost = { title: "Test Post", body: "Contenido de prueba", userId: 1 };
    const res = await request(API_URL).post("/posts").send(newPost);
    console.log("🔹 POST /posts RESPONSE:", res.body);
    expect(res.status).toBe(201);
    expect(res.body).toMatchObject(newPost);
  });

  // 9. Crear un nuevo comentario en un post
  test("Debe crear un nuevo comentario", async () => {
    const newComment = { postId: 1, name: "QA Tester", email: "qa@test.com", body: "Comentario de prueba" };
    const res = await request(API_URL).post("/comments").send(newComment);
    console.log("🔹 POST /comments RESPONSE:", res.body);
    expect(res.status).toBe(201);
    expect(res.body).toMatchObject(newComment);
  });

  // 10. Actualizar un post existente
  test("Debe actualizar un post", async () => {
    const updatedPost = { title: "Post Actualizado", body: "Nuevo contenido", userId: 1 };
    const res = await request(API_URL).put("/posts/1").send(updatedPost);
    console.log("🔹 PUT /posts/1 RESPONSE:", res.body);
    expect(res.status).toBe(200);
    expect(res.body).toMatchObject(updatedPost);
  });

  // 11. Actualizar parcialmente un post con PATCH
  test("Debe actualizar parcialmente un post", async () => {
    const partialUpdate = { title: "Título modificado" };
    const res = await request(API_URL).patch("/posts/1").send(partialUpdate);
    console.log("🔹 PATCH /posts/1 RESPONSE:", res.body);
    expect(res.status).toBe(200);
    expect(res.body.title).toBe("Título modificado");
  });

  // 12. Eliminar un post
  test("Debe eliminar un post", async () => {
    const res = await request(API_URL).delete("/posts/1");
    console.log("🔹 DELETE /posts/1 RESPONSE:", res.body);
    expect(res.status).toBe(200);
    expect(res.body).toEqual({});
  });

  // 13. Verificar error en un usuario inexistente
  test("Debe retornar 404 si el usuario no existe", async () => {
    const res = await request(API_URL).get("/users/9999");
    console.log("🔹 GET /users/9999 RESPONSE:", res.body);
    expect(res.status).toBe(404);
  });

  //  14. Intentar crear un post sin datos (validación)
  test("Debe aceptar la creación de un post vacío y devolver valores por defecto", async () => {
    const res = await request(API_URL).post("/posts").send({});
    console.log("🔹 POST /posts (sin datos) RESPONSE:", res.body);
    expect(res.status).toBe(201); // JSONPlaceholder no falla aquí, sino que asigna valores por defecto
    expect(res.body).toHaveProperty("id"); // La API debe devolver un ID generado
  });
  

  // 15. Intentar eliminar un usuario inexistente
  test("Debe simular la eliminación de un usuario inexistente devolviendo un 200 con objeto vacío", async () => {
    const res = await request(API_URL).delete("/users/9999");
    console.log("🔹 DELETE /users/9999 RESPONSE:", res.body);
    expect(res.status).toBe(200);
    expect(res.body).toEqual({}); 
  });
});