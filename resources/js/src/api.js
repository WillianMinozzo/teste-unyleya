const axios = window.axios;

const BASE_API_URL = 'http://localhost:8000/api'

export default {
    getAllLivros: () => axios.get(`${BASE_API_URL}/livros`),
    getOneLivro: (id) => axios.get(`${BASE_API_URL}/livros/${id}`),
    addLivro: (data) => axios.post(`${BASE_API_URL}/livros`, data),
    updateLivro: (data, id) => axios.put(`${BASE_API_URL}/livros/${id}`, data),
    deleteLivro: (id) => axios.delete(`${BASE_API_URL}/livros/${id}`),

    getAllAutores: () => axios.get(`${BASE_API_URL}/autores`),
    getOneAutor: (id) => axios.get(`${BASE_API_URL}/autores/${id}`),
    addAutor: (data) => axios.post(`${BASE_API_URL}/autores`, data),
    updateAutor: (data, id) => axios.put(`${BASE_API_URL}/autores/${id}`, data),
    deleteAutor: (id) => axios.delete(`${BASE_API_URL}/autores/${id}`),
};
