import React, { FunctionComponent } from 'react'
import Text from 'components/Text'
import { Link } from 'gatsby'
// 리액트에서 했던 것 처럼 Link API 를 통한 페이지 이동


const IndexPage: FunctionComponent = function () {
  return (
    <div>
      <Text text="Hello, World!" />
      <Link to="/info/">To Info</Link> 
    </div>
  );
};

export default IndexPage;