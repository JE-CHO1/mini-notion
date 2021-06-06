import React from 'react';
import GoogleLogin from 'react-google-login';

const Login = () => {
  // ENV로 하고 싶은데 안됨.어떤 설정인지 모르겠음. @babel/preset-env는 이미 설치함.
  // useEffect(() => {
  //   console.log(`REACT_APP_GOOGLE_API_ID = ${process.env.REACT_APP_GOOGLE_API_ID}`);
  //   console.log(`REACT_APP_GOOGLE_API_PWD = ${process.env.REACT_APP_GOOGLE_API_PWD}`);
  // }, []);
  const success = (response: any) => {
    console.log('success');
    console.log(response);
  };
  const fail = (response: any) => {
    console.log('fail');
    console.log(response);
  };

  return (
    <>
      <h1>Sign In whith Google</h1>
      <GoogleLogin
        clientId="클라이언트 아이디값"
        buttonText="GoogleLogin"
        onSuccess={success}
        onFailure={fail}
        cookiePolicy="single_host_origin"
      />
    </>
  );
};

export default Login;
