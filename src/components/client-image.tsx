'use client';

import Image from 'next/image';
import { localImageLoader } from './image-loader';

interface ClientImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  sizes?: string;
  priority?: boolean;
  imageHint?: string;
}

export function ClientImage({ src, alt, fill, className, sizes, priority, imageHint }: ClientImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      className={className}
      sizes={sizes}
      priority={priority}
      loader={localImageLoader}
      data-ai-hint={imageHint}
    />
  );
} 