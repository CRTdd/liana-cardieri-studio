import { Metadata } from 'next';
import ServiceDetail from '@/components/ServiceDetail';
import { servicePagesData } from '@/data/servicePagesData';

interface ImplantsPageProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params }: ImplantsPageProps): Promise<Metadata> {
  const serviceData = servicePagesData['implants'];
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

export default function ImplantsPage({ params }: ImplantsPageProps) {
  return <ServiceDetail slug="implants" locale={params.locale} />;
} 