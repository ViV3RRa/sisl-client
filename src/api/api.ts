import { AccountValue } from "../customtypes";

const serverUrl = 'http://localhost:8080/SiSL';
//const serverUrl = 'http://localhost:8080';

export const getAllAccountValues: () => Promise<AccountValue[]> = async () => {
  const accountValues: AccountValue[] = [];
  try {
    const result = await fetch(
      serverUrl +
      '/accountvalue'
    );

    const jsonResult = await result.json();
    for (const i in jsonResult) {
      const accountValue = jsonResult[i] as AccountValue;
      console.log(accountValue.time);
      accountValues.push(accountValue);
    }
  } catch (error) {
    console.log(error);
  }
  console.log('Number of AccountValues: ' + accountValues.length);
  return accountValues;
};

export const getPlanDefinition = async (id: string) => {
  try {
    const result = await fetch(
      serverUrl +
        '/' +
        id
    );

    const jsonResult = await result.json();
    if (!jsonResult.hasOwnProperty('entry')) {
      return [];
    }

    return jsonResult.entry;
  } catch (error) {
    console.log(error);
  }
};

export const getPlanDefinitions = async (ids: string[]) => {
  const resultList = [];
  for (let id of ids) {
    try {
      const result = await getPlanDefinition(id);

      if (result.length < 1) {
        continue;
      }

      resultList.push(result[0]);
    } catch (error) {
      console.log(error);
    }
  }

  return resultList;
};

export const getQuestionnaire = async (id: string) => {
  try {
    const result = await fetch(
      serverUrl +
        '/' +
        id
    );

    const jsonResult = await result.json();
    if (!jsonResult.hasOwnProperty('entry')) {
      return [];
    }

    return jsonResult.entry;
  } catch (error) {
    console.log(error);
  }
};

export const getQuestionnaires = async (ids: string[]) => {
  const resultList = [];
  for (let id of ids) {
    try {
      const result = await getQuestionnaire(id);

      if (result.length < 1) {
        continue;
      }

      resultList.push(result[0]);
    } catch (error) {
      console.log(error);
    }
  }

  return resultList;
};

export const getAllPlandefinitions = async () => {
  try {
    const result = await fetch(
      serverUrl + '/'
    );

    const jsonResult = await result.json();
    if (!jsonResult.hasOwnProperty('entry')) {
      return [];
    }

    return jsonResult.entry;
  } catch (error) {
    console.log(error);
  }
};

export const getAllQuestionnaires = async () => {
  try {
    const result = await fetch(
      serverUrl +
        '/'
    );

    const jsonResult = await result.json();
    if (!jsonResult.hasOwnProperty('entry')) {
      return [];
    }

    return jsonResult.entry;
  } catch (error) {
    console.log(error);
  }
};
