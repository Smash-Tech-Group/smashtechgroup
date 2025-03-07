import { useEffect } from 'react';
import Header from '../__public/__layouts/Header';
import Banner from '../__public/__sections/_Banner';
import WhoWeAre from '../__public/__sections/_WhoWeAre';
import Map from '../__public/__sections/_Map';
import OurBusiness from '../__public/__sections/_OurBusiness';
import OurTeam from '../__public/__sections/_OurTeam';
import CoreValues from '../__public/__sections/_CoreValues';
import OurCorePurpose from '../__public/__sections/_OurCorePurpose';
import MissionVision from '../__public/__sections/MissionVision';
import OurPartners from '../__public/__sections/_OurPartners';
import LiveChatWidget from '../__public/__sections/_misc/LiveChatWidget';

const Home = (props) => {
  useEffect(() => {
    document.title = `${props.company}`;
  }, []);

  return (
    <>
    <Header />

    <Banner />

    <WhoWeAre />

    <OurBusiness />

    <OurCorePurpose />
    
    <OurTeam />

    <CoreValues />

    <MissionVision />

    <OurPartners />

    <LiveChatWidget />

    <Map />

  </>
  );
}

export default Home;