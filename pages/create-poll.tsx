// Component imports
import { Text, Section, SEO, Container } from '@utils'
import { TextInput } from '@component/TextInput/TextInput'
import { Formik, Form, Field } from 'formik'
import { PlusCircleIcon } from '@heroicons/react/outline'

/**
 * Helpers
 */
type FormikValues = {
	name: string
	options: Set<{ title: string; emoji: string }>
}

const formikValues: FormikValues = {
	name: '',
	options: new Set()
}

const handleCreateOption = (e: MouseEvent) => {
	// Prevent default action.
	e.preventDefault()

	// Check how many options are in the set.
	const optionsSize = formikValues.options.size

	// If the size is less than 4, add a new option.
	if (optionsSize < 4) {
		formikValues.options.add({
			title: '',
			emoji: ''
		})
	}
}

const CreatePoll = () => {
	return (
		<>
			<SEO title="IGN Polls | Create Poll" path="/create-poll" />

			<Section id="create-poll">
				<Container className="max-w-3xl space-y-6">
					{/* Header. */}
					<div>
						<Text tag="h2">Create a new poll</Text>
					</div>

					{/* Formik form. */}
					<Formik values={formikValues}>
						<Form className="flex flex-col space-y-6">
							{/* Title field. */}
							<Field
								label="Test"
								placeholder="Enter a title..."
								component={TextInput}></Field>

							{/* Option(s) field. */}
							<div>
								{}
								{/* Empty options. */}
								<button
									onClick={handleCreateOption}
									className="flex items-center w-full p-6 space-x-2 duration-300 ease-in-out border-2 border-current border-dotted rounded-md text-white/30 hover:text-primary ">
									<PlusCircleIcon className="w-6 h-6" />
									<Text tag="p" style="small">
										Add an option.
									</Text>
								</button>
							</div>

							{/* Submit button. */}
							<div>
								<button type="submit" className="btn btn-primary">
									Create
								</button>
							</div>
						</Form>
					</Formik>
				</Container>
			</Section>
		</>
	)
}

export default CreatePoll
