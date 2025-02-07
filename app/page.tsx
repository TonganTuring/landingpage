'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from 'next/image'

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

  const handleCallClick = () => {
    window.location.href = 'tel:+19513271461';
  };

  const handleTestimonialClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.querySelector('#testimonials');
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <main>
      <header>
        <nav className="nav">
          <div className="logo">
            <Image 
              src="/images/logo.png" 
              alt="Sarah's Assisted Living"
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
            <button className="cta-button" onClick={handleCallClick}>Call Today</button>
          </div>
        </nav>
        
        <div className="hero">
          <div className="hero-content">
            <h1>Welcome to Sarah's Assisted Living</h1>
            <p>We empower seniors with 24/7 support to live life on their terms!</p>
            <div className="hero-buttons">
              <button className="cta-button" onClick={handleCallClick}>Call Today</button>
              <button className="secondary-button" onClick={handleTestimonialClick}>Read Testimonials</button>
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
        <div className="p-8 rounded-xl" style={{ backgroundColor: 'var(--light-bg)' }}>
          <h2>Why Choose Sarah's Assisted Living?</h2>
          <div className="features">
            <div className="feature-card">
              <h3>Personalized Care</h3>
              <p>We provide individualized care plans to meet each resident's unique needs.</p>
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
        <h2>Testimonials</h2>
      </div>

      <section id="testimonials" className="testimonials">
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <div className="star-rating">
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
            </div>
            <h3>Katharine Vaughn</h3>
            <p>I work for a local hospice agency and this is an AMAZING Board and Care. I refer my patients here whenever I get the chance! The owners are amazing, as well as the entire staff! Residents like her own family. The care she provides goes above and beyond. The house is clean, safe and in a wonderful neighborhood in Wildomar.</p>
          </div>
          <div className="testimonial-card">
            <div className="star-rating">
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
            </div>
            <h3>Lynne Steele</h3>
            <p>Highly recommend Sarah's Great Life. Everyone involved was very caring and proved to be a great resource of knowledge to me in the care of my father. Thomas, owner, very communicative and always responded timely. Caregivers Brandee and DeeDee, both amazing. It was very reassuring to walk in or text to get an immediate update on diet, or care. Will always be grateful to all 3.</p>
          </div>
          <div className="testimonial-card">
            <div className="star-rating">
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
            </div>
            <h3>Michael Bouchard</h3>
            <p>My sister has been at Sarah's for almost 2 years and she is extremely well cared for. Thomas is the kindest and most caring man who helped make the transition for my family very easy. The caregivers go above and beyond to ensure safety and dignity. I'd give more stars if I could!</p>
          </div>
        </div>
      </section>

      <div className="section-header">
        <h2>Our Locations</h2>
      </div>

      <section id="locations" className="locations">
        <div className="location-cards">
          <div className="location-card">
            <Image 
              src="/images/location1.jpg"
              alt="Sarah's Great Life - Wildomar"
              width={400}
              height={300}
              className="location-image"
            />
            <h3>Sarah's Great Life - Wildomar</h3>
            <p>32773 Wildomar Way, Wildomar, CA 92595</p>
          </div>
          <div className="location-card">
            <Image 
              src="/images/location2.jpg"
              alt="Sarah's Good Life - Sun City"
              width={400}
              height={300}
              className="location-image"
            />
            <h3>Sarah's Good Life - Sun City</h3>
            <p>26171 Fountain Bleu Dr, Menifee, CA 92586</p>
          </div>
          <div className="location-card">
            <Image 
              src="/images/location3.jpg"
              alt="Sarah's Best Life - Murrieta"
              width={400}
              height={300}
              className="location-image"
            />
            <h3>Sarah's Best Life - Murrieta</h3>
            <p>33769 Salvia Ln, Murrieta, CA 92563</p>
          </div>
        </div>
      </section>

      <div className="section-header">
        <h2>Contact Us</h2>
      </div>

      <section className="contact">
        <div className="contact-info grid grid-cols-2 gap-8">
          <div className="phone">
            <h3>Phone</h3>
            <a 
              href="tel:+19513271461" 
              className="contact-link"
              onClick={handleCallClick}
            >
              (951)-327-1461
            </a>
          </div>
          <div className="email">
            <h3>Email</h3>
            <a 
              href="mailto:SarahsAssistedLiving@gmail.com"
              className="contact-link"
            >
              SarahsAssistedLiving@gmail.com
            </a>
          </div>
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
            <button className="cta-button" onClick={handleCallClick}>Call Today</button>
          </div>
        </div>
      </section>

      <footer>
        <p>Made with Cursor and Next.js</p>
      </footer>
    </main>
  )
}