import ImageItem from '../ImageItem/ImageItem';


function ImageList({ images, onDelete, onEdit }) {
  const renderedImages = images.map((image) => {
    return (
      <ImageItem onEdit={onEdit} onDelete={onDelete} key={image.id} image={image} />
    );
  });

  return <div className="image-list">{renderedImages}</div>;
}

export default ImageList;
