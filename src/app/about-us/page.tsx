'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '@/context/LangContext';
import styles from './page.module.css';

export default function AboutPage() {
  const { lang } = useLang();

  const vmmo = [
    {
      label: lang === 'en' ? 'VISION' : 'VISI',
      title: lang === 'en' ? 'Our Vision' : 'Visi Kami',
      text: lang === 'en' 
        ? 'To be a leading Bumiputera company playing a major role in the automotive industry.' 
        : 'Visi GAT adalah untuk menjadi sebuah syarikat bumiputra terkemuka yang memainkan peranan utama dalam bidang automotif.',
    },
    {
      label: lang === 'en' ? 'MISSION' : 'MISI',
      title: lang === 'en' ? 'Our Mission' : 'Misi Kami',
      text: lang === 'en' 
        ? 'To provide comprehensive and competitive vehicle repair services that meet customer needs. GAT also acts as an advisor to ensure customers maintain their vehicles properly and correctly. To ensure this mission runs smoothly, GAT is committed to its work, ensuring the labor and parts used are of high quality, while fostering responsible and dedicated employees in carrying out their duties.' 
        : 'Misi GAT adalah untuk menyediakan perkhidmatan membaikpulih kenderaan yang komprenhensif serta berdaya saing bagi memenuhi kehendak pelanggan. GAT juga akan berperanan menjadi penasihat bagi memastikan para pelanggannya menjaga kenderaan dengan baik dan dengan cara yang betul. Bagi memastikan misi ini berjalan dengan lancar, GAT akan komited dengan kerja, memastikan kerja dan barang yang digunakan adalah baik dan berkualiti, serta melahirkan pekerja-pekerja yang bertanggungjawab dan berdedikasi semasa menjalankan tugas mereka.',
    },
  ];

  return (
    <>
      {/* ── DARK HERO — fixes navbar visibility ── */}
      <section className={styles.heroSection}>
        <div className={styles.heroBgImg} style={{ background: '#333' }} />
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroInner}`}>
          <span className={styles.heroLabel}>
            {lang === 'en' ? 'ABOUT US' : 'TENTANG KAMI'}
          </span>
          <h1 className={styles.heroTitle}>
            {lang === 'en'
              ? 'Professional Service,\nBuilt on Experience.'
              : 'Penjagaan Profesional,\nDiperkukuh oleh Pengalaman.'}
          </h1>
          <p className={styles.heroSub}>
            {lang === 'en'
              ? 'Serving Terengganu and surrounding areas with integrity, expertise, and care.'
              : 'Berkhidmat di Terengganu dan sekitarnya dengan integriti, kepakaran, dan dedikasi.'}
          </p>
          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNum}>100%</span>
              <span className={styles.heroStatLabel}>
                {lang === 'en' ? 'Bumiputera-Owned' : 'Milik Bumiputera'}
              </span>
            </div>
            <div className={styles.heroStatDivider} />
            <div className={styles.heroStat}>
              <span className={styles.heroStatNum}>10+</span>
              <span className={styles.heroStatLabel}>
                {lang === 'en' ? 'Years of Operation' : 'Tahun Operasi'}
              </span>
            </div>
            <div className={styles.heroStatDivider} />
            <div className={styles.heroStat}>
              <span className={styles.heroStatNum}>3</span>
              <span className={styles.heroStatLabel}>
                {lang === 'en' ? 'Core Scopes' : 'Skop Utama'}
              </span>
            </div>
          </div>
        </div>
        {/* Scroll cue */}
        <div className={styles.scrollCue}>
          <span />
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section className={styles.storySection} id="our-story">
        <div className={`container ${styles.storyInner}`}>
          <div className={styles.storyLeft}>
            <span className={styles.sectionTag}>
              {lang === 'en' ? 'OUR STORY' : 'KISAH KAMI'}
            </span>
            <h2 className={styles.sectionTitle}>
              {lang === 'en'
                ? 'Built on Trust,\nDriven by Discipline.'
                : 'Dibina atas Kepercayaan,\nBerkembang dengan Kecemerlangan.'}
            </h2>
            <div className={styles.storyDivider} />
            <p className={styles.storyPara}>
              {lang === 'en'
                ? 'GAT Services Sendirian Berhad (GAT SERVICES SDN BHD) is an automotive service company focused on repair and maintenance for petrol-engine vehicles (light vehicles) and diesel-engine vehicles (heavy machinery / commercial vehicles).'
                : 'Syarikat GAT Services Sendirian Berhad (GAT SERVICES SDN BHD) merupakan sebuah perniagaan berteraskan perkhidmatan automotif dengan menjalankan aktiviti utama perniagaan iaitu perkhidmatan membaik pulih dan menyelenggara kenderaan berenjin petrol (kenderaan ringan) dan juga kenderaan berenjin diesel (jentera berat/ kenderaan berat perdagangan).'}
            </p>
            <p className={styles.storyPara}>
              {lang === 'en'
                ? 'Formerly known as German Auto Tech Enterprise, GAT SERVICES SDN BHD is a 100% Bumiputera-owned company that began operations in June 2015 at the Gong Badak Industrial Area in Kuala Nerus, Terengganu. After two years of smooth operations, the company was upgraded to a Private Limited company on August 11, 2017.'
                : 'GAT SERVICES SDN BHD dahulunya di kenali sebagai German Auto Tech Enterprise merupakan syarikat milik Bumiputera sepenuhnya yang mula beroperasi pada Jun 2015 di Kawasan Perindustrian Gong Badak, Kuala Terengganu, Terengganu Darul Iman. Setelah dua tahun beroperasi dengan lancar, syarikat ini dinaiktaraf sebagai syarikat Sendirian Berhad pada 11hb Ogos 2017 dengan nama GAT SERVICES SDN BHD.'}
            </p>
            <Link href="/services" className={styles.storyBtn}>
              {lang === 'en' ? 'View Our Services' : 'Lihat Perkhidmatan'} →
            </Link>
          </div>
          <div className={styles.storyRight}>
            <div className={styles.storyImgWrap}>
              <Image
                src="/assets/bahagian-petrol/2.png"
                alt={lang === 'en' ? 'GAT workshop team and facility' : 'Pasukan dan fasiliti bengkel GAT'}
                width={1200}
                height={900}
                className={styles.storyImg}
              />
              <div className={styles.storyImgBadge}>
                <span className={styles.badgeNum}>10+</span>
                <span className={styles.badgeText}>
                  {lang === 'en' ? 'Years of Trust' : 'Tahun Kepercayaan'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VISION / MISSION / OBJECTIVE / GOAL ── */}
      <section className={styles.vmmoSection} id="visi-misi">
        <div className="container">
          <div className={styles.vmmoHeader}>
            <span className={styles.sectionTagDark}>
              {lang === 'en' ? 'WHO WE ARE' : 'SIAPA KAMI'}
            </span>
            <h2 className={styles.vmmoTitle}>
              {lang === 'en'
                ? 'Guided by Vision,\nCommitted in Service.'
                : 'Berasas Nilai,\nDipacu oleh Misi.'}
            </h2>
          </div>
          <div className={styles.vmmoGrid}>
            {vmmo.map((item, i) => (
              <div key={i} className={styles.vmmoCard}>
                <span className={styles.vmmoCardLabel}>{item.label}</span>
                <h3 className={styles.vmmoCardTitle}>{item.title}</h3>
                <p className={styles.vmmoCardText}>{item.text}</p>
                <div className={styles.vmmoCardLine} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JENIS SERVIS ── */}
      <section className={styles.servicesSection} id="jenis-servis">
        <div className="container">
          <div className={styles.servicesInner}>
            <div className={styles.servicesLeft}>
              <span className={styles.sectionTag}>
                {lang === 'en' ? 'CORE SCOPES' : 'SKOP UTAMA'}
              </span>
              <div className={styles.servicesBigNum}>3</div>
              <p className={styles.servicesBigLabel}>
                {lang === 'en' ? 'Core Service Scopes' : 'Skop Perkhidmatan Utama'}
              </p>
            </div>
            <div className={styles.servicesRight}>
              <p className={styles.servicesDesc}>
                {lang === 'en'
                  ? 'GAT SERVICES SDN BHD provides comprehensive, structured, and dependable vehicle support for individuals and organizations.'
                  : 'GAT SERVICES SDN BHD menyediakan sokongan kenderaan yang menyeluruh, tersusun, dan boleh dipercayai untuk individu serta organisasi.'}
              </p>
              <div className={styles.servicesTags}>
                {[
                  lang === 'en' ? 'Engine Repair' : 'Pembaikan Enjin',
                  lang === 'en' ? 'Computer Diagnostics' : 'Diagnosis Komputer',
                  lang === 'en' ? 'Air Conditioning' : 'Penghawa Dingin',
                  lang === 'en' ? 'Suspension' : 'Sistem Ampaian',
                  lang === 'en' ? 'Gearbox' : 'Gearbox',
                  lang === 'en' ? 'Electrical Wiring' : 'Pendawaian Elektrik',
                  lang === 'en' ? 'PUSPAKOM Prep' : 'Persediaan PUSPAKOM',
                  lang === 'en' ? '24-Hour Breakdown' : 'Breakdown 24 Jam',
                ].map((tag) => (
                  <span key={tag} className={styles.serviceTag}>{tag}</span>
                ))}
              </div>
              <Link href="/services" className={styles.servicesBtn}>
                {lang === 'en' ? 'Explore All Services' : 'Terokai Semua Servis'} →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── WEBMAX SYSTEM ── */}
      <section className={styles.systemSection}>
        <div className="container">
          <div className={styles.systemHeader}>
            <span className={styles.sectionTag}>
              {lang === 'en' ? 'OUR SYSTEM' : 'SISTEM KAMI'}
            </span>
            <h2 className={styles.sectionTitle}>
              {lang === 'en' ? 'Systematic Management' : 'Sistem Pengurusan Bersistematik'}
            </h2>
          </div>

          <div className={styles.systemGrid}>
            <div className={styles.systemVisualWrap}>
              <Image
                src="/assets/web-max.png"
                alt={lang === 'en' ? 'Webmax workshop management dashboard' : 'Paparan sistem pengurusan bengkel Webmax'}
                width={1400}
                height={900}
                className={styles.systemImage}
              />
              <div className={styles.systemVisualBadge}>
                <span className={styles.systemVisualNum}>Webmax</span>
                <span className={styles.systemVisualLabel}>
                  {lang === 'en' ? 'Workshop Management System' : 'Sistem Pengurusan Bengkel'}
                </span>
              </div>
            </div>

            <div className={styles.systemContent}>
              <p className={styles.systemLead}>
                {lang === 'en'
                  ? 'We use Webmax Technologies to centralize repair records, improve service transparency, and ensure every job remains traceable from start to completion.'
                  : 'Kami menggunakan Webmax Technologies untuk memusatkan rekod pembaikan, meningkatkan ketelusan servis, dan memastikan setiap kerja boleh dijejak dari awal hingga selesai.'}
              </p>

              <div className={styles.systemPoints}>
                <div className={styles.systemPoint}>
                  <h3 data-num="01">
                    {lang === 'en' ? 'Complete Vehicle History' : 'Sejarah Kenderaan Lengkap'}
                  </h3>
                  <p>
                    {lang === 'en'
                      ? 'Owner details, registration numbers, engine/chassis information, mileage, and service history are stored in one secure system.'
                      : 'Maklumat pemilik, nombor pendaftaran, maklumat enjin/chasis, mileage, dan sejarah servis disimpan dalam satu sistem yang selamat.'}
                  </p>
                </div>

                <div className={styles.systemPoint}>
                  <h3 data-num="02">
                    {lang === 'en' ? 'Avoid Double Job & Double Charge' : 'Elak Double Job & Double Charge'}
                  </h3>
                  <p>
                    {lang === 'en'
                      ? 'Centralized repair history helps customers verify previous work and prevents repeated repairs by irresponsible workshops.'
                      : 'Sejarah pembaikan berpusat membantu pelanggan semak kerja terdahulu dan mengelakkan kerja berulang oleh bengkel tidak bertanggungjawab.'}
                  </p>
                </div>

                <div className={styles.systemPoint}>
                  <h3 data-num="03">
                    {lang === 'en' ? 'Faster Scheduled Maintenance' : 'Penyelenggaraan Berkala Lebih Cepat'}
                  </h3>
                  <p>
                    {lang === 'en'
                      ? 'Service intervals are tracked by mileage, making preventive maintenance planning faster and more consistent.'
                      : 'Jadual servis dipantau berdasarkan mileage, menjadikan perancangan penyelenggaraan pencegahan lebih cepat dan konsisten.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM / ORG CHART ── */}
      <section className={`section ${styles.teamSection}`}>
        <div className="container">
          <div className={styles.teamHeader}>
            <span className={styles.sectionTag}>
              {lang === 'en' ? 'OUR TEAM' : 'PASUKAN KAMI'}
            </span>
            <h2 className={styles.sectionTitle}>
              {lang === 'en' ? 'Organizational Chart' : 'Carta Organisasi'}
            </h2>
          </div>
          <div className={styles.orgChartWrap}>
            <Image 
              src="/assets/org-chart.png" 
              alt="Carta Organisasi GAT" 
              width={820}
              height={492}
              quality={95}
              className={styles.orgChartImage}
            />
          </div>
        </div>
      </section>
    </>
  );
}
