import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { RoadmapForm } from '../../RoadmapForm';

interface EditRoadmapPageProps {
  params: Promise<{ id: string }>;
}

async function getRoadmapItem(id: string) {
  return prisma.roadmap.findUnique({
    where: { id },
  });
}

export default async function EditRoadmapPage({ params }: EditRoadmapPageProps) {
  const { id } = await params;
  const item = await getRoadmapItem(id);

  if (!item) {
    notFound();
  }

  return <RoadmapForm initialData={item} isEdit />;
}
