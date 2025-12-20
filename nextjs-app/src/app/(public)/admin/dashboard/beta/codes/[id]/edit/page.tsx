import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { BetaCodeForm } from '../../BetaCodeForm';

interface EditBetaCodePageProps {
  params: Promise<{ id: string }>;
}

async function getBetaCode(id: string) {
  return prisma.betaCode.findUnique({
    where: { id },
  });
}

export default async function EditBetaCodePage({ params }: EditBetaCodePageProps) {
  const { id } = await params;
  const code = await getBetaCode(id);

  if (!code) {
    notFound();
  }

  return <BetaCodeForm initialData={code} isEdit />;
}
