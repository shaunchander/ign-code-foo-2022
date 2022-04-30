// Component imports
import { Text, Section, SEO, Container } from '@utils'
import { TextInput } from '@component/TextInput'
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik'
import { PlusCircleIcon, XIcon } from '@heroicons/react/outline'
import { OptionInput } from '@component/OptionInput'
import { m } from 'framer-motion'

// Helper imports
import * as Yup from 'yup'

/**
 * Helpers
 */
type FormikValues = {
	title: string
	options: string[]
}

const formikValues: FormikValues = {
	title: '',
	options: ['', '']
}

const validationSchema = Yup.object({
	title: Yup.string()
		.required('Please enter a title for your poll.')
		.max(100, 'Please enter less than 100 characters.'),
	options: Yup.array().of(
		Yup.object().shape({
			title: Yup.string().required('Please enter an option.').max(100, 'Please enter less than 100 characters.')
		})
	)
})

const CreatePoll = () => {
	return (
		<>
			<SEO title="Polster | Create Poll" path="/create-poll" />

			<Section id="create-poll">
				<Container className="max-w-3xl space-y-6">
					{/* Header. */}
					<div>
						<Text tag="h2">Create a new poll</Text>
					</div>

					{/* Formik form. */}
					<Formik
						initialValues={formikValues}
						onSubmit={(values) => {
							setTimeout(() => {
								alert(JSON.stringify(values, null, 2))
							}, 500)
						}}
						validationSchema={validationSchema}>
						{({ values }) => (
							<Form className="flex flex-col space-y-8">
								{/* Title field. */}
								<Field
									name="title"
									label="Enter a title for your poll."
									placeholder="Enter a title..."
									component={TextInput}></Field>

								{/* Option(s) field. */}
								<FieldArray name="options">
									{(arrayHelpers) => (
										<div className="space-y-4">
											{/* Render option input fields. */}
											<div className="grid gap-4">
												{values.options &&
													values.options.length > 0 &&
													values.options.map((_, i) => (
														<m.div
															transition={{
																type: 'spring',
																stiffness: 500,
																damping: 40
															}}
															variants={{
																hidden: {
																	opacity: 0,
																	scale: 0.85
																},
																show: {
																	opacity: 1,
																	scale: 1
																}
															}}
															initial={i > 1 ? 'hidden' : 'show'}
															animate="show"
															exit="hidden"
															key={i}
															className="flex justify-between space-x-5">
															{/* Number. */}
															<Text tag="p" style="h3" className="translate-y-2 transform-gpu">
																{i + 1}.
															</Text>

															{/* Input. */}
															<div className="flex-1">
																<Field
																	name={`options.${i}.title`}
																	placeholder="Enter an option..."
																	size="sm"
																	component={OptionInput}></Field>
															</div>

															{/* Delete button. Only rendered when extra options are added. */}
															{i > 1 && (
																<div className="translate-y-2 transform-gpu">
																	<button
																		onClick={(e) => {
																			// Prevent default.
																			e.preventDefault()

																			// Remove the input from the array.
																			arrayHelpers.remove(i)
																		}}>
																		<XIcon className="w-5 h-5 transition duration-300 ease-in-out text-white/40 hover:text-red-500" />
																	</button>
																</div>
															)}
														</m.div>
													))}
											</div>

											{/* Render the add options button. */}
											{values.options && values.options.length !== 4 && (
												<button
													onClick={(e) => {
														// Prevent form submission.
														e.preventDefault()

														// Add a new option input.
														arrayHelpers.insert(values.options.length, {
															title: '',
															emoji: ''
														})
													}}
													className="flex items-center w-full p-6 space-x-2 duration-300 ease-in-out border-2 border-current border-dotted rounded-md text-white/30 hover:text-primary ">
													<PlusCircleIcon className="w-6 h-6" />
													<Text tag="p" style="small">
														Add an option.
													</Text>
												</button>
											)}

											{/* Options counter. */}
											{values.options.length !== 4 && (
												<Text tag="p" style="small" className="text-white/40">
													Add up to {4 - values.options.length} more options.
												</Text>
											)}
										</div>
									)}
								</FieldArray>

								{/* Submit button. */}
								<div>
									<button type="submit" className="w-full btn btn-primary md:w-auto">
										Create
									</button>
								</div>
							</Form>
						)}
					</Formik>
				</Container>
			</Section>
		</>
	)
}

export default CreatePoll
