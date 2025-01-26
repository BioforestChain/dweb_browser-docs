import { isGlob, globToRegExp } from "@std/path";
export type I18nConfig = {
  ignore?: Array<(path: string) => boolean>;
};

export const createI18nConfig = (options: {
  ignore?: string[];
}): I18nConfig => {
  const ignore = options.ignore?.map((ignore) => {
    if (isGlob(ignore)) {
      const reg = globToRegExp(ignore);
      return (path: string) => reg.test(path);
    }
    return (path: string) => path.includes(path);
  });
  return { ignore };
};
