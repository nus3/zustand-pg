import { FC, memo, useCallback } from "react";
import { Field } from "~/components/Field/Field";
import { useSlicedStore } from "~/routes/zustand-sliced-form/store/useSlicedStore";

type FieldFactoryProps = {
  fieldName: string;
};

const Component: FC<FieldFactoryProps> = ({ fieldName }) => {
  const store = useSlicedStore();
  const { setFieldValue } = store;

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
      value={store[fieldName]}
    ></Field>
  );
};

export const FieldFactory = memo(Component);
