import { useState } from 'react';
import ImageEdit from '../ImageEdit/ImageEdit';
import './ImageItem.css';

function ImageItem({ image, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(image.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  }

  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    onEdit(id, newTitle);
  }

  let content = <h3>{ image.title }</h3>;
  if (showEdit) {
    content = <ImageEdit onSubmit={handleSubmit} image={image} />;
  }

  return (
    <div className="image-show">
      <img alt="img" src={`https://picsum.photos/seed/${image.id}/300/200`} />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ImageItem;
