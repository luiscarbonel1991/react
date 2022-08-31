const AddExpense = (props) => {

    const enableSubmit = () => {
        props.onEnableOrDisableSubmitHandler(true)
    }

    return (
        <div className="text-center">
        <button onClick={enableSubmit}>
          Add Expense
        </button>
      </div>  
    )
} 

export default AddExpense;