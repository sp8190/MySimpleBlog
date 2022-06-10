import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

// 단순히 텍스트에 스타일을 적용해 띄워주는 단순한 컴포넌트
const FooterWrapper = styled.div`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 50px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;
`

const Footer: FunctionComponent = function () {
  return (
    <FooterWrapper>
      Thank You for Visiting My Blog!! #Blockchain #Front-end
      <br />© 2022 Developer Bingsu, Powered By Gatsby.
    </FooterWrapper>
  )
}

export default Footer