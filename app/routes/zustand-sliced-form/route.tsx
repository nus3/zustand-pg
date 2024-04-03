import { Footer } from "~/components/Footer/Footer";
import { ZunstandSlicedForm } from "~/routes/zustand-sliced-form/components/ZustandSlicedForm/ZustandSlicedForm";

export default function NormalFormPage() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Zustand Sliced Form</h1>
      <ZunstandSlicedForm></ZunstandSlicedForm>
      <Footer></Footer>
    </div>
  );
}
