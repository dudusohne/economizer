import { css } from 'styled-components';

interface Breakpoint {
  label: string;
  min: string;
}

const breakpoints: Breakpoint[] = [
  { label: 'lowMobile', min: '0px' },
  { label: 'mediumMobile', min: '390px' },
  { label: 'highMobile', min: '480px' },
  { label: 'tablet', min: '600px' },
  { label: 'ipad', min: '820px' },
  { label: 'notebook', min: '992px' },
  { label: 'desktop', min: '1200px' },
];

export const responsivity: Record<Breakpoint['label'], typeof css> =
  breakpoints.reduce((accumulator, { label, min }) => {
    accumulator[ label ] = (...args: Parameters<typeof css>) => css`
      @media (min-width: ${min}) {
        ${css(...args)};
      }
    `;
    return accumulator;
  }, {} as Record<Breakpoint['label'], typeof css>);
