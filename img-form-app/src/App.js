import { useState } from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import searchImages from './api';

function App() {
  const [imageArr, setImageArr] = useState([]);

  const handleSubmit = async (searchTerm) => {
    const result = await searchImages(searchTerm);
    setImageArr(result);
  }

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={imageArr} />
    </div>
  );
}

export default App;

