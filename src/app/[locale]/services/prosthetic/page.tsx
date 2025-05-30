import { Metadata } from 'next';
import ServiceDetail from '@/components/ServiceDetail';
import { servicePagesData } from '@/data/servicePagesData';

interface ProstheticPageProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params }: ProstheticPageProps): Promise<Metadata> {
  const serviceData = servicePagesData['prosthetic'];
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

export default function ProstheticPage({ params }: ProstheticPageProps) {
  return <ServiceDetail slug="prosthetic" locale={params.locale} />;
} 