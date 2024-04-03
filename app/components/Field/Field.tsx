import { FC } from "react";
import styles from "./Field.module.css";

type FieldProps = {
  label: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export const Field: FC<FieldProps> = ({ label, name, onChange, value }) => {
  return (
    <div className={styles.field}>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        onChange={onChange}
        value={value}
        className={styles.input}
      />
    </div>
  );
};
