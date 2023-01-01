import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Skills.module.scss';
import { useTranslation } from 'next-i18next';

import {
  siReact,
  siJavascript,
  siNuxtdotjs,
  siNextdotjs,
  siGit,
  siHtml5,
  siPostcss,
  siVuedotjs,
  siTypescript,
  siCss3,
  siApollographql,
  siNodedotjs,
} from 'simple-icons';

const POSITIONS: (string | number | any)[][] = [
  [siJavascript, 'x', 0, 'y', 250],
  [siTypescript, 'x', 125, 'y', 216.51],
  [siNodedotjs, 'x', 216.51, 'y', 125],
  [siNuxtdotjs, 'x', 250, 'y', 0],
  [siVuedotjs, 'x', 216.51, 'y', -125],
  [siReact, 'x', 125, 'y', -216.51],
  [siNextdotjs, 'x', 0, 'y', -250],
  [siApollographql, 'x', -125, 'y', -216.51],
  [siPostcss, 'x', -216.51, 'y', -125],
  [siCss3, 'x', -250, 'y', 0],
  [siHtml5, 'x', -216.51, 'y', 125],
  [siGit, 'x', -125, 'y', 216.51],
];

export default function About() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(false);

  return (
    <main className={`${styles.main}`}>
      <motion.div
        className={styles.skillsDiv}
        initial={{ scale: 0, rotate: 720 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{
          delay: 1,
          duration: 2,
          type: 'spring',
        }}
        onClick={() => setIsOpen((_open) => !_open)}
      >
        {POSITIONS.map(([icon, v1, t1, v2, t2], index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{
              [v1]: isOpen ? t1 : 0,
              [v2]: isOpen ? t2 : 0,
              opacity: isOpen ? 1 : 0,
              scale: isOpen ? 1 : 0,
            }}
            transition={{
              delay: 0.08 * index,
              duration: 0.2,
              type: 'spring',
              damping: 12,
            }}
            className={styles.icon}
            dangerouslySetInnerHTML={{
              __html: icon.svg.replace('<svg', `<svg fill="#${icon.hex}" `),
            }}
          />
        ))}
        <motion.img
          src='/android-chrome-512x512.png'
          alt='head'
          animate={{ scale: isOpen ? 1.2 : 1, opacity: isOpen ? 1 : 0.5 }}
          whileHover={{ scale: 1.1, opacity: 0.8 }}
          transition={{
            delay: 0.25,
            duration: 1,
            type: 'spring',
          }}
          className={styles.img}
        />
      </motion.div>
    </main>
  );
}
