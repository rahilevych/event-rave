import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import styles from './FormField.module.css';
import { Input } from '../input/Input';
type FormFieldProps = {
  label: string;
  type?: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
};
export const FormField = ({
  label,
  type = 'text',
  placeholder,
  register,
  error,
}: FormFieldProps) => {
  return (
    <label className={styles.label}>
      <p>{label}</p>
      <Input {...register} type={type} placeholder={placeholder} />
      {error && <p className={styles.error}>{error.message}</p>}
    </label>
  );
};
