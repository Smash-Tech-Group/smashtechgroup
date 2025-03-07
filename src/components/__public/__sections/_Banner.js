import { useEffect } from 'react';

const Banner = () => {
    useEffect(() => {
        // Load YouTube Iframe API
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        let player;
        window.onYouTubeIframeAPIReady = () => {
            player = new window.YT.Player('video-iframe', {
                events: {
                    'onStateChange': onPlayerStateChange
                }
            });

            document.getElementById('play-button').addEventListener('click', () => {
                document.getElementById('video-overlay').style.display = 'none';
                player.playVideo();
            });
        };

        const onPlayerStateChange = (event) => {
            if (event.data === window.YT.PlayerState.ENDED) {
                document.getElementById('video-overlay').style.display = 'flex';
            }
        };

        return () => {
            window.onYouTubeIframeAPIReady = null;
        };
    }, []);

    return (
        <div className="video-banner" style={{ display: 'block', padding: 0, position: 'relative' }}>
            <div id="video-overlay" className="video-overlay">
                <button id="play-button" className="play-button">&#9658;</button>
                <div className="banner-content"> 
                    <h1> 
                        <small>Welcome to </small><br /> <span>Smash</span> Technology 
                    </h1> 
                </div>
            </div>
            <iframe
                id="video-iframe"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/BpIK7Cl4B50?enablejsapi=1"
                title="SmashTech Company"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen>
            </iframe>    
        </div>
    );
};
export default Banner;