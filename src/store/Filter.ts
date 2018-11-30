import { Dictionary } from '../util';
import { classNames, ExactClassTag } from './Class';

export type Filter = ExactClassTag | 'a_m' | 'n_z';

export type FilterSet = Partial<Dictionary<boolean, Filter>>;

export const filterNames: Dictionary<string, Filter> = {
  twos: classNames.twos,
  threes: classNames.threes,
  fours: classNames.fours,
  kinder: classNames.kinder,
  a_m: 'Names A – M',
  n_z: 'Names N – Z',
};

export const filterOrder: Filter[] = [
  'twos',
  'threes',
  'fours',
  'kinder',
  'a_m',
  'n_z',
];

export const allFiltersOn: FilterSet = {
  twos: true,
  threes: true,
  fours: true,
  kinder: true,
  a_m: true,
  n_z: true,
};

export function filtersEqual(a: FilterSet, b: FilterSet) {
  // tslint:disable:triple-equals
  return (
    a.twos == b.twos &&
    a.threes == b.threes &&
    a.fours == b.fours &&
    a.kinder == b.kinder &&
    a.a_m == b.a_m &&
    a.n_z == b.n_z
  );
}

Object.freeze(allFiltersOn);
