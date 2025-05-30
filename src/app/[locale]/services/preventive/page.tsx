import { Metadata } from 'next';
import ServiceDetail from '@/components/ServiceDetail';
import { servicePagesData } from '@/data/servicePagesData';

interface PreventivePageProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params }: PreventivePageProps): Promise<Metadata> {
  const serviceData = servicePagesData['preventive'];
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

export default function PreventivePage({ params }: PreventivePageProps) {
  return <ServiceDetail slug="preventive" locale={params.locale} />;
} 