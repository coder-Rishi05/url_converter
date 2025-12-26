export const isValidUrl = (url) => {
  if (!url) return false;

  return url.startsWith("http://") || url.startsWith("https://");
};
