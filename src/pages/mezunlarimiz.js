import { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import Layout from '@theme/Layout';

import styles from './mezunlarimiz.module.css';

export default function MezunlarimizPage() {
    const videos = [
        {
            "title": "Mezunlarımızdan Begüm Öner",
            "url": "https://www.youtube.com/watch?v=fV0slQWpyJg",
            "thumbnail": "https://img.youtube.com/vi/fV0slQWpyJg/maxresdefault.jpg"
        },
        {
            "title": "Mezunlarımızdan Başak Gizem Çalışkan",
            "url": "https://www.youtube.com/watch?v=AzWx6l8Ia28",
            "thumbnail": "https://img.youtube.com/vi/AzWx6l8Ia28/maxresdefault.jpg"
        },
        {
            "title": "Mezunlarımızdan Onuralp Öztürk",
            "url": "https://www.youtube.com/watch?v=lYHA8wgn-zE",
            "thumbnail": "https://img.youtube.com/vi/lYHA8wgn-zE/maxresdefault.jpg"
        },
        {
            "title": "Mezunlarımızdan Serdar Türedi",
            "url": "https://www.youtube.com/watch?v=mMhiVwohuOM",
            "thumbnail": "https://img.youtube.com/vi/mMhiVwohuOM/maxresdefault.jpg"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [videoStatus, setVideoStatus] = useState(false);

    return (
        <Layout title="Mezunlarımız" description="İstanbul Ticaret Üniversitesi İstatistik bölümü mezunlarımızdan sizlere mesaj var!">
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