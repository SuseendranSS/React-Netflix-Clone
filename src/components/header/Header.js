import './Header.css';
import { useState, useEffect } from 'react';

function Header() {
    const [billboardImage, setBillboardImage] = useState("");
    const [headerDesc, setHeaderDesc] = useState("");
    const [showDesc, setShowDesc] = useState(true);
    const [youtubeVideoId, setYoutubeVideoId] = useState("");
    const [headerContentPaddingTop, setHeaderContentPaddingTop] = useState("15vw");

    useEffect(() => {
        const fetchLatestMovie = async () => {
            try {
                const trendingResponse = await fetch("https://api.themoviedb.org/3/trending/all/week?api_key=f0fc2c2ea8db74c1852293bba58ac8d9");
                const trendingData = await trendingResponse.json();
    
                for (const item of trendingData.results) {
                    const headerDescription = item.overview;
                    setHeaderDesc(headerDescription);
    
                    const youtubeVideoId = await getYoutubeVideoId(item);
                    if (youtubeVideoId) {
                        setYoutubeVideoId(youtubeVideoId);
                    }
    
                    const imagesResponse = await fetch(`https://api.themoviedb.org/3/movie/${item.id}/images?api_key=f0fc2c2ea8db74c1852293bba58ac8d9&language=en-US&include_image_language=en,null`);
                    const imagesData = await imagesResponse.json();
                    const billboardImage = imagesData.backdrops[0];
                    if (billboardImage) {
                        const billboardImageUrl = "https://image.tmdb.org/t/p/w500" + billboardImage.file_path;
                        setBillboardImage(billboardImageUrl);
                        setShowDesc(true);
                        setTimeout(() => {
                            setShowDesc(false);
                            setHeaderContentPaddingTop("22vw");
                        }, 5000);
                        return;
                    }
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
    
        fetchLatestMovie();
    }, []);
        
    const getYoutubeVideoId = async (item) => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${item.id}/videos?api_key=f0fc2c2ea8db74c1852293bba58ac8d9`);
            const data = await response.json();
            const youtubeVideoId = data.results[0]?.key;
            return youtubeVideoId ? youtubeVideoId : null;
        } catch (error) {
            console.error("Error fetching YouTube video:", error);
            return null;
        }
    };

    return (
        <div className='header' style={{ backgroundImage: `url(${billboardImage})` }}>
            {youtubeVideoId && !showDesc && (
                <div className="youtube-background">
                    <iframe
                        title="YouTube Video"
                        src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&controls=0&showinfo=0&autohide=1&mute=1&loop=1&playlist=${youtubeVideoId}`}
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    ></iframe>
                </div>
            )}
            <div className="header-inner-shadow"></div>
            <div className="header-content" style={{ paddingTop: headerContentPaddingTop }}>
                <div className="header-billboard">
                    {billboardImage && <img src={billboardImage} alt="billboard" />}
                </div>
                {showDesc && <h4 className="header-desc">{headerDesc}</h4>}
                <div className="header-buttons">
                    <button className="header-button play-button">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ltr-4z3qvp e1svuwfo1" data-name="Play" aria-labelledby=":R19kpt9llkm:" aria-hidden="true">
                            <path d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z" fill="currentColor"></path>
                        </svg>
                        Play
                    </button>

                    <button className="header-button more-info-button">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ltr-4z3qvp e1svuwfo1" data-name="CircleI" aria-labelledby=":Rkqt9llkm:" aria-hidden="true">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z" fill="currentColor"></path>
                        </svg>
                        More Info
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;
