import styled from 'styled-components'
import { palette } from '../../../_styles/theme'

export const HeaderWrap = styled.header`
  z-index: 3;
  position: absolute;
  width: 100%;
  top: 0;
  height: 60px;
  background-color: ${palette('black_bg')};
  a {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    text-decoration: none;
    color: ${palette('white')};
    transition: opacity .3s;
    &:hover {
      opacity: .5;
    }
    &:first-child {
      left: 5%;
    }
    &:last-child {
      right: 5%;
      svg {
        position: absolute;
        height: 100%;
        left: -25px;
      }
    }
  }
`
