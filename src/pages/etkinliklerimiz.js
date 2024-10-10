import { useState } from 'react';
import ReactPlayer from 'react-player';
import Layout from '@theme/Layout';

import styles from './etkinliklerimiz.module.css';

export default function EtkinliklerimizPage() {
    const videos = [
        {
            "title": "İstatistik Bölüm Tanıtım Programı",
            "url": "https://www.youtube.com/watch?v=zLkbLQyRO_E",
            "thumbnail": "https://img.youtube.com/vi/zLkbLQyRO_E/maxresdefault.jpg"
        },
        {
            "title": "Dijital Çağda İstatistiğin Gücü",
            "url": "https://www.youtube.com/watch?v=rLR2a843wK0",
            "thumbnail": "https://img.youtube.com/vi/rLR2a843wK0/maxresdefault.jpg"
        },
        {
            "title": "1 Bölüm 3 Bakış | İstatistik Bölümü",
            "url": "https://www.youtube.com/watch?v=5_6__0P0m50",
            "thumbnail": "https://img.youtube.com/vi/5_6__0P0m50/maxresdefault.jpg"
        },
        {
            "title": "İstatistik Topluluğu-İstatistik ve Bankacılık",
            "url": "https://www.youtube.com/watch?v=o35yIj932zk",
            "thumbnail": "https://img.youtube.com/vi/o35yIj932zk/maxresdefault.jpg"
        },
        {
            "title": "İstatistik Topluluğu / SHELL Türkiye CEO’su Emre Turanlı ile Soru - Cevap",
            "url": "https://www.youtube.com/watch?v=TxGxjlVH4xQ",
            "thumbnail": "https://img.youtube.com/vi/TxGxjlVH4xQ/maxresdefault.jpg"
        },
        {
            "title": "İstatistiklerle, Nereden Nereye? Korona Sürecine Farklı Bir Bakış",
            "url": "https://www.youtube.com/watch?v=a5lk8IUUzGk",
            "thumbnail": "https://img.youtube.com/vi/a5lk8IUUzGk/maxresdefault.jpg"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [videoStatus, setVideoStatus] = useState(false);

    return (
        <Layout title="Mezunlarımız" description="İstanbul Ticaret Üniversitesi İstatistik bölümünün etkinlikleri">
            <div className={styles.container}>
                <div className={styles.videoContainer}>
                    <h1>{videos[currentIndex].title}</h1>
                    <ReactPlayer
                        url={videos[currentIndex].url}
                        controls
                        playing={videoStatus}
                        width="100%"
                        height="100%"
                    />
                </div>
                <div className={styles.playlist}>
                    {videos.map((video, index) => (
                        <div
                            key={index}
                            className={currentIndex === index ? styles.playlistItemActive : styles.playlistItem}
                            onClick={() => {
                                setCurrentIndex(index);
                                setVideoStatus(false);
                            }}>
                            <img src={video.thumbnail} alt={video.title} className={styles.thumbnail} />
                            <div className={styles.videoInfo}>
                                <h2>{video.title}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}