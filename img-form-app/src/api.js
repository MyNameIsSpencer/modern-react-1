import axios from 'axios';

const searchImages = async (searchTerm) => {
  urlStr = 'https://api.unsplash.com/search/photos';
  authStr = 'Client-ID NCa2JjvHjIMvxb8TYqjqJpdg-MBtzeZTBS_T3ki67zM';

  const response = await axios.get( urlStr, {
    headers: {
      Authorization: authStr,
    },
    body: {
      query: searchTerm,
    }
  });

  return response.data.results;
};

export default searchImages;


