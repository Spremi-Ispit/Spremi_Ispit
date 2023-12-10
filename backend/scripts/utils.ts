// @ts-nocheck
/* eslint-disable */
import { isCancel, cancel } from '@clack/prompts';

export const checkIsOperationCanceled = (operationResult) => {
  if (isCancel(operationResult)) {
    cancel('Operation cancelled');
    return process.exit(0);
  }
};
