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

export const OptionInput = (props: Props) => {
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
				className="px-4 py-2 transition duration-300 ease-in-out rounded-lg bg-black/40 hover:border-b-primary focus:outline-none placeholder-white/40 focus:ring-2 focus:ring-opacity-30 focus:ring-primary"
			/>

			{/* Error message rendering. */}
			<ErrorMessage
				name={props.field.name}
				className="mt-3"
				render={(msg) => (
					<Text tag="p" style="small" className="mt-2 text-red-500">
						{msg}
					</Text>
				)}
			/>
		</div>
	)
}
