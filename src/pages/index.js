import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import ReactPlayer from 'react-player';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const videos = [
    {
      "title": "Prof. Dr. Özlem Deniz Başar İstatistik Bölümünü Anlatıyor",
      "url": "https://www.youtube.com/embed/njJBBiyFLxQ"
    },
    {
      "title": "İstatistik Bölüm Tanıtım Programı",
      "url": "https://www.youtube.com/watch?v=zLkbLQyRO_E"
    },
    {
      "title": "İstatistik Bölümü Neden Tercih Edilmeli?",
      "url": "https://www.youtube.com/embed/-FyO2wMOK8s"
    },
    {
      "title": "İstatistik Bölümünden Mezun Olunca İş İmkanları Nelerdir?",
      "url": "https://youtu.be/7Kucx4fkwKs"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [videoStatus, setVideoStatus] = useState(false);
  const swiperRef = useRef(null);

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={styles.container}>

        <div className="container">
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs">
              Bizi Keşfetmeye Başla
            </Link>
          </div>
        </div>

        <div className="container">
          <Swiper 
            navigation={true} 
            pagination={true} 
            modules={[Navigation, Pagination]} 
            spaceBetween={50} 
            className={styles.swiper}
            onSlideChange={(swiper) => {
              setCurrentIndex(swiper.activeIndex);
              setVideoStatus(false);
              return;
            }}
            ref={swiperRef}>
            {videos.map((video, i) => {
              return (
                <SwiperSlide className={styles.swiper_slide} key={i}>
                  <ReactPlayer
                    url={video.url}
                    pip={true}
                    width="100%"
                    height="100%"
                    controls={true}
                    playing={(currentIndex == i) && videoStatus}
                    onPlay={() => setVideoStatus(true)}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title={`Ana Sayfa`}
      description="İstanbul Ticaret Üniversitesi İstatistik bölümü öğrencileri için hazırlanan yardımcı döküman sitesi.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
