import { FieldInputProps } from 'formik'

type Props = {
	label: string
}

export const TextInput = (props: Props & FieldInputProps<any>) => {
	return (
		<div className="flex flex-col">
			<label htmlFor={props.name} className="sr-only">
				{props.label}
			</label>
			<input
				{...props}
				className="py-2 text-xl font-medium transition duration-300 ease-in-out bg-transparent border-b-2 border-b-white/30 focus:border-b-primary hover:border-b-primary focus:outline-none"
			/>
		</div>
	)
}
