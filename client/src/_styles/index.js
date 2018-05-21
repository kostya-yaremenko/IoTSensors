/*
 * General styles initialization.
 */
import /*styled,*/ { injectGlobal } from 'styled-components'
import styledNormalize from 'styled-normalize'

/*
 * Global _styles
 */
// eslint-disable-next-line
injectGlobal`
	/* Normalize.css include */
	${ styledNormalize }
`
