class DateValidator {
    /**
     * Checks if a given string represents a valid date in the format "YYYY-MM-DD".
     * @param {string} dateString - The string to be validated as a date.
     * @returns {boolean} - Returns true if the string is a valid date, otherwise false.
     */
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

// Test cases
console.log(DateValidator.isValidDate("2022-01-01")); // true
console.log(DateValidator.isValidDate("2022-13-01")); // false
console.log(DateValidator.isValidDate("2022-01-32")); // false
console.log(DateValidator.isValidDate("2022-02-29")); // false (2022 is not a leap year)
console.log(DateValidator.isValidDate("2020-02-29")); // true (2020 is a leap year)
console.log(DateValidator.isValidDate("1899-01-01")); // false (year is less than 1900)
console.log(DateValidator.isValidDate("2101-01-01")); // false (year is greater than 2100)