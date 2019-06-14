export const isSignedIn = (loginStatus, userID) => {
  return {
    type: "IS_SIGNED",
    isSigned: loginStatus,
    userID
  };
};
