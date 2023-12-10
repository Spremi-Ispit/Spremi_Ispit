export const mouseButtons = {
  left: 0,
  middle: 1,
  right: 2,
  back: 3,
  forward: 4,
  unknown: -1,
};

const detectMouseButton = (e) => {
  if (e.button === mouseButtons.left) return mouseButtons.left;

  if (e.button === mouseButtons.middle) return mouseButtons.middle;

  if (e.button === mouseButtons.right) return mouseButtons.right;

  if (e.button === mouseButtons.back) return mouseButtons.back;

  if (e.button === mouseButtons.forward) return mouseButtons.forward;

  return mouseButtons.unknown;
};

export default detectMouseButton;
