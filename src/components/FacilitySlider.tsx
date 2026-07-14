'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './FacilitySlider.module.css';

interface FacilitySliderProps {
  lang: string;
}

export default function FacilitySlider({ lang }: FacilitySliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      // Scroll by approximately one visible slide width
      const scrollAmount = current.clientWidth > 768 ? current.clientWidth / 2 : current.clientWidth;
      
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const facilities = [
    {
      img: '/assets/fasiliti/waiting-room.png',
      en: 'Waiting Area (Air-Conditioned)',
      ms: 'Ruang Menunggu (Berhawa Dingin)'
    },
    {
      img: '/assets/bahagian-diesel/2.png',
      en: 'Spacious Workspace Capacity',
      ms: 'Kapasiti Ruang Kerja Luas'
    },
    {
      img: '/assets/fasiliti/stor-alat-ganti.jpeg',
      en: 'Fully Stocked Spare Parts Store',
      ms: 'Stor Alat Ganti / Spare Parts Lengkap'
    },
    {
      img: '/assets/fasiliti/surau.jpeg',
      en: 'Surau (Prayer Room)',
      ms: 'Surau'
    },
    {
      img: '/assets/fasiliti/tandas.png',
      en: 'Restroom / Toilet',
      ms: 'Tandas'
    }
  ];

  return (
    <div className={styles.sliderWrapper}>
      <button 
        className={`${styles.navButton} ${styles.prevButton}`} 
        onClick={() => scroll('left')}
        aria-label="Previous facility"
      >
        <ChevronLeft size={24} />
      </button>
      
      <div className={styles.sliderContainer} ref={scrollRef}>
        {facilities.map((item, index) => (
          <div key={index} className={styles.slideItem}>
            <img src={item.img} alt={lang === 'en' ? item.en : item.ms} className={styles.slideImg} />
            <div className={styles.slideOverlay}>
              {lang === 'en' ? item.en : item.ms}
            </div>
          </div>
        ))}
      </div>

      <button 
        className={`${styles.navButton} ${styles.nextButton}`} 
        onClick={() => scroll('right')}
        aria-label="Next facility"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
