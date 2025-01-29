let news = [];
let id = 1;

const getAllNews = () => news;

const getNewsById = (newsId) => news.find((n) => n.id === Number(newsId));

const createNews = (title, description) => {
  const newNews = { id: id++, title, description };
  news.push(newNews);
  return newNews;
};

const updateNews = (newsId, title, description) => {
  const index = news.findIndex((n) => n.id === Number(newsId));
  if (index === -1) return null;

  news[index] = {
    id: Number(newsId),
    title: title || news[index].title,
    description: description || news[index].description
  };
  return news[index];
};

const deleteNews = (newsId) => {
  const index = news.findIndex((n) => n.id === Number(newsId));
  if (index === -1) return false;

  news.splice(index, 1);
  return true;
};

module.exports = { getAllNews, getNewsById, createNews, updateNews, deleteNews };
