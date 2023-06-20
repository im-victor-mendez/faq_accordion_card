import './Faq.scss'
import { ReactComponent as ArrowIcon } from '@/assets/svg/icon-arrow-down.svg'
import { Faq as FaqType } from '@/constants/faqs'
import { useState } from 'react'

function Faq({ response, title }: FaqType) {
	const [displayResponse, setDisplayResponse] = useState(false)
	const active = displayResponse ? 'active' : ''

	function toggleResponse() {
		setDisplayResponse(!displayResponse)
	}

	return (
		<div className="faq">
			<div className={`top ${active}`}>
				<p className="title">{title}</p>
				<ArrowIcon className="icon" onClick={toggleResponse} />
			</div>
			{displayResponse && <p className="response">{response}</p>}
		</div>
	)
}
export default Faq
