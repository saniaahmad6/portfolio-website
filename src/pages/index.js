// pages/index.js

import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Achievements from '@/components/Achievements';

import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Sania Ahmad</title>
        <meta name="description" content="Sania's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Hero />
        {/* <About /> */}
        <Experience />
        <Achievements/>
        <Skills />
        <Contact />
      </div>
    </>
  );
};

export default Home;