/*
 * General styles initialization.
 */
import styled, { injectGlobal } from 'styled-components'
import styledNormalize from 'styled-normalize'
import { palette } from './theme'

/*
 * Global _styles
 */
// eslint-disable-next-line
injectGlobal`
	/* Normalize.css include */
	${ styledNormalize }
	
	*{
	  box-sizing: border-box;
	}
	
	html {
	  font-family: 'Helvetica', Arial, sans-serif;
	}
	
	body {
	  position: relative;
	}
	
	h1,h2,h3,p,span {
	  margin: 0;
	  padding: 0;
	  font-weight: normal;
	}
`

export const Container = styled.div`
  position: relative;
  padding: 80px 4% 0;
`

export const Head1 = styled.h1`
  font-size: 1.45rem;
  letter-spacing: 0.05rem;
  color: ${palette('white')};
`