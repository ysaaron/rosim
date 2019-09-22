import React from 'react';
import { Col, Row } from 'antd';

import Skill from '../containers/Skill';

export default () => {
  return (
    <Row gutter={16}>
      <Col xs={24} lg={18} xxl={{ offset: 3 }}>
        <Skill />
      </Col>
    </Row>
  );
};
