import { theme as defaultTheme } from '@chakra-ui/core';

export const theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    'brand-blue': {
      50: '#c2dafc',
      100: '#84b6f8',
      200: '#5b9df6',
      300: '#4791f5',
      400: '#3285f4',
      500: '#2d78dc',
      600: '#286ac3',
      700: '#1e5092',
      800: '#143562',
      900: '#0a1b31',
    },
    'brand-red': {
      50: '#f9c7c2',
      100: '#f28e86',
      200: '#ee695d',
      300: '#ec5649',
      400: '#ea4335',
      500: '#d33c30',
      600: '#bb362a',
      700: '#8c2820',
      800: '#5e1b15',
      900: '#2f0d0b',
    },
    'brand-yellow': {
      50: '#feebb4',
      100: '#fdd769',
      200: '#fcc937',
      300: '#fbc31e',
      400: '#fbbc05',
      500: '#e2a905',
      600: '#c99604',
      700: '#977103',
      800: '#644b02',
      900: '#322601',
    },
    'brand-green': {
      50: '#c2e5cb',
      100: '#85cb98',
      200: '#5db975',
      300: '#48b164',
      400: '#34a853',
      500: '#2f974b',
      600: '#2a8642',
      700: '#1f6532',
      800: '#154321',
      900: '#0a2211',
    },
  },
  fonts: {
    body: 'Roboto, sans-serif',
    heading: 'Roboto, serif',
    mono: 'Roboto Mono, monospace',
  },
};
