import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserForm, userSchema } from '../../schemas/userSchema';
import { useUserStore } from '../../model/UserStore';
import { Button } from '../../../../shared/ui/Button/Button';
import { FormField } from '../../../../shared/ui/form-field/FormField';
import styles from './ProfileForm.module.css';

export const ProfileForm = ({ onCancel }: { onCancel: () => void }) => {
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
  const updateUser = useUserStore((state) => state.updateUser);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserForm>({
    resolver: zodResolver(userSchema),
    defaultValues: user ? { ...user } : undefined,
  });

  const onSubmit = async (values: UserForm) => {
    console.log('values', values);
    if (!user) return;
    const updatedData = {
      id: user.id,
      fullName: values.fullName,
      email: values.email,
    };

    setUser({ ...updatedData });
    await updateUser(user.id, updatedData);
    onCancel();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <FormField
        label="Full name:"
        register={register('fullName')}
        placeholder="Full name"
        error={errors.fullName}
      />
      <FormField
        label="Email:"
        register={register('email')}
        placeholder="Email"
        error={errors.email}
      />
      <div className={styles.buttons}>
        <Button
          type="button"
          onClick={onCancel}
          className={styles['btn-cancel']}
        >
          Cancel
        </Button>
        <Button type="submit" className={styles['btn-save']}>
          Save
        </Button>
      </div>
    </form>
  );
};
