// colors
const colorVars = {
  primaryDark: '#4a55a5',
  primaryLight: '#C6D3FF',
  linkHover: '#FFF2C6',
};

// fonts
const fontVars = {
  titleFont: `'VT323', monospace`,
  headingFont: `'VT323', monospace`,
  mainFont: `'Overpass Mono', monospace`,
};

// Mixins
const mainButtonStyles = {
  margin: `20px`,
  backgroundColor: `${colorVars.primaryDark}`,
  color: `${colorVars.primaryLight}`,
  fontSize: `20px`,
  borderRadius: `5px`,
  height: `37px`,
  width: `70px`,
  transition: `color 0.4s`,
};

// these styles are not working properly when imported as mixin
// const mainButtonHoverStyles = {
//   color: `${colorVars.pinkHover}`,
//   transition: `color 0.4s`,
// };

const inputFieldStyles = {
  width: `180px`,
  fontSize: `18px`,
  marginLeft: `13px`,
  marginBottom: `20px`,
  border: `none`,
  borderRadius: `4px`,
};

// does not work
// const inputFieldPlaceholderStyles = {
//   color: `${colorVars.primaryDarkBrown}`,
//   opacity: `0.6`,
//   paddingLeft: `5px`,
// };

module.exports = {
  colorVars,
  fontVars,
  mainButtonStyles,
  inputFieldStyles,
};
