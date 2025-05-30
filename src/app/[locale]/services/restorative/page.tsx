import { Metadata } from 'next';
import ServiceDetail from '@/components/ServiceDetail';
import { servicePagesData } from '@/data/servicePagesData';

interface RestorativePageProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params }: RestorativePageProps): Promise<Metadata> {
  const serviceData = servicePagesData['restorative'];
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

export default function RestorativePage({ params }: RestorativePageProps) {
  return <ServiceDetail slug="restorative" locale={params.locale} />;
} 