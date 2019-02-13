import sample_data from './sample_data/sample.json';

export function personExist(personId) {
  return Object.keys(sample_data).includes(personId.toString());
}

export function getPersonData(personId) {
  if (personExist(personId)) {
    return sample_data[personId.toString()];
  }
  throw Error(`No data available for person #${personId}`);
}

/**
 * Recursively walk the family tree and mutate an initial familyData array,
 * adding on each family member data.
 * */
export function getFamilyData(personId, depth, familyData) {
  try {
    const person = getPersonData(personId);
    const spouse = person.spouse;

    familyData.push(person, spouse);

    if (depth > 1) {
      person.children.forEach((child) => {
        getFamilyData(child, depth - 1, familyData);
      })
    }
  } catch (err) {
    console.log(err);
  }
}
