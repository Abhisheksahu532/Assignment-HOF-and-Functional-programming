let expenses =[
    {amount:100, category: "Utilities"},
    {amount:200, category: "Groceries"},
    {amount:50, category: "Enetertainment"},
];

let totalExpenses = expenses.reduce((acc, expense)=>{
    return acc + expense.amount;
}, 0);

console.log(totalExpenses);