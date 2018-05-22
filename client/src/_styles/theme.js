import styledAx  from 'styled-ax'

/*
 * Theme object initialization
 */
export const theme = {
	/* Media breakpoints */
	breakpoints: {
		ss: 0,
		ms: 600,
		ls: 1280
	},

	/* Color palette */
	palette: {
		transp: 'transparent',
		white: '#ffffff',
		black: '#000000',
		black_bg: '#333333'
	}
}

/*
 * Theme accessor initialization
 */
const ax = styledAx(theme)

/*
 * Accessor exports
 */
export const palette = ax.palette