import { css } from 'styled-components';
import { theme } from './theme';

/*
 * Media queries breakpoints from the 'theme' object
 */
const breakpoints = theme.breakpoints;

/*
 * Media queries implementation method
 */
export const media = Object.keys( breakpoints ).reduce(( acc, label ) => {
	acc[ label ] = (...args) => css`
        @media (min-width: ${breakpoints[ label ] / 16}em) {
            ${css(...args)}
        }
    `
	return acc
}, {});