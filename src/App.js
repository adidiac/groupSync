import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import Hero from './components/Hero';
import FeatureBlock from './components/FeatureBlock';
import Divider from './components/Divider';
import PreviewIframe from './components/PreviewIframe';
import HowItWorks from './components/HowItWorks';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Newsletter from './components/Newsletter';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

const GlobalStyle = createGlobalStyle`
  html { scroll-behavior: smooth; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: 'Segoe UI', sans-serif;
    background: #000;
    color: #fff;
  }
`;

const theme = {
  bg:    '#000',
  fg:    '#fff',
  sub:   '#888',
  accent:'#00ffd5',
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>

      <Hero />

      <FeatureBlock
        id="overview"
        title="Snap & Split Bills"
        description="Use your camera to instantly scan any restaurant receipt. OCR auto-detects each line item, you tap to assign dishes to members, and GroupSync calculates tip, tax, and per-person totals in real time."
        videoSrc="/videos/split_bill.mp4"
      />
      <Divider />

      <FeatureBlock
        title="Movie Night"
        description="Swipe through a carousel of movie posters. Swipe right to add to your group’s watchlist or left to skip. Everyone’s votes sync live so you pick the perfect film—no more arguments."
        videoSrc="/videos/movie_night.mp4"
      />
      <Divider />

      <FeatureBlock
        title="BBQ Planner"
        description="Plan your next cookout in a chat-style feed: propose items, upvote or downvote suggestions like burgers or skewers, then finalize to generate a shared shopping list—ready for the grill."
        videoSrc="/videos/bbq.mp4"
      />
      <Divider />

      <FeatureBlock
        title="Share Memories"
        description="Capture and share your favorite moments in the social feed. Upload group selfies, concert snapshots, or quick clips—then watch hearts and comments pour in from your friends."
        videoSrc="/videos/memories.mp4"
      />
      <Divider />

      <FeatureBlock
        title="Group Tasks"
        description="Assign and track tasks for every member: who scans the receipt, who finalizes the BBQ list, who shares memories. Each person sees their to-dos and checks them off in real time."
        videoSrc="/videos/tasks.mp4"
      />
      <Divider />

      <PreviewIframe src="https://app.uizard.io/p/74444199/embed" />
      <Divider />

      <HowItWorks />
      <Divider />

      <Team />
      <Divider />

      <Testimonials />
      <Divider />

      <FAQ />
      <Divider />

      <Newsletter />
      <Divider />

      <CallToAction />
      <Footer />
    </ThemeProvider>
  );
}
