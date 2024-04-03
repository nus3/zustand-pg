import { FC, memo, useCallback } from "react";
import { Field } from "~/components/Field/Field";
import {
  useGetNestFieldValue,
  useSetNestFieldValue,
} from "~/routes/zustand-separated-form/useSeparatedStore";

type NestFieldFactoryProps = {
  fieldName: string;
};

const Component: FC<NestFieldFactoryProps> = ({ fieldName }) => {
  const value = useGetNestFieldValue(fieldName);
  const setFieldValue = useSetNestFieldValue();

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

export const NestFieldFactory = memo(Component);
