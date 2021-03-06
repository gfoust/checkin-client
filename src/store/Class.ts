import { Dictionary } from '../util';

export type ExactClassTag = 'twos' | 'threes' | 'fours' | 'kinder';

export type ClassTag = ExactClassTag | 'all';

export const classBadges: Dictionary<string, ExactClassTag> = {
  twos: '2',
  threes: '3',
  fours: '4',
  kinder: 'K',
};

export const exactClassTags: ExactClassTag[] = [
  'twos',
  'threes',
  'fours',
  'kinder',
];

export const classTags: ClassTag[] = [
  'twos',
  'threes',
  'fours',
  'kinder',
  'all',
];

export const classNames: Dictionary<string, ClassTag> = {
  twos: 'Two Year Olds',
  threes: 'Three Year Olds',
  fours: 'Four Year Olds',
  kinder: 'Pre-K and Kindergarten',
  all: 'All Classes',
};

export interface Class {
  id: string;
  tag: ExactClassTag;
  name: string;
  color: string;
}

export default Class;
