import { yupResolver } from "@hookform/resolvers/yup"
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
} from "../../components/"
import { Category } from "../../types"
import { getCategories } from "../../utils/database"

const schema = yup.object().shape({
  category: yup.number().integer().required("Category is required"),
  description: yup.string().required("Description is required"),
  amount: yup
    .number()
    .typeError("Amount must be a number")
    .positive("Amount should be greater than 0")
    .required("Amount is required"),
  date: yup.date().required("Date is required"),
  expense: yup.number().oneOf([0, 1]).required(), // 0 for expense, 1 for income
})

export const AddTransactionScreen = () => {
  const [categories, setCategories] = useState<Category[]>([])
  const [isCategoriesPickerOpen, setIsCategoriesPickerOpen] = useState(false)

  useEffect(() => {
    getCategories()
      .then((res) => setCategories(res))
      .catch(() => {})
  }, [])

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      description: "",
      amount: 0,
      expense: 0,
    },
  })
  const onSubmit = (data) => console.log(data)

  //console.log(errors)
  return (
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
                onSelectItem={(val) => onChange((val as Category).category_id)}
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
              <RadioButton.Group
                onValueChange={(val) => onChange(parseInt(val))}
                value={value?.toString()}
              >
                <View styleExtension={styles.radioGroup}>
                  <RadioButton.Item label="Expense" value="0" />
                  <RadioButton.Item label="Income" value="1" />
                </View>
              </RadioButton.Group>
            </View>
          )}
        />
        <Button
          mode="contained"
          style={styles.button}
          onPress={handleSubmit(onSubmit)}
        >
          Save Transaction
        </Button>
      </ScreenWrapper>
    </ScrollView>
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
