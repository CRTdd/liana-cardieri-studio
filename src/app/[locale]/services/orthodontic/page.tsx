import { Metadata } from 'next';
import ServiceDetail from '@/components/ServiceDetail';
import { servicePagesData } from '@/data/servicePagesData';

interface OrthodonticPageProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params }: OrthodonticPageProps): Promise<Metadata> {
  const serviceData = servicePagesData['orthodontic'];
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

export default function OrthodonticPage({ params }: OrthodonticPageProps) {
  return <ServiceDetail slug="orthodontic" locale={params.locale} />;
} 