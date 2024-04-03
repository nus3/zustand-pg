import { FC, memo, useCallback } from "react";
import { Field } from "~/components/Field/Field";
import { useSelectorForm } from "~/routes/zustand-selector-form/useSelectorForm";

type FieldFactoryProps = {
  fieldName: string;
};

const Component: FC<FieldFactoryProps> = ({ fieldName }) => {
  // HACK: 型定義サボってるとこ
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const value = useSelectorForm((state) => state[fieldName]);
  const setFieldValue = useSelectorForm((state) => state.setFieldValue);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
      setFieldValue(e.target.value, fieldName);
    },
    [setFieldValue]
  );

  return (
    <Field
      label={fieldName}
      name={fieldName}
      onChange={(e) => handleChange(e, fieldName)}
      // HACK: 型定義サボったとこ
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      value={value}
    ></Field>
  );
};

export const FieldFactory = memo(Component);
