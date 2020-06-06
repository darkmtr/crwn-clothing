import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';
import { HomePageContainer } from './homepage.styles';

export default function HomePage() {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
}
