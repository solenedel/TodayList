// colors
const colorVars = {
  primaryDark: '#4a55a5',
  primaryLight: '#C6D3FF',
  linkHover: '#FFF2C6',
};

// fonts
const fontVars = {
  titleFont: `'VT323', monospace`,
  mainFont: `'Source Code Pro', monospace`,
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

module.exports = {
  colorVars,
  fontVars,
  mainButtonStyles,
};
