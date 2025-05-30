import { Metadata } from 'next';
import ServiceDetail from '@/components/ServiceDetail';
import { servicePagesData } from '@/data/servicePagesData';

interface CrownsBridgesPageProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params }: CrownsBridgesPageProps): Promise<Metadata> {
  const serviceData = servicePagesData['crowns-bridges'];
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

export default function CrownsBridgesPage({ params }: CrownsBridgesPageProps) {
  return <ServiceDetail slug="crowns-bridges" locale={params.locale} />;
} 