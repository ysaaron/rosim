import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const TheSkillContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 14.2%;
  margin: 0.5rem 0;
  cursor: default;

  & > div:not(:last-child) {
    padding-bottom: 0.5rem;
  }
`;
const ContainerInnerWrapper = styled.div`
  align-items: center;
  display: flex;
  position: relative;
  flex-direction: column;
  width: 50%;
  user-select: none;
  border-radius: 2px;

  &::after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }

  &:not(.non-skill) {
    transition: background-color 0.1s cubic-bezier(0.42, 0, 0.58, 1);

    &:hover {
      background: rgba(255, 182, 182, 0.3);
    }

    &:active {
      background: rgba(255, 182, 182, 0.5);
    }
  }
`;
const TheSkillBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;

  & > div:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;
const SkillImg = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 2px;
  border: 1px solid #dcdcdc;

  & > img {
    vertical-align: top !important;
  }
`;

const TheSkill = props => {
  const { name, skillLv, maxSkillLv } = props;
  const isNonSkill = !name;
  const containerInnerWrapperClass = `${isNonSkill ? 'non-skill' : ''}`;

  return (
    <TheSkillContainer>
      <ContainerInnerWrapper className={containerInnerWrapperClass}>
        <TheSkillBody>
          <div>{name}</div>

          <SkillImg>
            {isNonSkill ? null : <img alt="" src="https://fakeimg.pl/24" />}
          </SkillImg>

          <div>{isNonSkill ? '' : `${skillLv} / ${maxSkillLv}`}</div>
        </TheSkillBody>
      </ContainerInnerWrapper>
    </TheSkillContainer>
  );
};
TheSkill.propTypes = {
  // img: PropTypes.string,
  maxSkillLv: PropTypes.number,
  name: PropTypes.string,
  skillLv: PropTypes.number,
};
TheSkill.defaultProps = {
  // img: '',
  maxSkillLv: 0,
  name: '',
  skillLv: 0,
};

export default TheSkill;
