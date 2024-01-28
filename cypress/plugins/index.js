/* eslint-disable @typescript-eslint/explicit-function-return-type */
import coverage from '@cypress/code-coverage/task';

module.exports = (on, config) => {
  coverage(on, config);
  return config;
};
