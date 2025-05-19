import React from 'react';

export default function VideoSection() {
  return (
    <section className="video-section">
      <h2>See GroupSync in Action</h2>
      <video className="promo-video" controls poster="/sora-video-poster.png">
        <source src="/sora-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}
