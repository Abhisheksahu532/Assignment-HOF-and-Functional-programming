let expenses =[
    {amount:100, category: "Utilities"},
    {amount:200, category: "Groceries"},
    {amount:50, category: "Enetertainment"},
];

function categorizeExpense(expense){
    if(expense.amount>100){
        return "High Expense"
    }
    else{
        return "Low Expense"
    }
}

let categorizedExpenses = expenses.map((expense)=>{
   return categorizeExpense(expense);
});

console.log(categorizedExpenses);

    