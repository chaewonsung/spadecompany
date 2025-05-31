import React from 'react';
import { useParams } from 'react-router-dom';
import OrgInfo from '../components/OrgInfo/OrgInfo';
import contentData from '../data/orgInfo.json';

const OrgInfoPage = () => {
  const { org } = useParams();
  const content = { ...contentData.data }[org];

  if (!content) return <div>페이지를 찾을 수 없습니다.</div>;

  return <OrgInfo content={content} />;
};

export default OrgInfoPage;
