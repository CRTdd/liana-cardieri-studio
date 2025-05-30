import { Metadata } from 'next';
import ServiceDetail from '@/components/ServiceDetail';
import { servicePagesData } from '@/data/servicePagesData';

interface EndodonticPageProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params }: EndodonticPageProps): Promise<Metadata> {
  const serviceData = servicePagesData['endodontic'];
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

export default function EndodonticPage({ params }: EndodonticPageProps) {
  return <ServiceDetail slug="endodontic" locale={params.locale} />;
} 