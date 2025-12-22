import { notFound } from 'next/navigation';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import { BetaCodeForm } from '../../BetaCodeForm';

interface EditBetaCodePageProps {
  params: Promise<{ id: string }>;
}

async function getBetaCode(id: string) {
  const payload = await getPayload({ config: configPromise });
  try {
    return await payload.findByID({
      collection: 'beta-codes',
      id,
    });
  } catch {
    return null;
  }
}

export default async function EditBetaCodePage({ params }: EditBetaCodePageProps) {
  const { id } = await params;
  const code = await getBetaCode(id);

  if (!code) {
    notFound();
  }

  return <BetaCodeForm initialData={code} isEdit />;
}
