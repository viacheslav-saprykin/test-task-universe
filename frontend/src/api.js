const fetch = require('node-fetch');

async function fetchStrapiData() {
  const url = 'https://http://localhost:1337/api/books';
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Strapi API request error');
    }
    return await response.json();
  } catch (error) {
    console.error('Error loading data from the Strapi API:', error);
    throw error;
  }
}

module.exports = { fetchStrapiData };