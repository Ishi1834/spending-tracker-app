import { yupResolver } from "@hookform/resolvers/yup"
import { ParamListBase } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { useEffect, useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { StyleSheet, Image, ScrollView } from "react-native"
import * as yup from "yup"
import {
  ScreenWrapper,
  Picker,
  TextInput,
  DatePicker,
  RadioButton,
  View,
  Button,
  HelperText,
  Snackbar,
} from "../../components/"
import { Category, TransactionFormData } from "../../types"
import { getCategories, addTransaction } from "../../utils/database"

const schema = yup.object().shape({
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

type AddTransactionScreenProps = {
  navigation: StackNavigationProp<ParamListBase, "AddATransaction", undefined>
}

export const AddTransactionScreen = ({
  navigation,
}: AddTransactionScreenProps) => {
  const [categories, setCategories] = useState<Category[]>([])
  const [isCategoriesPickerOpen, setIsCategoriesPickerOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isShowingError, setIsShowingError] = useState(false)

  useEffect(() => {
    getCategories()
      .then((res) => setCategories(res))
      .catch(() => {})
  }, [])

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TransactionFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      description: "",
      amount: 0,
      expense: "True",
    },
  })

  const onSubmit = (data: TransactionFormData) => {
    setIsLoading(true)
    addTransaction(data)
      .then(() => {
        setIsLoading(false)
        navigation.goBack()
      })
      .catch(() => {
        setIsLoading(false)
        setIsShowingError(true)
      })
  }

  return (
    <>
      <ScrollView>
        <ScreenWrapper styleExtension={styles.container}>
          <Image
            source={require("../../../assets/adaptive-icon.png")}
            style={styles.image}
          />
          <Controller
            control={control}
            render={({ field: { onChange, value, onBlur } }) => (
              // eslint-disable-next-line react-native/no-inline-styles
              <View styleExtension={{ ...styles.inputWrapper, zIndex: 999 }}>
                <Picker<Category>
                  open={isCategoriesPickerOpen}
                  setOpen={setIsCategoriesPickerOpen}
                  schema={{
                    label: "category_name",
                    value: "category_id",
                  }}
                  items={categories}
                  value={value}
                  // Temporary fix, as setValue expects a react state setter function
                  setValue={() => ({})}
                  onSelectItem={(val) =>
                    onChange((val as Category).category_id)
                  }
                  onClose={onBlur}
                  multiple={false}
                  placeholder="Select a category"
                  listMode="SCROLLVIEW"
                  zIndex={999}
                  error={Boolean(errors.category)}
                />
                <HelperText type="error" visible={Boolean(errors.category)}>
                  {errors.category?.message}
                </HelperText>
              </View>
            )}
            name="category"
          />
          <Controller
            control={control}
            name="description"
            render={({ field: { onChange, value, onBlur } }) => (
              <View styleExtension={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  mode="outlined"
                  label="Description"
                  onChangeText={onChange}
                  value={value}
                  onBlur={onBlur}
                  error={Boolean(errors.description)}
                />
                <HelperText type="error" visible={Boolean(errors.description)}>
                  {errors.description?.message}
                </HelperText>
              </View>
            )}
          />
          <Controller
            control={control}
            name="amount"
            render={({ field: { onChange, value, onBlur } }) => (
              <View styleExtension={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  mode="outlined"
                  label="Amount"
                  onChangeText={onChange}
                  inputMode="numeric"
                  value={value?.toString()}
                  onBlur={onBlur}
                  error={Boolean(errors.amount)}
                />
                <HelperText type="error" visible={Boolean(errors.amount)}>
                  {errors.amount?.message}
                </HelperText>
              </View>
            )}
          />
          <Controller
            control={control}
            name="date"
            render={({ field: { onChange, value, onBlur } }) => (
              <View styleExtension={styles.inputWrapper}>
                <DatePicker
                  label="Transaction Date"
                  mode="outlined"
                  value={value}
                  onChange={onChange}
                  inputMode="start"
                  withDateFormatInLabel={false}
                  style={styles.input}
                  onBlur={onBlur}
                  hideValidationErrors={true}
                  placeholder="MM/DD/YYYY"
                  onValidationError={(error) =>
                    error && control.setError("date", { message: error })
                  }
                  error={Boolean(errors.date)}
                  hasError={Boolean(errors.date)}
                />
                <HelperText type="error" visible={Boolean(errors.date)}>
                  {errors.date?.message}
                </HelperText>
              </View>
            )}
          />

          <Controller
            control={control}
            name="expense"
            render={({ field: { onChange, value } }) => (
              <View styleExtension={styles.radioGroupWrapper}>
                <RadioButton.Group onValueChange={onChange} value={value}>
                  <View styleExtension={styles.radioGroup}>
                    <RadioButton.Item label="Expense" value="True" />
                    <RadioButton.Item label="Income" value="False" />
                  </View>
                </RadioButton.Group>
              </View>
            )}
          />
          <Button
            mode="contained"
            style={styles.button}
            onPress={handleSubmit(onSubmit)}
            loading={isLoading}
          >
            Save Transaction
          </Button>
        </ScreenWrapper>
      </ScrollView>
      <Snackbar
        visible={isShowingError}
        onDismiss={() => setIsShowingError(false)}
      >
        Error adding transaction. Please try again.
      </Snackbar>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "100%",
    width: "100%",
    marginBottom: 20,
  },
  image: {
    width: 250,
    height: 200,
  },
  inputWrapper: {
    width: "100%",
  },
  input: {
    marginTop: 10,
    width: "100%",
  },
  radioGroupWrapper: {
    marginTop: 0,
    width: "100%",
  },
  radioGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    marginTop: 40,
    width: "100%",
  },
})
