import React from 'react'
import SensorsList from '../../components/sensors_list'
import ChanelsList from '../../components/chanels_list'
import ChanelsManager from '../../components/chanels_manager'
import { Container } from '../../_styles'
import * as s from './_styles'

const MainContainer = () =>
  <Container>
    <SensorsList />
    <s.ChanelsWrap>
      <ChanelsList />
      <ChanelsManager />
    </s.ChanelsWrap>
  </Container>

export default MainContainer