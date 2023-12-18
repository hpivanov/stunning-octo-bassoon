class DateValidator {
  static isValidDate(dateString) {
    // BEGIN: Validation logic
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(dateString)) {
      return false;
    }

    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return false;
    }

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    if (year < 1900 || year > 2100) {
      return false;
    }

    if (month < 1 || month > 12) {
      return false;
    }

    if (day < 1 || day > 31) {
      return false;
    }

    return true;
    // END: Validation logic
  }
}
