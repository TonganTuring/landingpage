'use client'

import Image from 'next/image'
import Link from 'next/link'

interface LocationCardProps {
  imageSrc: string
  imageAlt: string
  title: string
  address: string
  href?: string
}

export function LocationCard({ 
  imageSrc, 
  imageAlt, 
  title, 
  address,
  href = '#' 
}: LocationCardProps) {
  return (
    <Link href={href} className="location-card-link">
      <div className="location-card">
        <Image 
          src={imageSrc}
          alt={imageAlt}
          width={400}
          height={300}
          className="location-image"
        />
        <h3>{title}</h3>
        <p>{address}</p>
      </div>
    </Link>
  )
}

