const PB_URL = import.meta.env.VITE_PB_URL;

export default function getPbImage({ collectionId, id, thumbnail }) {
  return `${PB_URL}/api/files/${collectionId}/${id}/${thumbnail}`;
}

export function getPbImageArray({ collectionId, id, images }) {
  return images.map(
    (image) => `${PB_URL}/api/files/${collectionId}/${id}/${image}`
  );
}
