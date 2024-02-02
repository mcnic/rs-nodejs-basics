export const sayGoodby = (userName) => {
  console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
};

export const sayInvalidMessage = () => {
  console.log('Invalid input');
};

export const sayOperationFailed = () => {
  console.log('Operation failed');
};

export const sayWelcome = (userName) => {
  console.log(`Welcome to the File Manager, ${userName}!`);
};

export const sayCurrentDir = (dir) => {
  console.log(`You are currently in ${dir}`);
};
