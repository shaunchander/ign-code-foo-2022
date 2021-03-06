// Component imports
import { Text } from '@utils'
import { ErrorMessage } from 'formik'

// Type imports
import { FieldInputProps } from 'formik'

type Props = {
	label: string
	field: FieldInputProps<any>
	placeholder?: string
}

export const TextInput = (props: Props) => {
	return (
		<div className="flex flex-col">
			<label htmlFor={props.field.name} className="sr-only">
				{props.label}
			</label>

			<input
				name={props.field.name}
				onBlur={props.field.onBlur}
				onChange={props.field.onChange}
				placeholder={props.placeholder}
				value={props.field.value}
				className="py-2 text-xl font-medium transition duration-300 ease-in-out bg-transparent border-b-2 border-b-white/30 focus:border-b-primary hover:border-b-primary focus:outline-none placeholder-white/30"
			/>

			{/* Error message rendering. */}
			<ErrorMessage
				name={props.field.name}
				render={(msg) => (
					<Text tag="p" style="small" className="mt-2 text-red-500">
						{msg}
					</Text>
				)}
			/>
		</div>
	)
}
