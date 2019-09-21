/**
 * Clone object.
 * @param object Object to clone.
 * @return Cloned object if success, otherwise return empty object.
 */
export const cloneObject = (object: {}) => {
    try {
      // Deep copy per: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Deep_Clone
      return JSON.parse(JSON.stringify(object));
    } catch (error) {
      console.log(error);
    }
    return {};
  };

  export const isStringEmpty = (str: any): boolean => {
    if (str) {
      const test = str + '';
      return test.trim().length === 0;
    }
    return true;
  };
  