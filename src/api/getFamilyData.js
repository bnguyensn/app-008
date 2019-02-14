// @flow

import sample_data from './sample_data/sample.json';
import type { PersonData } from './sample_data/TypeDefs';

export function personExist(personId: number): boolean {
  return Object.keys(sample_data).includes(personId.toString());
}

export function getPersonData(personId: number): ?PersonData {
  if (personExist(personId)) {
    return sample_data[personId.toString()];
  }
  return null;
}

export function getSpousesData(personId: number): PersonData[] {
  const person = getPersonData(personId);

  if (person) {
    const spouses = person.spouses.reduce((acc, spouseId) => {
      const s = getPersonData(spouseId);
      if (s) {
        acc.push(s);
      }
      return acc
    }, []);

    return spouses
  }

  return []
}

/**
 * Recursively walk the family tree and mutate an initial familyData array,
 * adding on each family member data.
 * */
export function getFamilyData(
  personId: number,
  depth: number,
  familyData: PersonData[]
) {
  const person = getPersonData(personId);

  if (person) {
    const spouses = getSpousesData(personId);

    familyData.push(person, ...spouses);

    if (depth > 1) {
      person.children.forEach(child => {
        getFamilyData(child, depth - 1, familyData);
      });
    }
  } else {
    console.log(`No data available for person id#${personId}`);
  }
}
