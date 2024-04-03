import { FC, useCallback, useMemo, useState } from "react";
import styles from "./NormalForm.module.css";
import { Field } from "~/components/Field/Field";

type NormalFormValues = {
  field1: string;
  field2: string;
  field3: string;
  field4: string;
  field5: string;
  nestFields: {
    nestField1: string;
    nestField2: string;
    nestField3: string;
    nestField4: string;
    nestField5: string;
  };
};

const initialValues: NormalFormValues = {
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

export const NormalForm: FC = () => {
  const [formValues, setFormValues] = useState(initialValues);

  // initialValuesのkeyのみを配列で取得
  const fieldNames = useMemo(() => Object.keys(initialValues), []);
  const nestFieldNames = useMemo(
    () => Object.keys(initialValues.nestFields),
    []
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
      setFormValues((prev) => ({
        ...prev,
        [fieldName]: e.target.value,
      }));
    },
    []
  );

  const handleChangeNestFieldValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
      setFormValues((prev) => ({
        ...prev,
        nestFields: {
          ...prev.nestFields,
          [fieldName]: e.target.value,
        },
      }));
    },
    []
  );

  const handleSubmit = useCallback(() => {
    console.log(formValues);
  }, [formValues]);

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
              value={formValues.fieldName}
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
            value={formValues.nestFields.nestFieldName}
          />
        ))}
      </div>
    </form>
  );
};
