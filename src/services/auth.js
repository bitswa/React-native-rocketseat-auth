export function signIn() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: "oasdasdoasndoasjdna12meo1nm",
        user: {
          name: "Gabriel",
          email: "Gabriel@gmail.com",
        },
      });
    }, 1500);
  });
}
