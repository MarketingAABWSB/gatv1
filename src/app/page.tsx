'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLang } from '@/context/LangContext';
import styles from './page.module.css';
import {
  Laptop,
  Microchip,
  Award,
  Factory,
  Truck,
  Car,
  ClipboardCheck,
  Ambulance,
  Shield,
  FireExtinguisher,
  PackageOpen,
  Landmark,
  Building2,
  Database,
  ShieldCheck,
  Clock,
  FileText,
  CheckCircle2
} from 'lucide-react';

export default function Home() {
  const { lang } = useLang();

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero} id="utama">
        <div className={`container ${styles.heroInner}`}>

          {/* TOP: Massive brand name */}
          <div className={styles.heroBrandName}>
            GAT SERVICES SDN BHD
          </div>

          {/* BOTTOM: Split — headline left, desc right */}
          <div className={styles.heroSplit}>
            <div className={styles.heroLeft}>
              <h1 className={styles.heroHeadline}>
                {lang === 'en' ? (
                  <>Computerized Diagnostics &amp;<br /><span>Heavy Machinery Specialists</span></>
                ) : (
                  <>Pakar Diagnostik Berkomputer<br />&amp; <span>Jentera Berat</span></>
                )}
              </h1>
              <div className={styles.heroButtons}>
                <Link href="/services" className={styles.btnPrimary}>
                  {lang === 'en' ? 'Explore Our Services' : 'Teroka Servis Kami'}
                </Link>
                <Link href="/about-us" className={styles.btnSecondary}>
                  {lang === 'en' ? 'Learn More' : 'Ketahui Lebih Lanjut'}
                </Link>
              </div>
            </div>

            <div className={styles.heroRight}>
              <p className={styles.heroDesc}>
                {lang === 'en'
                  ? 'Comprehensive automotive services for diesel and petrol vehicles, supported by transparent Webmax records, OEM diagnostics, and 24-hour mobile breakdown support in Terengganu.'
                  : 'Perkhidmatan automotif menyeluruh untuk kenderaan diesel dan petrol, disokong rekod Webmax yang telus, diagnostik OEM, dan bantuan breakdown bergerak 24 jam di Terengganu.'}
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* Trust Bar */}
      <div className={styles.trustBar}>
        <div className="container">
          <div className={styles.trustTitle}>
            {lang === 'en' ? 'Trusted By Industries & Government Agencies' : 'Dipercayai Oleh Industri & Agensi Kerajaan'}
          </div>
          <div className={styles.trustMarquee}>
            <div className={styles.trustLogos}>
              <Image src="/assets/jata-negeri-terengganu-seeklogo.png" alt="SUK Terengganu" width={120} height={50} className={styles.trustLogoImg} />
              <Image src="/assets/pdrm-seeklogo.png" alt="PDRM" width={120} height={50} className={styles.trustLogoImg} />
              <Image src="/assets/jabatan-bomba-dan-penyelamat-malaysia-seeklogo.png" alt="BOMBA" width={120} height={50} className={styles.trustLogoImg} />
              <Image src="/assets/universiti-malaysia-terengganu-umt-seeklogo.png" alt="UMT" width={120} height={50} className={styles.trustLogoImg} />
              <Image src="/assets/jt-express-seeklogo.png" alt="J&T Express" width={120} height={50} className={styles.trustLogoImg} />
              <Image src="/assets/ninja-van-seeklogo.png" alt="Ninja Van" width={120} height={50} className={styles.trustLogoImg} />
            </div>
            {/* Duplicate for seamless infinite scrolling */}
            <div className={styles.trustLogos} aria-hidden="true">
              <Image src="/assets/jata-negeri-terengganu-seeklogo.png" alt="SUK Terengganu" width={120} height={50} className={styles.trustLogoImg} />
              <Image src="/assets/pdrm-seeklogo.png" alt="PDRM" width={120} height={50} className={styles.trustLogoImg} />
              <Image src="/assets/jabatan-bomba-dan-penyelamat-malaysia-seeklogo.png" alt="BOMBA" width={120} height={50} className={styles.trustLogoImg} />
              <Image src="/assets/universiti-malaysia-terengganu-umt-seeklogo.png" alt="UMT" width={120} height={50} className={styles.trustLogoImg} />
              <Image src="/assets/jt-express-seeklogo.png" alt="J&T Express" width={120} height={50} className={styles.trustLogoImg} />
              <Image src="/assets/ninja-van-seeklogo.png" alt="Ninja Van" width={120} height={50} className={styles.trustLogoImg} />
            </div>
          </div>
        </div>
      </div>

      {/* Bento Grid (Kelebihan) */}
      <section className={styles.bentoSection} id="overview">
        <div className="container">
          <div className={styles.bentoIntro}>
            <div className={styles.sectionHeader}>
              <h2>{lang === 'en' ? 'About GAT Services' : 'Mengenai GAT Services'}</h2>
              <p>
                {lang === 'en'
                  ? 'A dedicated workshop setup for petrol vehicles and heavy diesel machinery, backed by transparent records and a structured workflow.'
                  : 'Ruang kerja khusus untuk kenderaan petrol dan jentera diesel berat, disokong rekod yang telus serta aliran kerja yang tersusun.'}
              </p>
            </div>

            <Link href="/about-us" className={styles.introLink}>
              {lang === 'en' ? 'Read full story' : 'Baca kisah penuh'}
            </Link>
          </div>

          <div className={styles.bentoGrid}>
            <div className={`${styles.bentoBox} ${styles.bentoLarge}`}>
              <Building2 size={56} className={styles.bentoIcon} />
              <h3>{lang === 'en' ? 'Company Overview' : 'Pengenalan Syarikat'}</h3>
              <p>
                {lang === 'en'
                  ? 'GAT Services Sdn Bhd is a 100% Bumiputera-owned automotive service center operating in Kuala Terengganu since 2015.'
                  : 'GAT Services Sdn Bhd ialah pusat servis automotif milik 100% Bumiputera yang beroperasi di Kuala Terengganu sejak 2015.'}
              </p>
            </div>

            <div className={styles.bentoBox}>
              <Award size={36} className={styles.bentoIcon} />
              <h3>{lang === 'en' ? 'Official Accreditation' : 'Akreditasi Rasmi'}</h3>
              <p>
                {lang === 'en'
                  ? 'Registered with MOF, official vendor for FELDA, and staffed by professionals with SKM Level 3 certification.'
                  : 'Berdaftar MOF, Vendor rasmi FELDA, dan tenaga kerja profesional lulusan SKM Tahap 3.'}
              </p>
            </div>

            <div className={styles.bentoBox}>
              <Laptop size={36} className={styles.bentoIcon} />
              <h3>{lang === 'en' ? 'Systematic Management' : 'Pengurusan Bersistematik'}</h3>
              <p>
                {lang === 'en'
                  ? 'Webmax keeps all repair records, invoices, and parts history in one transparent, traceable system.'
                  : 'Webmax menyimpan semua rekod servis, invois, dan sejarah alat ganti dalam satu sistem yang telus dan boleh dijejak.'}
              </p>
              <ul className={styles.bentoCheckList}>
                <li>{lang === 'en' ? 'Digital invoice & history' : 'Invois digital & sejarah servis'}</li>
                <li>{lang === 'en' ? 'Mileage-based service reminders' : 'Peringatan servis berkala'}</li>
                <li>{lang === 'en' ? 'Accessible anytime' : 'Boleh dicapai bila-bila masa'}</li>
              </ul>
            </div>

            <div className={`${styles.bentoBox} ${styles.bentoLarge}`}>
              <Factory size={56} className={styles.bentoIcon} />
              <h3>{lang === 'en' ? 'Heavy Industry Capacity' : 'Kapasiti Industri Berat'}</h3>
              <p>
                {lang === 'en'
                  ? 'High-clearance bays and robust tooling support trucks, buses, and heavy machinery without crowding the light-vehicle work area.'
                  : 'Bilik servis berkelegaan tinggi dan peralatan lasak menyokong lori, bas, serta jentera berat tanpa menjejaskan ruang kenderaan ringan.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.servicesSection} id="services">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>{lang === 'en' ? 'Core Services' : 'Perkhidmatan Utama'}</h2>
            <p>
              {lang === 'en'
                ? 'From passenger vehicles to heavy machinery, our team delivers practical and reliable technical support.'
                : 'Daripada kenderaan penumpang hingga jentera berat, pasukan kami menyediakan sokongan teknikal yang praktikal dan boleh dipercayai.'}
            </p>
          </div>

          <div className={styles.servicesGrid}>
            <Link href="/services/heavy-machinery" className={styles.serviceCard}>
              <div
                className={styles.serviceImg}
                style={{ backgroundImage: "url('/assets/bahagian-diesel/1.png')" }}
              >
              </div>
              <div className={styles.serviceContent}>
                <h3>{lang === 'en' ? 'Heavy Machinery (Diesel)' : 'Jentera Berat & Lori (Diesel)'}</h3>
                <p>
                  {lang === 'en'
                    ? 'Expert repair and maintenance for trucks, buses, and heavy industrial machinery.'
                    : 'Pakar membaik pulih dan penyelenggaraan untuk lori, bas, dan jentera berat komersial.'}
                </p>
                <div className={styles.serviceLink}>
                  {lang === 'en' ? 'LEARN MORE →' : 'LEBIH LANJUT →'}
                </div>
              </div>
            </Link>

            <Link href="/services/light-vehicles" className={styles.serviceCard}>
              <div
                className={styles.serviceImg}
                style={{ backgroundImage: "url('/assets/bahagian-petrol/1.png')" }}
              >
              </div>
              <div className={styles.serviceContent}>
                <h3>{lang === 'en' ? 'Light Vehicles (Petrol)' : 'Kenderaan Ringan (Petrol)'}</h3>
                <p>
                  {lang === 'en'
                    ? 'Comprehensive service center for personal and corporate light vehicles.'
                    : 'Pusat servis menyeluruh untuk kenderaan ringan persendirian & syarikat.'}
                </p>
                <div className={styles.serviceLink}>
                  {lang === 'en' ? 'LEARN MORE →' : 'LEBIH LANJUT →'}
                </div>
              </div>
            </Link>

            <Link href="/services/puspakom-inspection" className={styles.serviceCard}>
              <div
                className={styles.serviceImg}
                style={{ backgroundImage: "url('/assets/bahagian-diesel/4.png')" }}
              >
              </div>
              <div className={styles.serviceContent}>
                <h3>{lang === 'en' ? 'PUSPAKOM Inspection Prep' : 'Persediaan Pemeriksaan PUSPAKOM'}</h3>
                <p>
                  {lang === 'en'
                    ? 'Trusted by government agencies to prepare vehicles for PUSPAKOM "fit for use" permit approvals.'
                    : 'Kepercayaan oleh agensi kerajaan untuk menyedia kenderaan sebelum ke PUSPAKOM bagi kelulusan permit.'}
                </p>
                <div className={styles.serviceLink}>
                  {lang === 'en' ? 'LEARN MORE →' : 'LEBIH LANJUT →'}
                </div>
              </div>
            </Link>

            <Link href="/services/24-hour-rescue" className={styles.serviceCard}>
              <div
                className={styles.serviceImg}
                style={{ backgroundImage: "url('/assets/van-perkhidmatan/1.png')" }}
              >
              </div>
              <div className={styles.serviceContent}>
                <h3>{lang === 'en' ? '24-Hour Mobile Breakdown' : 'Perkhidmatan Bergerak (24 Jam)'}</h3>
                <p>
                  {lang === 'en'
                    ? 'Mobile rescue service for vehicles broken down during transit. We repair on-site whenever possible.'
                    : 'Menyediakan perkhidmatan van bergerak (door-to-door) 24 jam untuk kes-kes kerosakan / breakdown di jalanan.'}
                </p>
                <div className={styles.serviceLink}>
                  {lang === 'en' ? 'LEARN MORE →' : 'LEBIH LANJUT →'}
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Facility Gallery */}
      <section className={styles.facilitySection} id="fasiliti">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>{lang === 'en' ? 'GAT Services Facility' : 'Fasiliti GAT Services'}</h2>
            <p>
              {lang === 'en'
                ? 'Customer comfort and operational efficiency are prioritized throughout our service facility.'
                : 'Keselesaan pelanggan dan kecekapan operasi sentiasa menjadi keutamaan di fasiliti kami.'}
            </p>
          </div>

          <div className={styles.gallery}>
            <div className={styles.galleryItem}>
              <img src="/assets/fasiliti/waiting-room.png" alt="Ruang Menunggu" />
              <div className={styles.galleryOverlay}>
                {lang === 'en' ? 'Waiting Area (Air-Conditioned & Surau)' : 'Ruang Menunggu (Berhawa Dingin & Surau)'}
              </div>
            </div>
            <div className={styles.galleryItem}>
              <img src="/assets/bahagian-diesel/2.png" alt="Ruang Kerja" />
              <div className={styles.galleryOverlay}>
                {lang === 'en' ? 'Spacious Workspace Capacity' : 'Kapasiti Ruang Kerja Luas'}
              </div>
            </div>
            <div className={styles.galleryItem}>
              <img src="/assets/fasiliti/stor-alat-ganti-1.png" alt="Stor Alat Ganti" />
              <div className={styles.galleryOverlay}>
                {lang === 'en' ? 'Fully Stocked Spare Parts Store' : 'Stor Alat Ganti / Spare Parts Lengkap'}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
