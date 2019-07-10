import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import JumboStyled from '../components/HomeJumbo';
import MoreVideos from '../components/MoreVideos';
import PodcastPlayer from '../components/PodcastPlayer';

class IndexPage extends React.Component {
  state = {
    nextVideoId: '',
  };

  grabId = idFromChild => {
    this.setState({ nextVideoId: idFromChild });
  };

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <div className="main-grid">
          <JumboStyled idFromParent={this.state.nextVideoId}/>
          <PodcastPlayer />
          <MoreVideos callbackFromParent={this.grabId} />
        </div>
      </Layout>
    );
  }
}

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" />
//     <div className="main-grid">
//       <JumboStyled />
//       <PodcastPlayer />
//       <MoreVideos />
//     </div>
//   </Layout>
// );

export default IndexPage;
