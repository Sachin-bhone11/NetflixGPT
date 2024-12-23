export const checkValidData = (email, password, name) => {
  const isNameValid = /^[a-zA-Z][a-zA-Z0-9_]{5,19}$/.test(name);

  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isNameValid) return "Name is not valid";
  if (!isEmailValid) return "Email id is not valid";
  if (!isPasswordValid) return "Password id not valid";

  return null;
};
