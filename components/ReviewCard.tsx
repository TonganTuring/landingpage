'use client'

interface ReviewCardProps {
  name: string
  rating: number
  date: string
  review: string
}

export function ReviewCard({ name, rating, date, review }: ReviewCardProps) {
  return (
    <div className="testimonial-card">
      <div className="star-rating">
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} className="star">★</span>
        ))}
      </div>
      <h3>{name}</h3>
      <p className="review-date">{date}</p>
      <p className="review-text">{review}</p>
    </div>
  )
}

