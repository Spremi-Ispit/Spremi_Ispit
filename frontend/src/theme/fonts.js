const fontFamilies = {
  fontUrl:
    'https://fonts.googleapis.com/css2?family=Italianno&family=Libre+Bodoni&display=swap',
  fontFamily: "'Libre Bodoni', 'Source Sans Pro', sans-serif",
};

export const fonts = (fontSize, fontWeight, fontStyle, fontFamily) => `
    font-family: ${fontFamily ?? fontFamilies.fontFamily}; 
    font-size: ${fontSize ?? 16}px;
    font-weight: ${fontWeight};
    font-style: ${fontStyle};
`;
