const newsModel = require("../models/newsModel");

const getAllNews = (req, res) => {
  res.json(newsModel.getAllNews());
};

const getNewsById = (req, res) => {
  const newsItem = newsModel.getNewsById(req.params.id);
  if (!newsItem) return res.status(404).json({ error: "Notícia não encontrada" });
  res.json(newsItem);
};

const createNews = (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ error: "Título e descrição são obrigatórios" });
  }

  const newNews = newsModel.createNews(title, description);
  res.status(201).json(newNews);
};

const updateNews = (req, res) => {
  const { title, description } = req.body;
  const updatedNews = newsModel.updateNews(req.params.id, title, description);

  if (!updatedNews) return res.status(404).json({ error: "Notícia não encontrada" });
  res.json(updatedNews);
};

const deleteNews = (req, res) => {
  const success = newsModel.deleteNews(req.params.id);
  if (!success) return res.status(404).json({ error: "Notícia não encontrada" });

  res.status(204).send();
};

module.exports = { getAllNews, getNewsById, createNews, updateNews, deleteNews };
