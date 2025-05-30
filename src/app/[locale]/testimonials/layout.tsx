import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Patient Testimonials - Dr. Liana Cardieri',
    description: 'Read what our happy patients have to say about their experiences with Dr. Liana Cardieri and her team.',
};

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
