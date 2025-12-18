export const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgba(${r}, ${g}, ${b}, 0.4)`;
};

export const stripUnit = (value: string) => {
  if (value.endsWith("rem")) return [value.slice(0, -3), "rem"];
  if (value.endsWith("em")) return [value.slice(0, -2), "em"];
  if (value.endsWith("px")) return [value.slice(0, -2), "px"];
  return [value, ""];
};

const videoExtensions = [".mp4", ".mov", ".avi", ".mkv", ".webm", ".flv"];
export const isVideo = (str: string) => {
  return videoExtensions.some((ext) => str.toLowerCase().endsWith(ext));
};
