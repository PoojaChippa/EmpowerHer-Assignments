function countAndSortCategories(categories) {
  //  Counting categories using reduce
  const counts = categories.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  //extra challenge;
  const sorted = Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .map((entry) => entry[0]);

  return {
    counts,
    sortedCategories: sorted,
  };
}

const categories = [
  "electronics",
  "clothing",
  "electronics",
  "toys",
  "clothing",
  "toys",
  "toys",
];

console.log(countAndSortCategories(categories));
