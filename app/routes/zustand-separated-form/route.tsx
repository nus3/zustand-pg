import { Footer } from "~/components/Footer/Footer";
import { ZunstandSeparatedForm } from "~/routes/zustand-separated-form/components/ZustandSeparatedForm/ZustandSeparatedForm";

export default function NormalFormPage() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Zustand Separated Form</h1>
      <ZunstandSeparatedForm></ZunstandSeparatedForm>
      <Footer></Footer>
    </div>
  );
}
