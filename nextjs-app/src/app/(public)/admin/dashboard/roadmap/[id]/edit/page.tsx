import { notFound } from 'next/navigation';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import { RoadmapForm } from '../../RoadmapForm';

interface EditRoadmapPageProps {
  params: Promise<{ id: string }>;
}

async function getRoadmapItem(id: string) {
  const payload = await getPayload({ config: configPromise });
  try {
    return await payload.findByID({
      collection: 'roadmap-items',
      id,
    });
  } catch {
    return null;
  }
}

export default async function EditRoadmapPage({ params }: EditRoadmapPageProps) {
  const { id } = await params;
  const item = await getRoadmapItem(id);

  if (!item) {
    notFound();
  }

  return <RoadmapForm initialData={item} isEdit />;
}
