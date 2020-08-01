/*
 * 报告页组件
 */

import ProLayout from '@ant-design/pro-layout';
import React, { useState, useEffect } from 'react';
import { Spin, Table, Card, Row, Col, Divider, Layout } from 'antd';
import CalculateScore from './components/CalculateScore';
import WeightControlTable from './components/WeightControl';
import NutritionAssessmentTable from './components/NutritionAssessment';
import EstimateOverweight from './components/EstimateOverweight';
import ObesityAnalysis from './components/ObesityAnalysis';
import MuscleBalance from './components/MuscleBalance';

import PeopleInfo from './components/PeopleInfo';
import Tester from './components/Tester';
import AnalysisOfHumanComposition from './components/AnalysisOfHumanComposition';
// import styles from './index.less';
import ResearchProject from './components/ResearchProject';
import BioelectricalImpedance from './components/BioelectricalImpedance';
// import HistoryRecord from './components/HistoryRecord';
import AnalysisOfMuscleFat from './components/AnalysisOfMuscleFat';
import AnalysisObesity from './components/AnalysisObesity';
import AnalysisOfSegmentalFat from './components/AnalysisOfSegmentalFat';

export default () => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <Layout>
      {/*       <PageHeaderWrapper>
        <div style={{ textAlign: 'center' as 'center' }}>
          <Spin spinning={loading} size="large" />
        </div>
      </PageHeaderWrapper> */}
      <div style={{ textAlign: 'center' as 'center' }}>
        <Spin spinning={loading} size="large" />
      </div>
      <Card style={{ overflowX: 'scroll' }}>
        <CalculateScore />
        <PeopleInfo />
      </Card>
      <Card>
        <AnalysisOfHumanComposition />
      </Card>
      <Card style={{ textAlign: 'center' }}>
        <Row align="middle" justify="center">
          <Col flex={2}>
            <Card>
              <ResearchProject />
            </Card>
          </Col>
        </Row>
        <Card>
          <Row align="middle" justify="center">
            <Col flex={2}>
              <NutritionAssessmentTable />
            </Col>
            <Divider type="vertical" style={{ height: 200 }}></Divider>
            <Col flex={3}>
              <WeightControlTable />
            </Col>
          </Row>
        </Card>
      </Card>
      <Card>
        <EstimateOverweight />
      </Card>
      <Card style={{ overflowX: 'scroll' }}>
        <AnalysisObesity />
      </Card>
      <Card>
        <AnalysisOfMuscleFat />
        {/* <Tester /> */}
      </Card>
      <Card>
        <AnalysisOfSegmentalFat />
      </Card>
      <Card style={{ textAlign: 'center' }}>
        <BioelectricalImpedance />
      </Card>
      <Card style={{ overflowX: 'scroll' }}>
        {/*
        <Row>
          <Col sm={24} md={12}><Card><AnalysisObesity /></Card></Col>
          <Col sm={24} md={12}><Card><MuscleBalance /></Card></Col>
        </Row>
        */}
        <MuscleBalance />
      </Card>
      <Card style={{ textAlign: 'center' }}>
        <h2>更多内容，敬请期待</h2>
      </Card>
    </Layout>
  );
};
