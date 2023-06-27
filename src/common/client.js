import { QdrantClient } from '@qdrant/js-client-rest';

export default function qdrantClient({ apiKey }) {
  let url = import.meta.env.VITE_QDRANT_URL;

  let options = {
    url,
    apiKey,
    port,
  };
  
  return new QdrantClient(options)
}
