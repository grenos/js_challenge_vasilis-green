/**
 * Generates an array to be used for pagination
 * @param {number} current - The current page
 * @param {number} last - The last possible page in the paged list
 * @param {boolean} ww - checks if mobile and adjust shown pages (responsive)
 * @returns {array} List of desired page numbers with ellipsis for unimportant pages
 */
export function generatePagination(current, last, ww) {

  let offset;
  ww ? offset = 0 : offset = 2;

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
      // Always include first page unless it's mobile
      (currIdx === 1 && !ww)
      // Always include last page unless it's mobile
      || (currIdx === last && !ww)
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


// INITIAL VERSION FOUND AT
// https://gist.github.com/kottenator/9d936eb3e4e3c3e02598