"use client";

import { GithubButton } from "react-github-link-button/dist";

import { Footer, Navbar } from "../components";
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
} from "../sections";

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
    <div className="relative">
      <World />
      <Insights />
    </div>
    <Feedback />
    <Footer />
    <GithubButton href="https://github.com/andresbueno043/metaversus" message="Check out my code" />
  </div>
);

export default Page;
