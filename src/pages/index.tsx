import React, { FunctionComponent } from 'react'
import Text from 'components/Text'

const IndexPage: FunctionComponent = function () {
  return (
    // return <Text text={10} /> // error TS2322: Type 'number' is not assignable to type 'string'. 타입스크립트 오류 예시
    <div>
      <Text text="Hello, World!" />
      <a href="/info/">To Info</a>
    </div>
  )
}

export default IndexPage
