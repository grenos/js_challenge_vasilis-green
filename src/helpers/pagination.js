/**
 * Generates an array to be used for pagination
 * @param {number} current - The current page
 * @param {number} last - The last possible page in the paged list
 * @returns {array} List of desired page numbers with ellipsis for unimportant pages
 */
export function generatePagination(current, last) {
  const offset = 2;
  const leftOffset = current - offset;
  const rightOffset = current + offset + 1;

  /**
   * Reduces a list into the page numbers desired in the pagination
   * @param {array} accumulator - Growing list of desired page numbers
   * @param {*} _ - Throwaway variable to ignore the current value in iteration
   * @param {*} idx - The index of the current iteration
   * @returns {array} The accumulating list of desired page numbers
   */
  function reduceToDesiredPageNumbers(accumulator, _, idx) {
    const currIdx = idx + 1;

    if (
      // Always include first page
      currIdx === 1
      // Always include last page
      || currIdx === last
      // Include if index is between the above defined offsets
      || (currIdx >= leftOffset && currIdx < rightOffset)) {
      return [
        ...accumulator,
        currIdx,
      ];
    }

    return accumulator;
  }


  /**
   * Transforms a list of desired pages and puts ellipsis in any gaps
   * @param {array} accumulator - The growing list of page numbers with ellipsis included
   * @param {number} currentPage - The current page in iteration
   * @param {number} currIdx - The current index
   * @param {array} src - The source array the function was called on
   */
  function transformToPagesWithEllipsis(accumulator, currentPage, currIdx, src) {
    const prev = src[currIdx - 1];

    // Ignore the first number, as we always want the first page
    // Include an ellipsis if there is a gap of more than one between numbers
    if (prev != null && currentPage - prev !== 1) {
      return [
        ...accumulator,
        '...',
        currentPage,
      ];
    }

    // If page does not meet above requirement, just add it to the list
    return [
      ...accumulator,
      currentPage,
    ];

  }

  const pageNumbers = Array(last)
    .fill()
    .reduce(reduceToDesiredPageNumbers, []);

  const pageNumbersWithEllipsis = pageNumbers.reduce(transformToPagesWithEllipsis, []);

  return pageNumbersWithEllipsis;
}


// expect(generatePagination(10, 50)).toEqual([1, '...', 8, 9, 10, 11, 12, '...', 50]);
// expect(generatePagination(50, 50)).toEqual([1, '...', 48, 49, 50]);
// expect(generatePagination(49, 50)).toEqual([1, '...', 47, 48, 49, 50]);
// expect(generatePagination(45, 50)).toEqual([1, '...', 43, 44, 45, 46, 47, '...', 50]);
// expect(generatePagination(30, 50)).toEqual([1, '...', 28, 29, 30, 31, 32, '...', 50]);
// expect(generatePagination(6, 50)).toEqual([1, '...', 4, 5, 6, 7, 8, '...', 50]);
// expect(generatePagination(5, 50)).toEqual([1, '...', 3, 4, 5, 6, 7, '...', 50]);
// expect(generatePagination(4, 50)).toEqual([1, 2, 3, 4, 5, 6, '...', 50]);
// expect(generatePagination(3, 50)).toEqual([1, 2, 3, 4, 5, '...', 50]);
// expect(generatePagination(2, 50)).toEqual([1, 2, 3, 4, '...', 50]);
// expect(generatePagination(1, 50)).toEqual([1, 2, 3, '...', 50]);


// found at https://gist.github.com/kottenator/9d936eb3e4e3c3e02598