// 제네릭이란 타입을 마치 함수의 파라미터처럼 사용하는 것

import React, { FunctionComponent } from 'react'

interface TextProps { // FunctionComponent 타입에 TextProps Generic을 추가
  text: string
}

const Text: FunctionComponent<TextProps> = function ({ text }) {
  return <div>{text}</div>
}

export default Text