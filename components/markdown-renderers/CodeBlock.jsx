import { atomOneDark, CopyBlock } from 'react-code-blocks';

import styles from '../../styles/codeblock.module.css'

const CodeBlock = ({node, inline, className, children, ...props}) => {
  const showLineNumbers = true;
  const wrapLines = true;
  const codeBlock = true;
  const match = /language-(\w+)/.exec(className || '');
  return !inline && match ? (
    <div className={styles.CodeBlock}
    >
      <CopyBlock 
        language={match[1]} 
        theme={atomOneDark}
        text={String(children).replace(/\n$/, '')}
        {...{ showLineNumbers, wrapLines, codeBlock }}
      />
    </div>
  ) : (
    <code
      className={className}
      style={{
        fontFamily: 'Fira Code',
        border: 'none',
        fontVariantLigatures: 'none',
        backgroundColor: 'rgb(246, 249, 252)',
        padding: '3px',
        borderRadius: '3px',
      }}
      {...props}
    >
      {children}
    </code>
  )
};

export default CodeBlock;