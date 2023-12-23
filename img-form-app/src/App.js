import { useState } from 'react';
import ImageCreate from './components/ImageCreate/ImageCreate';
import ImageList from './components/ImageList/ImageList';
import './App.css';


function App() {
  const [images, setImages] = useState([]);

  const editImageById = (id, newTitle) => {
    const updatedImages = images.map((image) => {
      if (image.id === id) {
        return { ...image, title: newTitle };
      }

      return image;
    });

    setImages(updatedImages);
  };

  const deleteImageById = (id) => {
    const updatedImages = images.filter((image) => {
      return image.id !== id;
    });
    setImages(updatedImages);
  }

  const createImage = (title) => {
    const updatedImages = [
      ...images,
      {
        id: Math.round(Math.random() * 9999),
        title,
      },
    ]
    setImages(updatedImages);
  };

  return (
    <div className="base-app-class">
      <h1>Reading List</h1>
      {/* <ImageList onEdit={editImageById} images={images} onDelete={deleteImageById} /> */}
      <ImageCreate onCreate={createImage} />
    </div>
  );
}

export default App;
