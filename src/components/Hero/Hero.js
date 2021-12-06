import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Portfolio
      </SectionTitle>
      <SectionText>
        Coding is my passion which I found after finishing College as a business Management Student, and here I am now not giving up on what i love to do by learning to become a react-native mobile developer.
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;