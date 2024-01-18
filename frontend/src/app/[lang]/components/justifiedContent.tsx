import React from 'react';
import styles from '../styles/article.module.css';

interface JustifiedParagraphProps {
  content: string;
}

const JustifiedContent = ({ content }: JustifiedParagraphProps) => {
  // Split sentences based on uppercase letters
  const sentences = content.split(/(?<=[.?!])\s+(?=\p{Lu})/u);

  // Group sentences by joining every 3 sentences
  const groupedSentences: string[] = [];
  for (let i = 0; i < sentences.length; i += 3) {
    groupedSentences.push(sentences.slice(i, i + 3).join(' '));
  }

  return (
    <div className={styles.justifiedParagraph}>
      {groupedSentences.map((group, index) => (
        <div key={index}>
          <p className='custom-font-barlow'>{group}</p>
          {index < groupedSentences.length - 1 && <br />}
        </div>
      ))}
    </div>
  );
};

export default JustifiedContent;
