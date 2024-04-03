import { FC, memo, useCallback } from "react";
import { Field } from "~/components/Field/Field";
import {
  useGetFieldValue,
  useSetFieldValue,
} from "~/routes/zustand-separated-form/useSeparatedStore";

type FieldFactoryProps = {
  fieldName: string;
};

const Component: FC<FieldFactoryProps> = ({ fieldName }) => {
  const value = useGetFieldValue(fieldName);
  const setFieldValue = useSetFieldValue();

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
