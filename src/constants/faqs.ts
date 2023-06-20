enum Responses {
	NO_RESPONSE = 'No response :D',
}

export type Faq = {
	response: string
	title: string
}

const Faqs: Array<Faq> = [
	{
		response: Responses.NO_RESPONSE,
		title: 'How many team members can I Invite?',
	},
	{
		response:
			'No more than 2GB. All files in your account must fir your allotted storage space.',
		title: 'What is the maximum file upload size?',
	},
	{ response: Responses.NO_RESPONSE, title: 'How do I reset my password?' },
	{ response: Responses.NO_RESPONSE, title: 'Can I cancel my subscription?' },
	{
		response: Responses.NO_RESPONSE,
		title: 'Do you provide additional support?',
	},
]

export default Faqs
