import { Footer } from "~/components/Footer/Footer";
import { ZunstandForm } from "~/routes/zustand-form/components/ZustandForm/ZustandForm";

export default function NormalFormPage() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Zustand Form</h1>
      <ZunstandForm></ZunstandForm>
      <Footer></Footer>
    </div>
  );
}
