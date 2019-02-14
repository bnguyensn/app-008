// @flow

export type PersonData = {
  id: number,
  firstName: string,
  lastName: string,
  suffix: string,
  title: string,
  yob: number,
  yod: number,
  yoc: number,
  yoe: number,
  spouses: number[],
  children: number[],
  father: ?string,
  mother: ?string,
  predecessor: ?string,
  successor: ?string,
  imgPath: ?string,
};
