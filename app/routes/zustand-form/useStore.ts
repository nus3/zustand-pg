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

// なぜCurry化しているのか？
// This is because it enables you to infer the store type.
// REF: https://github.com/pmndrs/zustand/blob/main/docs/guides/typescript.md#create-without-curried-workaround
export const useStore = create<State>()(
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
        // HACK:
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        state[fieldName] = value;
      });
    },
    setNestFieldValue: (value, fieldName) => {
      set((state) => {
        // HACK:
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        state.nestFields[fieldName] = value;
      });
    },
  }))
);
