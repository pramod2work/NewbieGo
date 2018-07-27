import { injectGlobal, css } from 'styled-components'
// import MyFont from './../../../assets/fonts/proxima-nova';
import styleVars, { fontFace, defaultFont } from './global'

/* eslint-disable no-unused-expressions */
injectGlobal`

  html {
    font-family: 'myraid-pro';
    ${{ ...defaultFont }};
  }

  ${fontFace('Proxima Nova', 'proxima-nova/Mark Simonson - Proxima Nova Alt Regular-webfont')}
  ${fontFace('Proxima Nova', 'proxima-nova/Mark Simonson - Proxima Nova Semibold-webfont')}

  /* stylelint-disable property-no-vendor-prefix, declaration-block-no-shorthand-property-overrides */
  body {
    margin: 0;
    color: ${styleVars.color.primaryStone} !important;
    background-color: ${styleVars.color.white} !important;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    -webkit-font-smoothing: antialiased;
    line-height: ${defaultFont.lineHeight};
    font-family: 'Proxima Nova', 'Myriad Pro', Verdana, Arial, sans-serif;
    ${{ ...defaultFont }};

    input,
    textarea,
    select,
    button {
      margin: 0;
      font-family: inherit !important;
      font-size: ${defaultFont.fontSize};
      line-height: ${defaultFont.lineHeight};
      color: ${styleVars.color.primaryStone};
    }

    select {
      -webkit-appearance: none;
    }

    input[type='number'] {
      -moz-appearance: textfield;
    }

    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    input::-ms-reveal,
    input::-ms-clear {
      display: none;
    }

    input:focus {
      outline: none;
    }

    select::-ms-expand {
      display: none;
    }

    input:disabled {
      color: ${styleVars.color.primaryStone};
      -webkit-text-fill-color: ${styleVars.color.primaryStone};
    }

    select:disabled {
      color: ${styleVars.color.primaryStone};
      -webkit-text-fill-color: ${styleVars.color.primaryStone};
    }
    /* Remove scroll on the body when react-modal is open */
    &.ReactModal__Body--open {
      overflow: hidden;
    }
  }
`
/* stylelint-enable property-no-vendor-prefix, declaration-block-no-shorthand-property-overrides */
/* eslint-enable no-unused-expressions */
