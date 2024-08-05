/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  if(transactions.length===0){
    return transactions;
  }
  let finalArray = [];

  transactions.forEach((transaction) => {
    const { category, price: totalSpent } = transaction;
    const tempObj = {
      category: category,
      totalSpent: totalSpent,
    };
    finalArray.push(tempObj);
  });
  for (i in finalArray) {
    for (j in finalArray) {
      if (finalArray[i].category == finalArray[j].category && i != j) {
        finalArray[i].totalSpent += finalArray[j].totalSpent;
        finalArray.splice(j, 1);
      }
    }
  }
  return finalArray;
}

module.exports = calculateTotalSpentByCategory;
