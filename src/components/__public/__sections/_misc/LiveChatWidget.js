import { useEffect } from 'react';

const LiveChatWidget = () => {
    useEffect(() => {
        window.__lc = window.__lc || {};
        window.__lc.license = 18844353;

        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://cdn.livechatinc.com/tracking.js';
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return null;
};
export default LiveChatWidget;