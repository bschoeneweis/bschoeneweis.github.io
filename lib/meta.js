export const getMetaImage = (title) => {
  return (`https://og-image.vercel.app/${encodeURI(
    title
  )}.png?theme=light&md=1&fontSize=50px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-color-logo.svg&widths=350&heights=350`);
};
