import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            Je suis un 🧑‍💻 dev web et mobile full stack. 
            Je suis passionné par l'apprentissage de nouvelles technologies
            et je comprends qu'il existe plus d'une façon d'accomplir une tâche. 
            Bien que je sois le plus compétent dans la construction de front-ends avec React et NextJS. 
            Pour le mobile, j'utilise Flutter 📱. 
            Je suis un apprenant rapide et je peux m'adapter à de nouvelles piles technologiques au besoin.
            Je crois qu'être un excellent développeur ne consiste pas à utiliser un langage spécifique,
            mais à choisir le meilleur outil pour le travail. ✨
          </p>
          <p className='py-2 text-gray-600'>
           J'ai commencé le développement web en 2019 en gérant plusieurs sites web. 
            J'ai de l'expérience en travail direct avec les clients, 
            en prenant des prototypes filaires (mock wireframes) et en les transformant en applications déployées.
            Pendant mon temps libre, 
            je gère Digital Goal, une chaîne YouTube où j'enseigne le développement web et diverses technologies front-end.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Quelques projects
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
