import dictionaryJson from '@/static/dictionary.json';

type Dictionary = typeof dictionaryJson;

export const dict = (path: string) => {
  const keys = path.split('.') as (keyof Dictionary)[];

  let value: any = dictionaryJson;

  keys.forEach((key) => {
    value = value[key];
  });

  return value ?? '';
};
