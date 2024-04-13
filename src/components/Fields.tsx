import { Control } from 'react-hook-form'
import { Button } from './ui/button'
import { Input } from './ui/input'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

type InputFieldProps = {
  control: Control<any>
  name: string
  description?: string
  label?: string
}

export const InputField = ({
  control,
  label,
  description,
  name,
}: InputFieldProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className='flex-grow'>
          <FormLabel>{label || name}</FormLabel>
          <FormControl>
            <Input
              placeholder=''
              {...field}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    ></FormField>
  )
}
