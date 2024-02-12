import * as yup from 'yup';

const ForgotPasswordSchema = yup.object({
  username: yup
    .string()
    .required('Username is required')
    .test({
      test: value => RegExp(/^[a-zA-Z][a-zA-Z0-9_.-]*$/).test(value),
      message: 'Invalid Username',
    }),
});

export default ForgotPasswordSchema;
