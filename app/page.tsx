'use client';
import HeroSection from '@/components/HomeOther/Hero/HeroSection';
import PublisherSection from '@/components/HomeOther/Publishers/PublisherSection';
import Wrapper from '@/layout/wrapper/Wrapper';

export default function Home() {
  return (
    <Wrapper>
      <HeroSection />
      <PublisherSection />
      {/* <Container fixed>
        
        <CustomSelectNew placeholder='Select' className='selectBox' labelName='Select Role'>
          <CustomSelectNew.Option value='sales'>Sales Department</CustomSelectNew.Option>
          <CustomSelectNew.Option value='billing'>Billing Inquiry</CustomSelectNew.Option>
          <CustomSelectNew.Option value='tech'>Technical Support</CustomSelectNew.Option>
        </CustomSelectNew>
        <br />
        <CustomDatePicker placeholder='Select Date' />
        <br />
        <CustomTimePicker placeholder='Select Time' />
      </Container> */}
    </Wrapper>
  );
}
