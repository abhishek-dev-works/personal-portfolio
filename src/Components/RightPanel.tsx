import React from 'react'
import Summary from './Summary';
import Experiences from './Experiences';
import ResumeDownload from './ResumeDownload';

const RightPanel = () => {
  return (
    <div className='rightPanel'>
      <Summary />
      <Experiences />
      <ResumeDownload />
    </div>
  )
}

export default RightPanel;
