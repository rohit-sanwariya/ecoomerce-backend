import {generate} from 'otp-generator'

const generator = () => {
  const otp = generate(4, {
    upperCaseAlphabets: false,
    specialChars: false,
    digits: true,
    lowerCaseAlphabets: false,
  });
  console.log(typeof otp);
  return otp
};

export default generator;