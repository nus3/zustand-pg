import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type State = {
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
  setFieldValue: (value: string, fieldName: string) => void;
  setNestFieldValue: (value: string, fieldName: string) => void;
};

export const useSelectorForm = create<State>()(
  immer((set) => ({
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
    setFieldValue: (value, fieldName) => {
      set((state) => {
        // HACK: 型定義サボってるとこ
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        state[fieldName] = value;
      });
    },
    setNestFieldValue: (value, fieldName) => {
      set((state) => {
        // HACK: 型定義サボってるとこ
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        state.nestFields[fieldName] = value;
      });
    },
  }))
);
