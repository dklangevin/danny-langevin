import styled, { css } from 'styled-components';
import Link from 'next/link';
import ExperienceBlock from './ExperienceBlock';

export default function Experience() {
  const experience = [
    {
      position: 'Full Stack Software Engineer',
      company: 'Rival Games',
      logo: '/rival-badge.png',
      slug: 'rival',
      timeRange: 'Feb. 2022 - Present',
      description: [
        'Developed web pages and features for RivalGames.com, an admin portal, and other private sites for the company, all with CI/CD practices',
        'Designed and developed full-stack features, from initial concept to full-scale production implementation',
        'Front-end development (React, Next): Designed and implemented responsive, modern webpages from the ground-up; created forms, modals, reusable components, etc.; implemented SSR and ISR',
        'Back-end development (Node, Express): REST API, cron services, OAuth, integrations, caching Technologies: React, Next, SWR, Node, Express, Sequelize, PostgreSQL, Formik, styled-components, SWR, Axios, Playwright, Pusher, Reddis',
        'Integrations: Stripe, Uploadcare, Discord, OAuth',
      ],
    },
    {
      position: 'Software Engineer II',
      company: 'Special Aerospace Services',
      logo: '/sas.png',
      slug: 'sas',
      timeRange: 'May 2018 - Feb. 2022',
      description: [
        'Highest position: Software tools developer under contract with Sierra Nevada Corporation (SNC)',
        'Developing Python tools/programs - back-ends and GUIs (PyQt) under controlled Agile environment',
        'Web development (Node.js, Express.js, Bootstrap)',
        'Database management (MariaDB/MySQL)',
        'Linux (CentOS) server administration and configuration',
        'Promoted to Lead of the unit testing team after one year of internship (during school), and six months of full-time employment. Managed team progress, metrics, and served as an important resource to the newer unit testers.',
        'Wrote numerous Python tools, including tools to automatically regression-test all previous test harnesses on new code builds',
        'Performed unit-level testing of United Launch Alliance (ULA) launch vehicle flight software across multiple programs and product lines, including Common Avionics, Commercial Crew Program, Interim Cryogenic Propulsion Stage, and Vulcan.',
        'Used LDRA Testbed tool suite in combination with Eclipse in a Linux environment',
        'Developed test cases based on launch vehicle flight software requirements (requirements-driven testing), and in accordance with DO-178 standards, including MC/DC coverage',
        'Gained extensive knowledge of the Ada programming language, Tartan Ada compiler suite, and MIL-STD-1750a assembly',
      ],
    },
    {
      position: 'Intern',
      company: 'Coloplast',
      logo: '/coloplast.png',
      slug: 'coloplast',
      timeRange: 'Summer 2016',
      description: [
        'Wrote various scripts to rename and organize files',
        'Analyzed documentation',
        'Various other tasks',
      ],
    },
  ];
  return (
    <Container>
      <Content>
        <Title>Experience</Title>
        {experience.map((item, i) => (
          <ExperienceBlock
            experience={item}
            key={i}
            // style={i % 2 ? { marginLeft: 'auto' } : {}}
          />
        ))}
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, #00000000 0%, #222222 50%);
  height: calc(130vh - 80px);
`;

const Content = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Title = styled.span`
  font: 900 40px 'Monument';
  line-height: 36px;
  text-transform: uppercase;
  padding: 32px;
  color: #aaaaaa;
  font-style: italic;
  /* @supports ((text-stroke: 1px white) or (-webkit-text-stroke: 1px white)) {
    color: transparent;
    -webkit-text-stroke: 1px white;
    text-stroke: 1px white;
    text-shadow: none;
  } */
`;