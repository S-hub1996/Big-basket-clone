/**
 * A function which gets the user-details from localStorage
 * @param {string} key localStorage key
 * @returns JSON value from localStorage
 */
 export function getValue(key) {
    try {
      const userDetails = localStorage.getItem(key);
      return JSON.parse(userDetails);
    } catch (err) {
      return undefined;
    }
  }
  
  /**
   * A function which updates the user-details from localStorage
   * @param {string} key localStorage key
   * @param {string} value value to store
   */
  export function setValue(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }