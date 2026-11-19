
import { Metadata } from 'next';
import {
  GraduationCap,
  Users,
  Trophy,
  History,
  ExternalLink,
  Download,
} from 'lucide-react';

import styles from '@/styles/ArticlesPage.module.css';

export const metadata: Metadata = {
  title: 'Journey',
};

const journey = [
  {
    year: '2022 – 2026',
    category: 'Education',
    title: 'IIT (ISM) Dhanbad',
    subtitle: 'Bachelor of Technology',
    description:
      'Completed my undergraduate journey at IIT (ISM) Dhanbad, developing my technical knowledge, problem-solving abilities, and interest in technology.',
    icon: GraduationCap,
  },
  {
    year: 'College',
    category: 'Clubs & Communities',
    title: 'CodeISM',
    subtitle: 'Competitive Programming Mentor',
    description:
      'Mentoring students in competitive programming and helping them improve their problem-solving skills and algorithmic thinking.',
    icon: Users,
  },
  {
    year: 'College',
    category: 'Clubs & Communities',
    title: 'Smart Manufacturing Club',
    subtitle: 'Club Member',
    description:
      'Participated in club activities and explored technology, innovation, and smart manufacturing.',
    icon: Users,
  },
  {
    year: 'Hackathon',
    category: 'Participation',
    title: 'Amazon HackOn',
    subtitle: 'Qualified for the Ideation Round',
    description:
      'Progressed to the Ideation Round of Amazon HackOn, gaining experience in problem-solving, innovation, and developing ideas for real-world challenges.',
    icon: Trophy,
  },
];

export default function ArticlesPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerMain}>
            <div className={styles.iconWrapper}>
              <History className={styles.icon} size={24} />
            </div>

            <div className={styles.headerContent}>
              <div className={styles.headerTop}>
                <h1 className={styles.title}>My Journey</h1>
              </div>

              <p className={styles.subtitle}>
                A glimpse into my academic journey, communities,and experiences beyond coding.
              </p>
            </div>
          </div>

          <div className={styles.resumeActions}>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.profileLink}
            >
              <span>View Resume</span>
              <ExternalLink size={14} />
            </a>

          </div>
        </header>

        <section className={styles.articlesList}>
          {journey.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className={styles.journeyCard}
              >
                <div className={styles.journeyTimeline}>
                  <div className={styles.journeyIcon}>
                    <Icon size={19} />
                  </div>

                  {index !== journey.length - 1 && (
                    <div className={styles.journeyLine} />
                  )}
                </div>

                <div className={styles.journeyContent}>
                  <div className={styles.journeyMeta}>
                    <span className={styles.journeyCategory}>
                      {item.category}
                    </span>

                    <span className={styles.journeyYear}>
                      {item.year}
                    </span>
                  </div>

                  <h2 className={styles.journeyTitle}>
                    {item.title}
                  </h2>

                  <p className={styles.journeySubtitle}>
                    {item.subtitle}
                  </p>

                  <p className={styles.journeyDescription}>
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </section>
      </div>
    </main>
  );
}
