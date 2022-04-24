import utilStyles from '../../styles/utils.module.css';

const Paragraph = ({ node, children, ...props }) => {
  // Convert Markdown img to a stylized html img component and set properties.
  // example: ![AltText {priority}{768x432}](/image.jpg)
  // 768 would be the width, 432 would be the height
  if (node.children[0].tagName === 'img') {
    const image = node.children[0];
    const alt = image.properties.alt?.replace(/ *\{[^)]*\} */g, '');
    const isPriority = image.properties.alt?.toLowerCase().includes('{priority}');
    const loading = isPriority ? 'eager' : 'lazy';
    const metaWidth = image.properties.alt.match(/{([^}]+)x/);
    const metaHeight = image.properties.alt.match(/x([^}]+)}/);
    const width = metaWidth ? metaWidth[1] : '768';
    const height = metaHeight ? metaHeight[1] : '432';
    
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
        className='ZoomImageWrapper'
      >
        <label>
          <input className={utilStyles.displayNone} type="checkbox" />
          <img
            src={image.properties.src}
            width={width}
            height={height}
            className='postImg'
            alt={alt}
            loading={loading}
          />
        </label>
      </div>
    )
  }
  return <p {...props}>{children}</p>;
};

export default Paragraph;