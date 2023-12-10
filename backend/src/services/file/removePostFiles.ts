// @ts-nocheck
import { removeFiles } from '../file/utils/remove';
import { directoryName } from '../file/utils/upload';

export async function removePostFiles(id) {
  await removeFiles(id, directoryName.posts);
}
