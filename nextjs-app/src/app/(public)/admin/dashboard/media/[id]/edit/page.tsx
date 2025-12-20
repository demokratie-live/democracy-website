import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { MediaForm } from '../../MediaForm';

interface EditMediaPageProps {
  params: Promise<{ id: string }>;
}

async function getMedia(id: string) {
  return prisma.media.findUnique({
    where: { id },
  });
}

export default async function EditMediaPage({ params }: EditMediaPageProps) {
  const { id } = await params;
  const media = await getMedia(id);

  if (!media) {
    notFound();
  }

  return <MediaForm initialData={media} isEdit />;
}
