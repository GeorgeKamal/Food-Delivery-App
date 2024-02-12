import * as yup from 'yup';

const SignUpSchema = yup.object({
  passwordConfirm: yup
    .string()
    .required('Re-enter your password')
    .oneOf([yup.ref('password')], 'Passwords must match.'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .required('Password is required')
    .test({
      test: value =>
        RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).*$/).test(value),
      message: 'Invalid Password',
    }),
  username: yup
    .string()
    .required('Username is required')
    .test({
      test: value => RegExp(/^[a-zA-Z][a-zA-Z0-9_.-]*$/).test(value),
      message: 'Invalid Username',
    }),
});

export default SignUpSchema;
