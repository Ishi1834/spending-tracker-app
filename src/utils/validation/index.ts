import * as yup from "yup"

const transactionSchema = yup.object().shape({
  category: yup.number().integer().required("Category is required"),
  description: yup.string().required("Description is required"),
  amount: yup
    .number()
    .typeError("Amount must be a number")
    .positive("Amount should be greater than 0")
    .required("Amount is required"),
  date: yup.date().required("Date is required"),
  expense: yup.string().oneOf(["True", "False"]).required(), // 0 for expense, 1 for income
})

export { transactionSchema }
