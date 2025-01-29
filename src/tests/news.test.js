const request = require("supertest");
const app = require("../app.js"); 

describe("POST /news", () => {
  it("should create a news item and return the created news", async () => {
    const newNews = {
      title: "Notícia Importante",
      description: "Descrição detalhada da notícia importante.",
    };

    const response = await request(app)
      .post("/news")
      .send(newNews)
      .expect("Content-Type", /json/)
      .expect(201); // Espera o status 201, que é para criação bem-sucedida

    // Verifica se o título e a descrição estão corretos na resposta
    expect(response.body.title).toBe(newNews.title);
    expect(response.body.description).toBe(newNews.description);
    expect(response.body.id).toBeDefined(); // A id deve ser gerada automaticamente

    // Verifica se o corpo da resposta contém os dados da nova notícia
  });

  it("should return an error if title or description are missing", async () => {
    const response = await request(app)
      .post("/news")
      .send({ title: "", description: "" })
      .expect("Content-Type", /json/)
      .expect(400); // Espera o status 400, que é para erro de validação

    expect(response.body.error).toBe("Título e descrição são obrigatórios");
  });
});
