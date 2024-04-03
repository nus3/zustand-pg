import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import {
  FieldSlice,
  createFieldSlice,
} from "~/routes/zustand-sliced-form/store/fieldSlice";
import {
  NestFieldSlice,
  createNestFieldSlice,
} from "~/routes/zustand-sliced-form/store/nestFieldSlice";

export type SliceState = FieldSlice & NestFieldSlice;

export const useSlicedStore = create<SliceState>()(
  immer((...a) => ({
    ...createFieldSlice(...a),
    ...createNestFieldSlice(...a),
  }))
);
