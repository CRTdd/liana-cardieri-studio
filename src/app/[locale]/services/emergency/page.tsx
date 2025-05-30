import { Metadata } from 'next';
import ServiceDetail from '@/components/ServiceDetail';
import { servicePagesData } from '@/data/servicePagesData';

interface EmergencyPageProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params }: EmergencyPageProps): Promise<Metadata> {
  const serviceData = servicePagesData['emergency'];
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

export default function EmergencyPage({ params }: EmergencyPageProps) {
  return <ServiceDetail slug="emergency" locale={params.locale} />;
} 