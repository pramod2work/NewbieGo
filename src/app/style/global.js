const deepOceanBlue = '#007dba'

export const defaultFont = {
  fontSize: '16px',
  lineHeight: '1.375',
  letterSpacing: '0.2px',
  font: '-apple-system-subheadline',
}

export const extraSmallFont = {
  fontSize: '0.75em',
  lineHeight: '1.333',
  letterSpacing: '0.2px',
  font: '-apple-system-caption1',
}

export function fontFace(name, src, fontWeight = 'normal', fontStyle = 'normal'){
  return `
      @font-face{
          font-family: "${name}";
          src: url(${require('../../assets/fonts/' + src + '.eot')});
          src: url(${require('../../assets/fonts/' + src + '.eot')}?#iefix) format("embedded-opentype"),
               url(${require('../../assets/fonts/' + src + '.woff')}) format("woff"),
               url(${require('../../assets/fonts/' + src + '.ttf')}) format("truetype"),
               url(${require('../../assets/fonts/' + src + '.svg')}#${name}) format("svg");
          font-style: ${fontStyle};
          font-weight: ${fontWeight};
      }
  `
}

export const smallFont = {
  fontSize: '0.875em',
  lineHeight: '1.429',
  letterSpacing: '0',
  font: '-apple-system-footnote',
}

export const mediumFont = {
  fontSize: '1.1em',
  lineHeight: '1.333',
  letterSpacing: '0.2px',
  font: '-apple-system-body',
  verticalAlign: '-webkit-baseline-middle',
}

export const largeFont = {
  fontSize: '1.125em',
  lineHeight: '1.2',
  letterSpacing: '0.1px',
  font: '-apple-system-title2',
  fontWeight: '600',
  color: deepOceanBlue,
}

export const extraLargeFont = {
  fontSize: '1.5em',
  lineHeight: '1.062',
  letterSpacing: '0.1px',
  font: '-apple-system-title0',
  // eslint-disable-next-line no-nested-ternary
  color: deepOceanBlue,
}

const styleVars = {
  app: {
    // Assets path to map images and fonts
    assetsPath: '../../assets/',
  },
  breakpoint: {
    xs: '0px',
    sm: '480px',
    md: '768px',
    lg: '980px',
  },
  color: {
    // Color theme
    oceanBlue: '#007dba',
    oceanBlueBlured10: 'rgba(0, 125, 186, 0.1)',
    oceanBlueBlured20: 'rgba(0, 125, 186, 0.2)',
    oceanBlueBlured40: 'rgba(0, 125, 186, 0.4)',
    ocean30: '#b2d8ea',
    lightOceanBlue: '#008dd4',
    deepOceanBlue,
    green: '#64ac52',
    greenHover: '#33c133',
    white: '#fff',
    black: '#000',
    blackBlured: 'rgba(0, 0, 0, .12)',
    blackOpac: 'rgba(0, 0, 0, .65)',
    primaryStone: '#394a58',
    lighterFontStone70: '#6b7782', // this is changed to 75% stone to fix accessibility issue
    disabledStone40: '#b0b7bc',
    stoneLight: '#e2e4e6',
    stoneExtraLight: '#fafafa',
    donutColor: '#cfcfcf',
    red: '#dd2e2e',
    redBlured: 'rgba(221, 46, 46, 0.1)',
    redHover: '#ff0000',
    amber: '#f5a623',
    lightRed: 'rgba(255, 0, 0, 0.1)',
    darkblue: '#98d7f0',
    lightblue: '#e2f4fc',
    infoActionBlue: '#006ba1',
  },
  container: {
    breakpoint: {
      xs: '480px',
      sm: '600px',
      md: '771px',
    },
    width: {
      xs: '100%',
      sm: '100%',
      md: '456px',
      lg: '750px',
    },
  },
  sectionContainer: {
    paddingHorizontal: {
      xs: '16px',
      sm: '24px',
      md: '24px',
      lg: '48px',
    },
    paddingTop: {
      xs: '0',
      sm: '0',
      md: '24px',
      lg: '48px',
    },
    paddingBottom: {
      xs: '0',
      sm: '0',
      md: '24px',
      lg: '48px',
    },
    minHeight: '330px',
  },
}

export const gridTheme = {
  flexboxgrid: {
    gutterWidth: 1, // rem - 16px
    outerMargin: 2, // rem - 32px
    container: {
      sm: 48.1875, // rem - 771px
    },
    breakpoints: {
      xs: 0, // em
      sm: 30.0625, // em - 481px
      md: 37.5625, // em - 601px
      lg: 48.25, // em - 772px
    },
  },
}

export default styleVars
