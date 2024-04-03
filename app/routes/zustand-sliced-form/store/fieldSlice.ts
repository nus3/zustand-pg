import { StateCreator } from "zustand";
import { SliceState } from "~/routes/zustand-sliced-form/store/useSlicedStore";

export type FieldSlice = {
  field1: string;
  field2: string;
  field3: string;
  field4: string;
  field5: string;
  setFieldValue: (value: string, fieldName: string) => void;
};

// If you have some middlewares then replace StateCreator<MyState, [], [], MySlice> with StateCreator<MyState, Mutators, [], MySlice>
// REF: https://docs.pmnd.rs/zustand/guides/typescript#slices-pattern

// immer — ["zustand/immer", never]
// REF: https://github.com/pmndrs/zustand/blob/main/docs/guides/typescript.md#middlewares-and-their-mutators-reference
export const createFieldSlice: StateCreator<
  SliceState,
  [["zustand/immer", never]],
  [],
  FieldSlice
> = (set) => ({
  field1: "",
  field2: "",
  field3: "",
  field4: "",
  field5: "",
  setFieldValue: (value, fieldName) => {
    set((state) => {
      // HACK: 型定義サボってるとこ
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      state[fieldName] = value;
    });
  },
});
