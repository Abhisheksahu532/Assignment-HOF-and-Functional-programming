let expenses =[
    {amount:100, category: "Utilities"},
    {amount:200, category: "Groceries"},
    {amount:50, category: "Enetertainment"},
];

let groceriesExpense = expenses.filter((expense)=>{
    return expense.category === "Groceries"
});

console.log(groceriesExpense)