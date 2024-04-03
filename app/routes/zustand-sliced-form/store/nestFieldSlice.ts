import { StateCreator } from "zustand";
import { SliceState } from "~/routes/zustand-sliced-form/store/useSlicedStore";

export type NestFieldSlice = {
  nestFields: {
    nestField1: string;
    nestField2: string;
    nestField3: string;
    nestField4: string;
    nestField5: string;
  };
  setNestFieldValue: (value: string, fieldName: string) => void;
};

// If you have some middlewares then replace StateCreator<MyState, [], [], MySlice> with StateCreator<MyState, Mutators, [], MySlice>
// REF: https://docs.pmnd.rs/zustand/guides/typescript#slices-pattern
export const createNestFieldSlice: StateCreator<
  SliceState,
  [["zustand/immer", never]],
  [],
  NestFieldSlice
> = (set) => ({
  nestFields: {
    nestField1: "",
    nestField2: "",
    nestField3: "",
    nestField4: "",
    nestField5: "",
  },
  setNestFieldValue: (value, fieldName) => {
    set((state) => {
      // HACK: 型定義サボってるとこ
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      state.nestFields[fieldName] = value;
    });
  },
});
