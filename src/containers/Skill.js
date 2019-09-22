import React from 'react';
import styled from 'styled-components';
import { Card } from 'antd';
import { has } from 'lodash';

import TheSkill from '../components/TheSkill';
import useStoreContext from '../hooks/useStoreContext';
import { skillTreesByClass } from '../constants/classes/skills';

const SkillCard = styled(Card)`
  margin-bottom: 1rem;

  &:first-child {
    margin-top: 15px;
  }

  &:last-child {
    margin-bottom: 0px;
  }
`;
const SkillContainer = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
`;
const useSkillStore = () => {
  const [{ job }] = useStoreContext();

  return { job };
};

export default () => {
  const { job } = useSkillStore();

  if (!has(skillTreesByClass, job[0])) return <div />;

  const skillTree = skillTreesByClass[job[0]];

  return (
    <>
      {job.map(j => (
        <SkillCard key={j} title={j}>
          <SkillContainer>
            {skillTree[j].map((
              skill,
              idx /* eslint-disable react/no-array-index-key */
            ) => (
              <TheSkill
                key={`${skill.id}-${idx}`}
                name={skill.name}
                maxSkillLv={skill.max}
              />
            ))}
          </SkillContainer>
        </SkillCard>
      ))}
    </>
  );
};
