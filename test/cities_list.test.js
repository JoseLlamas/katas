import { orderCityList } from './../cities_list';

const citiesList = [
  'nashville',
  'nashville',
  'los angeles',
  'nashville',
  'memphis',
  'barcelona',
  'los angeles',
  'sevilla',
  'madrid',
  'canary islands',
  'barcelona',
  'madrid',
  'nashville',
  'barcelona',
  'london',
  'berlin',
  'madrid',
  'nashville',
  'london',
  'madrid',
];

const cityListOrder = [
  ['nashville', 5],
  ['madrid', 4],
  ['barcelona', 3],
  ['london', 2],
  ['los angeles', 2],
  ['berlin', 1],
  ['canary islands', 1],
  ['memphis', 1],
  ['sevilla', 1],
];

describe.skip('cities-list', () => {
  test('de los que más se repiten a los que menos se repiten', () => {
    const expected = cityListOrder;
    const result = orderCityList(citiesList);
    expect(result).toStrictEqual(expected);
  });
});
