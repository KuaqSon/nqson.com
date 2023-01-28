import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac',
      600: '#0058C3',
      500: '#0071F0',
      400: '#3B8AE4',
      300: '#80B4FE',
      200: '#ACCEFE',
      100: '#DCEAFF',
      50: '#EDF1F5',
    },
    black: '#273151',
    muted: '#A4B0BE',
    bg: '#FAFBFC',
    bgActive: '#EBECF0',
    main: '#243151',
    heading: '#1952AF',
    semiHeading: '#0071f0',
    subHeading: '#767E86',
    mainBg: '#0071F0',
    sub: '#727A82',
    ter: '#00c6c0',
    semi: '#e8efff',
    semiActive: '#2222220d',
    active: '#eff6ff',
    secondaryMuted: '#717171',
    info: '#4457f7',
    border: '#E4E4E4',
  },
  fonts: {
    body: "'Montserrat', sans-serif",
    heading: "'Montserrat', sans-serif",
    mono: 'Menlo, monospace',
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: '10px',
        _focus: {
          boxShadow: 'none',
        },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: 'semi-bold',
        transition: 'all .2s',
      },
    },
    Heading: {
      baseStyle: {
        color: 'heading',
        fontWeight: 'semibold',
      },
    },
    IconButton: {
      baseStyle: {
        _focus: {
          boxShadow: 'none',
        },
      },
    },
    Link: {
      baseStyle: {
        _focus: {
          boxShadow: 'none',
        },
      },
    },
    Input: {
      baseStyle: {
        border: '1px',
        borderStyle: 'solid',
        borerColor: '#E4E4E4',
        borderRadius: '10px',
        _focus: {
          boxShadow: 'none',
        },
      },
    },
    NumberInput: {
      baseStyle: {
        _focus: {
          boxShadow: 'none',
        },
      },
    },
    NumberInputField: {
      baseStyle: {
        _focus: {
          boxShadow: 'none',
        },
      },
    },
    Text: {
      baseStyle: {
        color: 'black',
      },
    },
  },
  shadows: {
    base: '0 15px 35px rgb(0 0 0 / 7%)',
  },
});

export default theme;
