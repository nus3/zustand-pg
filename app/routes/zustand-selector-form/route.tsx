import { Footer } from "~/components/Footer/Footer";
import { ZunstandSelectorForm } from "~/routes/zustand-selector-form/components/ZustandSelectorForm/ZustandSelectorForm";

export default function NormalFormPage() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Zustand Selector Form</h1>
      <ZunstandSelectorForm></ZunstandSelectorForm>
      <Footer></Footer>
    </div>
  );
}
