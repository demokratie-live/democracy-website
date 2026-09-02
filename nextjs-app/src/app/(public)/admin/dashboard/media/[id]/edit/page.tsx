import { notFound } from 'next/navigation';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import { MediaForm } from '../../MediaForm';

interface EditMediaPageProps {
  params: Promise<{ id: string }>;
}

async function getMedia(id: string) {
  const payload = await getPayload({ config: configPromise });
  try {
    const result = await payload.findByID({
      collection: 'media-coverage',
      id,
    });
    return result;
  } catch {
    return null;
  }
}

export default async function EditMediaPage({ params }: EditMediaPageProps) {
  const { id } = await params;
  const media = await getMedia(id);

  if (!media) {
    notFound();
  }

  return <MediaForm initialData={media} isEdit />;
}
