import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { FAQForm } from '../../FAQForm';

interface EditFAQPageProps {
  params: Promise<{ id: string }>;
}

async function getFaq(id: string) {
  return prisma.faq.findUnique({
    where: { id },
  });
}

export default async function EditFAQPage({ params }: EditFAQPageProps) {
  const { id } = await params;
  const faq = await getFaq(id);

  if (!faq) {
    notFound();
  }

  return <FAQForm initialData={faq} isEdit />;
}
