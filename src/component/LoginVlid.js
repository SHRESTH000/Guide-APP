function validation(values) {
  let error = {};

  const email_pattern = /^[^\s@]+@[^\s@].[^\s@]+$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a=zA-Z0-9]{8,}$/;
  const username_pattern = /^[a-zA-Z0-9_]{3,20}$/; // Allows alphanumeric and underscores, 3-20 characters
  const name_pattern = /^[a-zA-Z\s]{2,30}$/; // Allows letters and spaces, 2-30 characters
  const phone_pattern = /^[0-9]{10}$/;

  if (values.email === "") {
    error.email = "Name should be not empty";
  } else if (!email_pattern.test(values.email)) {
    error.email = "Email did not match";
  } else {
    error.email = "";
  }

  if (values.password === "") {
    error.password = "Password should not empty";
  } else if (!password_pattern.test(values.password)) {
    error.password = "Password did not match";
  } else {
    error.password = "";
  }
  if (values.username === "") {
    error.username = "Username should not be empty";
  } else if (!username_pattern.test(values.username)) {
    error.username =
      "Username did not match. Must be 3-20 characters, alphanumeric or underscore";
  } else {
    error.username = "";
  }

  if (values.firstName === "") {
    error.firstName = "First name should not be empty";
  } else if (!name_pattern.test(values.firstName)) {
    error.firstName =
      "First name did not match. Must be 2-30 characters, letters and spaces only";
  } else {
    error.firstName = "";
  }

  if (values.lastName === "") {
    error.lastName = "Last name should not be empty";
  } else if (!name_pattern.test(values.lastName)) {
    error.lastName =
      "Last name did not match. Must be 2-30 characters, letters and spaces only";
  } else {
    error.lastName = "";
  }

  if (values.phone === "") {
    error.phone = "Phone number should not be empty";
  } else if (!phone_pattern.test(values.phone)) {
    error.phone = "Phone number did not match. Must be 10 digits";
  } else {
    error.phone = "";
  }
  return error;
}

export default validation;
