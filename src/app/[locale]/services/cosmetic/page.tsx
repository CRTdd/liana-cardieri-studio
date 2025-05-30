import { Metadata } from 'next';
import ServiceDetail from '@/components/ServiceDetail';
import { servicePagesData } from '@/data/servicePagesData';

interface CosmeticPageProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params }: CosmeticPageProps): Promise<Metadata> {
  const serviceData = servicePagesData['cosmetic'];
  if (!serviceData) {
    return { title: 'Service Not Found' };
  }

  return {
    title: serviceData.metadata.title,
    description: serviceData.metadata.description,
    keywords: serviceData.metadata.keywords,
    openGraph: {
      ...serviceData.metadata.openGraph,
      locale: params.locale,
    },
  };
}

export default function CosmeticPage({ params }: CosmeticPageProps) {
  return <ServiceDetail slug="cosmetic" locale={params.locale} />;
} 