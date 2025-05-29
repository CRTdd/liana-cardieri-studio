import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Patient Testimonials - Kitchener Smiles',
    description: 'Read what our happy patients have to say about their experiences at Kitchener Smiles with Dr. Liana Cardieri and her team.',
};

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
