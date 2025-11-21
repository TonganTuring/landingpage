'use client'

import Link from "next/link"
import Image from 'next/image'
import { CallTodayButton } from "@/components/CallTodayButton"
import { LocationCard } from "@/components/LocationCard"
import { ReviewCard } from "@/components/ReviewCard"
import reviewsData from "@/data/reviews.json"

export default function Home() {
  // Handle smooth scrolling for navigation links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      const element = document.querySelector(href);
      if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 100;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
  };


  return (
    <main>
      <header>
        <nav className="nav">
          <div className="logo">
            <Image 
              src="/images/logo.png" 
              alt="Sarah&apos;s Assisted Living"
              width={250}
              height={100}
              priority
            />
          </div>
          <div className="nav-links">
            <a href="#why-choose" onClick={handleNavClick}>About Us</a>
            <a href="#services" onClick={handleNavClick}>Services</a>
            <a href="#testimonials" onClick={handleNavClick}>Testimonials</a>
            <a href="#locations" onClick={handleNavClick}>Locations</a>
          </div>
          <div className="nav-cta">
            <CallTodayButton />
          </div>
        </nav>
        
        <div className="hero">
          <div className="hero-content">
            <h1>Welcome to Sarah&apos;s Assisted Living</h1>
            <p>We empower seniors with 24/7 support to live life on their terms!</p>
            <div className="hero-buttons">
              <CallTodayButton fullWidth />
            </div>
          </div>
          <div className="hero-image">
            <Image
              src="/images/hero-image.jpg"
              alt="Seniors enjoying assisted living"
              width={600}
              height={300}
              priority
              className="rounded-lg"
            />
          </div>
        </div>
      </header>

      <section id="why-choose" className="why-choose">
        <div className="p-8 rounded-xl">
          <h2>Why Choose Sarah&apos;s Assisted Living?</h2>
          <div className="features">
            <div className="feature-card">
              <h3>Personalized Care</h3>
              <p>We provide individualized care plans to meet each resident&apos;s unique needs.</p>
            </div>
            
            <div className="feature-card">
              <h3>Home Environment</h3>
              <p>Our homes are designed for safety and comfort, with 24/7 support from our caring staff.</p>
            </div>
            
            <div className="feature-card">
              <h3>Engaging Activities</h3>
              <p>We offer a variety of activities to keep residents active and engaged, promoting social interaction and well-being.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-header">
        <h2>Our Services</h2>
      </div>

      <section id="services" className="services">
        <div className="service-cards">
          <div className="service-card">
            <h3>Personal Care</h3>
            <p>Assistance with daily living activities such as bathing, dressing, and toileting.</p>
          </div>
          <div className="service-card">
            <h3>Medication Management</h3>
            <p>Safe and reliable administration of medications as prescribed by a physician.</p>
          </div>
          <div className="service-card">
            <h3>Nutritional Support</h3>
            <p>Delicious and nutritious meals prepared by our experienced culinary team.</p>
          </div>
        </div>
      </section>

      <div className="section-header">
        <h2>Our Locations</h2>
      </div>

      <section id="locations" className="locations">
        <div className="location-cards">
          <LocationCard
            imageSrc="/images/location1.jpg"
            imageAlt="Sarah's Great Life - Wildomar"
            title="Sarah's Great Life - Wildomar"
            address="32773 Wildomar Way, Wildomar, CA 92595"
            href="https://maps.app.goo.gl/L6zRcyhChLSRuBDRA"
          />
          <LocationCard
            imageSrc="/images/location2.jpg"
            imageAlt="Sarah's Good Life - Sun City"
            title="Sarah's Good Life - Sun City"
            address="26171 Fountain Bleu Dr, Menifee, CA 92586"
            href="https://maps.app.goo.gl/74Q1c4MzvKsfJMGy6"
          />
          <LocationCard
            imageSrc="/images/location3.jpg"
            imageAlt="Sarah's Best Life - Murrieta"
            title="Sarah's Best Life - Murrieta"
            address="33769 Salvia Ln, Murrieta, CA 92563"
            href="https://maps.app.goo.gl/iEVfsHAQQJUcPciZ8"
          />
        </div>
      </section>

      <div className="section-header">
        <h2>Contact Us</h2>
      </div>

      <section className="contact">
        <div className="contact-info grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="phone">
            <h3>Phone</h3>
            <a 
              href="tel:+19512515467" 
              className="contact-link"
            >
              951-251-5467
            </a>
          </div>
          <div className="email">
            <h3>Email</h3>
            <a 
              href="mailto:SarahsAssistedLiving@gmail.com"
              className="contact-link break-words"
            >
              SarahsAssistedLiving@gmail.com
            </a>
          </div>
        </div>
      </section>

      <div className="section-header">
        <h2>Testimonials</h2>
        <p className="testimonials-subtitle">See what families are saying about Sarah&apos;s Assisted Living</p>
      </div>

      <section id="testimonials" className="testimonials">
        <div className="testimonial-cards">
          {reviewsData.reviews.map((review, index) => (
            <ReviewCard
              key={index}
              name={review.name}
              rating={review.rating}
              date={review.date}
              review={review.review}
            />
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="flex items-center gap-8">
          <div className="cta-image w-1/2">
            <Image
              src="/images/cta-image.jpg"
              alt="Happy seniors walking"
              width={500}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="cta-content w-1/2">
            <h2>Ready to Find the Right Care?</h2>
            <CallTodayButton />
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>Copyrights 2025 | Privacy Policy | LIC #331880756</p>
      </footer>
    </main>
  )
}