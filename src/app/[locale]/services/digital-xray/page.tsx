import { Metadata } from 'next';
import ServiceDetail from '@/components/ServiceDetail';
import { servicesData } from '@/data/servicesData';

interface DigitalXrayPageProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params }: DigitalXrayPageProps): Promise<Metadata> {
  const service = servicesData.find(s => s.id === 'digital-xray');
  if (!service) {
    return { title: 'Service Not Found' };
  }
  return {
    title: 'Digital X-Ray Imaging - Dr. Liana Cardieri Dental Services',
    description: 'State-of-the-art digital x-ray imaging for precise dental diagnosis. Lower radiation exposure, instant results, and detailed imaging for better treatment planning.',
    keywords: 'digital x-ray, dental imaging, dental radiography, digital radiography, dental diagnostics, dental x-ray, low radiation x-ray, dental scan',
    openGraph: {
      title: 'Digital X-Ray Imaging - Dr. Liana Cardieri Dental Services',
      description: 'State-of-the-art digital x-ray imaging for precise dental diagnosis. Lower radiation exposure, instant results, and detailed imaging for better treatment planning.',
      type: 'website',
      locale: params.locale,
    },
  };
}

export default function DigitalXrayPage({ params }: DigitalXrayPageProps) {
  return <ServiceDetail serviceId="digital-xray" locale={params.locale} />;
} 