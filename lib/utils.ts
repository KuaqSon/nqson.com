export const getHostname = (url: string | null | undefined): string => {
  if (!url) return '';
  return new URL(url).hostname;
};
