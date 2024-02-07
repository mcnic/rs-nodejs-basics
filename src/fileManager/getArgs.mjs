export const getArgs = () => {
  const args = {};

  process.argv
    .filter((val) => val.includes('--'))
    .map((val) => {
      const res = val.slice(2).split('=');
      args[res[0]] = res[1];
    });

  return args;
};
