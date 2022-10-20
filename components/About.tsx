import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="p-12 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        src="https://scontent-syd2-1.xx.fbcdn.net/v/t31.18172-8/470247_10150887107420973_2075308572_o.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=3VSLhqTJRuMAX8Bqla9&_nc_ht=scontent-syd2-1.xx&oh=00_AT91Ebzt32BC8zU37MDYqMUdeUg3j6ICiTZig4Vf9iL3gg&oe=63770E43"
        className="-md-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover 
        md:round-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{' '}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{' '}
          background
        </h4>
        <p className="text-sm">
          10 years Hands-on skills & experience 💗 including: • Ten years’
          experience on multiple contracts & digital team & SME & corporate
          environment. • Training & peer programming & code review, interviewing
          candidates & contributing architecture planning & showcase along with
          analysis of business requirements. • Working closely with UI/UX team
          to provide pixel accuracy responsive applications, including
          JavaScript/ES6&ES7/React/Typescript/Hook/Redux /Flux Pattern/GraphQL,
          Testing Framework Karma/Jasmine/Mocha/Jest, HTML5/CSS3,
          SASS/LESS/TailwindCSS/Bootstrap/Material, Responsive design,
          Webpack/NPM/Yarn. • Node/AWS/Express, Serverless/lambda, dynamo DB,
          aws cloud formation, SNS, Kinesis data stream, S3, apigee api gateway,
          splunk/new relic, soap/restful api integration. • Agile scrum/ Kanban
          team, SAFe – scaled agile certification. Jira/confluence integration
          with tasks & documentation. • TDD/BDD, GIT/TFS/SVN Source Control,
          Jira/Confluence, Jenkins CI/CD. Understanding of OO concept & design
          patterns - repository pattern, IOC, dependency injection, etc. •
          Microsoft certified MCTS – ASP.net web development. MuleSoft API
          developer certification. Microsoft certified MCITP – SQL database
          development. SAFe- agile certification. • Postgraduate certificate of
          Information Sciences, Bachelor of E-commerce, Diploma in advanced
          software development.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
