'use client';

import { useState, useEffect } from 'react';
import { useLang } from '@/context/LangContext';
import styles from './SocialSection.module.css';

export default function SocialSection() {
  const { lang } = useLang();

  // Carousel states for Facebook and TikTok
  const [fbIndex, setFbIndex] = useState(0);
  const [ttIndex, setTtIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Actual video URLs
  const fbItems = [
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fweb.facebook.com%2Freel%2F1368622201747170&show_text=false&width=267&t=0",
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fweb.facebook.com%2Freel%2F861622383261663&show_text=false&width=267&t=0",
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fweb.facebook.com%2Freel%2F1755580378949637&show_text=false&width=267&t=0"
  ];

  const ttItems = [
    "https://www.tiktok.com/embed/v2/7655251949712968967",
    "https://www.tiktok.com/embed/v2/7643339799071296786",
    "https://www.tiktok.com/embed/v2/7660389483249978632"
  ];

  // Auto-rotate carousels every 4.5 seconds
  useEffect(() => {
    if (isHovering) return;

    const interval = setInterval(() => {
      setFbIndex((prev) => (prev + 1) % 3);
      setTtIndex((prev) => (prev + 1) % 3);
    }, 4500);

    return () => clearInterval(interval);
  }, [isHovering]);

  // Helper function to get class name based on relative index
  const getCarouselClass = (index: number, currentIndex: number) => {
    if (index === currentIndex) return styles.active;
    if (index === (currentIndex + 1) % 3) return styles.right;
    return styles.left;
  };

  return (
    <section className={`${styles.socialSection} lightTheme`} id="ikuti-kami">
      <div className="container">
        <div className={styles.sectionHeader}>

          <h2 className={styles.sectionTitle}>
            {lang === 'en' ? 'Follow Our Journey' : 'Perkembangan Semasa GAT'}
          </h2>
          <p className={styles.sectionDesc}>
            {lang === 'en' 
              ? 'Watch our latest repairs, tips, and behind-the-scenes on social media.'
              : 'Tonton kompilasi pembaikan, tips penjagaan, dan di sebalik tabir bengkel kami.'}
          </p>
        </div>

        <div className={styles.socialGrid}>
          {/* FACEBOOK COLUMN */}
          <div className={styles.socialColumn}>
            <div className={styles.columnHeader}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <h3>Facebook</h3>
            </div>
            
            <div 
              className={styles.carouselContainer}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <button 
                className={`${styles.carouselBtn} ${styles.prevBtn}`}
                onClick={() => setFbIndex((prev) => (prev - 1 + 3) % 3)}
                aria-label="Previous"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>

              <div className={styles.carouselTrack3D}>
                {fbItems.map((item, idx) => (
                  <div 
                    key={`fb-${idx}`} 
                    className={`${styles.carouselItem3D} ${getCarouselClass(idx, fbIndex)}`}
                    onClick={() => {
                      if (idx !== fbIndex) setFbIndex(idx);
                    }}
                  >
                    {/* Invisible overlay for background items so they don't capture iframe clicks */}
                    {idx !== fbIndex && <div className={styles.itemOverlay} />}
                    <iframe 
                      src={item} 
                      width="267" 
                      height="476" 
                      style={{ border: 'none', overflow: 'hidden', borderRadius: '12px' }} 
                      scrolling="no" 
                      frameBorder="0" 
                      allowFullScreen={true} 
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    ></iframe>
                  </div>
                ))}
              </div>

              <button 
                className={`${styles.carouselBtn} ${styles.nextBtn}`}
                onClick={() => setFbIndex((prev) => (prev + 1) % 3)}
                aria-label="Next"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            </div>
          </div>

          {/* TIKTOK COLUMN */}
          <div className={styles.socialColumn}>
            <div className={styles.columnHeader}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="#ffffff">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.64-5.46-.22-2.51 1.05-5.07 3.25-6.22 1.43-.75 3.11-1 4.71-.84v4.25c-.53-.1-1.07-.15-1.61-.09-.9.08-1.74.57-2.19 1.34-.48.84-.52 1.92-.12 2.8.44.97 1.49 1.57 2.56 1.56 1.43-.02 2.65-1.13 2.78-2.55.15-1.61.08-3.23.08-4.84 0-4.32-.01-8.65.01-12.98z"/>
              </svg>
              <h3>TikTok</h3>
            </div>
            
            <div 
              className={styles.carouselContainer}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <button 
                className={`${styles.carouselBtn} ${styles.prevBtn}`}
                onClick={() => setTtIndex((prev) => (prev - 1 + 3) % 3)}
                aria-label="Previous"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>

              <div className={styles.carouselTrack3D}>
                {ttItems.map((item, idx) => (
                  <div 
                    key={`tt-${idx}`} 
                    className={`${styles.carouselItem3D} ${getCarouselClass(idx, ttIndex)}`}
                    onClick={() => {
                      if (idx !== ttIndex) setTtIndex(idx);
                    }}
                  >
                    {idx !== ttIndex && <div className={styles.itemOverlay} />}
                    <div style={{ width: '267px', height: '476px', overflow: 'hidden', position: 'relative', borderRadius: '12px', background: '#000' }}>
                      <iframe 
                        src={item} 
                        style={{ border: 'none', overflow: 'hidden', position: 'absolute', top: '-1px', left: '-29px', transform: 'scale(0.82)' }} 
                        width="325"
                        height="580"
                        scrolling="no" 
                        frameBorder="0" 
                        allowFullScreen={true} 
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      ></iframe>
                    </div>
                  </div>
                ))}
              </div>

              <button 
                className={`${styles.carouselBtn} ${styles.nextBtn}`}
                onClick={() => setTtIndex((prev) => (prev + 1) % 3)}
                aria-label="Next"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
