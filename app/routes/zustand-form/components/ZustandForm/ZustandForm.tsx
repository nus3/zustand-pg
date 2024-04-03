import { FC, useCallback, useMemo } from "react";
import styles from "./ZustandForm.module.css";
import { Field } from "~/components/Field/Field";
import { useStore } from "~/routes/zustand-form/components/ZustandForm/useStore";

// HACK: useStore側でinitialValuesは定義
const initialValues = {
  field1: "",
  field2: "",
  field3: "",
  field4: "",
  field5: "",
  nestFields: {
    nestField1: "",
    nestField2: "",
    nestField3: "",
    nestField4: "",
    nestField5: "",
  },
};

export const ZunstandForm: FC = () => {
  const store = useStore();
  const { setFieldValue, setNestFieldValue } = store;

  // initialValuesのkeyのみを配列で取得
  const fieldNames = useMemo(() => Object.keys(initialValues), []);
  const nestFieldNames = useMemo(
    () => Object.keys(initialValues.nestFields),
    []
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
      setFieldValue(e.target.value, fieldName);
    },
    [setFieldValue]
  );

  const handleChangeNestFieldValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
      setNestFieldValue(e.target.value, fieldName);
    },
    [setNestFieldValue]
  );

  const handleSubmit = useCallback(() => {
    console.log(store);
  }, [store]);

  return (
    <form className={styles.form}>
      <button className={styles.button} type="button" onClick={handleSubmit}>
        保存
      </button>
      <div className={styles.fields}>
        {fieldNames.map((fieldName) => {
          if (fieldName === "nestFields") return;

          return (
            <Field
              key={fieldName}
              label={fieldName}
              name={fieldName}
              onChange={(e) => handleChange(e, fieldName)}
              // HACK: 型定義サボったとこ
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              value={store.fieldName}
            />
          );
        })}
      </div>

      <div className={styles.nest}>
        <h2 className={styles.nestTitle}>Nest Field</h2>
        {nestFieldNames.map((nestFieldName) => (
          <Field
            key={nestFieldName}
            label={nestFieldName}
            name={nestFieldName}
            onChange={(e) => handleChangeNestFieldValue(e, nestFieldName)}
            // HACK: 型定義サボったとこ
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            value={store.nestFields.nestFieldName}
          />
        ))}
      </div>
    </form>
  );
};
