import { FC, useCallback, useMemo } from "react";
import styles from "./ZustandSelectorForm.module.css";
import { FieldFactory } from "~/routes/zustand-separated-form/components/FieldFactory/Field";
import { useSeparatedStore } from "~/routes/zustand-separated-form/useSeparatedStore";
import { NestFieldFactory } from "~/routes/zustand-separated-form/components/FieldFactory/NestField";

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

export const ZunstandSelectorForm: FC = () => {
  const store = useSeparatedStore();

  // initialValuesのkeyのみを配列で取得
  const fieldNames = useMemo(() => Object.keys(initialValues), []);
  const nestFieldNames = useMemo(
    () => Object.keys(initialValues.nestFields),
    []
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

          return <FieldFactory key={fieldName} fieldName={fieldName} />;
        })}
      </div>

      <div className={styles.nest}>
        <h2 className={styles.nestTitle}>Nest Field</h2>
        {nestFieldNames.map((nestFieldName) => (
          <NestFieldFactory key={nestFieldName} fieldName={nestFieldName} />
        ))}
      </div>
    </form>
  );
};
