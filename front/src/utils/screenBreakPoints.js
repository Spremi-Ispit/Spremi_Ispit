// 320px — 480px: Mobile devices.
// 481px — 768px: iPads, Tablets.
// 769px — 1024px: Small screens, laptops.
// 1025px — 1200px: Desktops, large screens.
// 1201px and more — Extra large screens, TV.

const breakPoints = `
  @media screen and (max-width: 768px) {
    width: 75%;
  }
  @media screen and (max-width: 480px) {
    width: 85%;
  }
  @media screen and (max-width: 320px) {
    width: 95%;
  }
`;
