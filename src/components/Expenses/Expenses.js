import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
    return (
        <Card className='expenses'>
            {
            props.items.map((expense) => {
                return (
                    <ExpenseItem expense={expense}></ExpenseItem>
                )
            })
            }
        </Card>
    )
}

export default Expenses;