import { Footer } from "~/components/Footer/Footer";
import { NormalForm } from "~/routes/normal-form/components/NormalForm/NormalForm";

export default function NormalFormPage() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Normal Form</h1>
      <NormalForm></NormalForm>
      <Footer></Footer>
    </div>
  );
}
