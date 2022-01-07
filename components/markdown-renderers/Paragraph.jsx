import Image from 'next/image'

const Paragraph = ({node, children, ...props}) => {
  // Convert Markdown img to next/image component and set height, width and priority
  // example: ![AltText {priority}{768x432}](/image.jpg)
  // 768 would be the width, 432 would be the height
  if (node.children[0].tagName === 'img') {
    const image = node.children[0];
    const alt = image.properties.alt?.replace(/ *\{[^)]*\} */g, '');
    const isPriority = image.properties.alt?.toLowerCase().includes('{priority}');
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
      >
        <Image
          src={image.properties.src}
          width={width}
          height={height}
          className='postImg'
          alt={alt}
          priority={isPriority}
        />
      </div>
    )
  }
  return <p {...props}>{children}</p>;
};

export default Paragraph;