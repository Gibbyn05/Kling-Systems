export const APP_BASE_PATH = "/OS";

export function appPath(path: string) {
  if (/^https?:\/\//.test(path)) return path;
  if (path === APP_BASE_PATH || path.startsWith(`${APP_BASE_PATH}/`)) return path;
  return `${APP_BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}
