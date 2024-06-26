import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/resumons.jpg';
import cryptoImg from '../public/assets/projects/codex.jpg'
import netflixImg from '../public/assets/projects/digitalgoal.jpg'
import twitchImg from '../public/assets/projects/finance.jpg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Resumons les articles '
            backgroundImg={propertyImg}
            projectUrl='https://aisumrize.vercel.app/'
            tech='React JS'
          />
          <ProjectItem
            title='Mon chatGPT'
            backgroundImg={cryptoImg}
            projectUrl='https://prince-chat-x.vercel.app/'
            tech='React JS'

          />
          <ProjectItem
            title='Mon site web pro'
            backgroundImg={netflixImg}
            projectUrl='https://digitalgoalservices.vercel.app/'
            tech='React JS'

          />
          <ProjectItem
            title='Application de finance'
            backgroundImg={twitchImg}
            projectUrl='https://money-tracker-jet.vercel.app'
            tech='Next JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
