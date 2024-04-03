import { FC, memo, useCallback } from "react";
import { Field } from "~/components/Field/Field";
import { useSlicedStore } from "~/routes/zustand-sliced-form/store/useSlicedStore";

type NestFieldFactoryProps = {
  fieldName: string;
};

const Component: FC<NestFieldFactoryProps> = ({ fieldName }) => {
  const store = useSlicedStore();
  const { setNestFieldValue } = store;

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
      setNestFieldValue(e.target.value, fieldName);
    },
    [setNestFieldValue]
  );

  return (
    <Field
      label={fieldName}
      name={fieldName}
      onChange={(e) => handleChange(e, fieldName)}
      // HACK: 型定義サボったとこ
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      value={store.nestFields[fieldName]}
    ></Field>
  );
};

export const NestFieldFactory = memo(Component);
