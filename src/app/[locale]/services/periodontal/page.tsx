import { Metadata } from 'next';
import ServiceDetail from '@/components/ServiceDetail';
import { servicePagesData } from '@/data/servicePagesData';

interface PeriodontalPageProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params }: PeriodontalPageProps): Promise<Metadata> {
  const serviceData = servicePagesData['periodontal'];
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

export default function PeriodontalPage({ params }: PeriodontalPageProps) {
  return <ServiceDetail slug="periodontal" locale={params.locale} />;
} 