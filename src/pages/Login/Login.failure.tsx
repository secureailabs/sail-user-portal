import { TLoginFormProps } from './Login.types';
import Page from 'src/layout/Page';
import ImageBackground from 'src/components/ImageBackground';
import CardForm from 'src/components/CardForm';
import Button from 'src/components/Button';
import Margin from 'src/components/Margin';

// @ts-ignore
import login_background from '../../assets/login_background.jpg';
// @ts-ignore
import SailLogo from '../../assets/newLogo.png';

const LoginFailure = ({ signInReset, }: { signInReset: TLoginFormProps['signInReset']; }) => {
  return (
    <Page pageType="full">
      <ImageBackground image={login_background}>
        <CardForm image={SailLogo}>
          <>
            <p style={{ textAlign: 'center', fontSize: '1.25rem' }}>Login has failed. Please check your credentials and/or try again later.</p>
            <Margin size={5} />
            <Button full button_type='primary' onClick={signInReset}>Go Back to Login Page</Button>
          </>
        </CardForm>
      </ImageBackground>
    </Page>
  );
};

export default LoginFailure;
