import { atomOneDark, CopyBlock } from "react-code-blocks";

const CodeBlock = ({node, inline, className, children, ...props}) => {
  const showLineNumbers = true;
  const wrapLines = true;
  const codeBlock = true;
  const match = /language-(\w+)/.exec(className || '');
  return !inline && match ? (
    <div
      style={{
        fontFamily: 'Fira Code',
        paddingTop: '1rem',
        paddingBottom: '1rem',
        fontSize: '.9rem',
      }}
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
        padding: '2px',
        borderRadius: '3px',
      }}
      {...props}
    >
      {children}
    </code>
  )
};

export default CodeBlock;