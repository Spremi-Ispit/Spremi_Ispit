export function updateSearchParam(key, value, searchParams, setSearchParams) {
  const updatedSearchParams = new URLSearchParams(searchParams.toString());

  if (
    (Array.isArray(value) && value.length > 0) ||
    Number.isFinite(Number(value)) || //check 0 (zero)
    value
  ) {
    updatedSearchParams.set(key, value);
  } else {
    updatedSearchParams.delete(key);
  }
  setSearchParams(updatedSearchParams.toString());
}

export function updateSearchParams(key, value, searchParams) {
  const updatedSearchParams = new URLSearchParams(searchParams.toString());

  if (
    (Array.isArray(value) && value.length > 0) ||
    Number.isFinite(Number(value)) || //check 0 (zero)
    value
  ) {
    updatedSearchParams.set(key, value);
  } else {
    updatedSearchParams.delete(key);
  }

  return updatedSearchParams.toString();
}
