export const isSignedIn = loginStatus => {
  return {
    type: "IS_SIGNED",
    isSigned: loginStatus
  };
};
