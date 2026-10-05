import es, { Dictionary } from './dictionaries/es';
import fr from './dictionaries/fr';

const dictionaries: Record<string, Dictionary> = {
  es,
  fr,
};

export const getDictionary = (locale: string): Dictionary => {
  return dictionaries[locale] || dictionaries['es'];
};

export type { Dictionary };
