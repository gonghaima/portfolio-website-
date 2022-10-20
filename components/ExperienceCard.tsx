import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 
    opacity-40 cursor-pointer transition-opacity duration-200 overflow-y-hidden"
    >
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{
          once: true,
        }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://www.iag.com.au/sites/default/themes/iag2015/iag.png"
        alt="iag"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Senior frontend developer</h4>
        <p className="font-bold text-2xl mt-1">IAG</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-fill"
            src="https://img.icons8.com/dusk/2x/javascript-logo.png"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-fill"
            src="https://img.icons8.com/dusk/2x/javascript-logo.png"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-fill"
            src="https://img.icons8.com/dusk/2x/javascript-logo.png"
            alt=""
          />
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started work ... - Ended...
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>
            Summary points Summary points Summary points Summary points Summary
            points Summary points{' '}
          </li>
          <li>
            Summary points Summary points Summary points Summary points Summary
            points Summary points{' '}
          </li>
          <li>
            Summary points Summary points Summary points Summary points Summary
            points Summary points{' '}
          </li>
          <li>
            Summary points Summary points Summary points Summary points Summary
            points Summary points{' '}
          </li>
          <li>
            Summary points Summary points Summary points Summary points Summary
            points Summary points{' '}
          </li>
          <li>
            Summary points Summary points Summary points Summary points Summary
            points Summary points{' '}
          </li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
