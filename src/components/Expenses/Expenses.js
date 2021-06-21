import "../Expenses/Expenses.css";
import ExpenseItem from "../Expenses/ExpenseItem";
import Card from "../UI/Card";

const Expenses =(props)=>{


    return(
<Card className="expenses">
      <ExpenseItem title={props.expensesItemData[0].title} amount={props.expensesItemData[0].amount} date={props.expensesItemData[0].date}></ExpenseItem>
      <ExpenseItem title={props.expensesItemData[1].title} amount={props.expensesItemData[1].amount} date={props.expensesItemData[1].date}></ExpenseItem>
      <ExpenseItem title={props.expensesItemData[2].title} amount={props.expensesItemData[2].amount} date={props.expensesItemData[2].date}></ExpenseItem>
      <ExpenseItem title={props.expensesItemData[3].title} amount={props.expensesItemData[3].amount} date={props.expensesItemData[3].date}></ExpenseItem>
</Card>
    );
}
export default Expenses;