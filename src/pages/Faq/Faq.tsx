import './Faq.scss'
import { default as FaqComponent } from '@/components/Faq/Faq'
import Faqs from '@/constants/faqs'

function Faq() {
	return (
		<main id="faq">
			<Image />
			<Content />
		</main>
	)
}

function Image() {
	return (
		<section className="image">
			<div className="box"></div>
			<div className="woman"></div>
			<div className="background"></div>
		</section>
	)
}

function Content() {
	const MappedFaqs = Faqs.map((faq, index) => (
		<FaqComponent key={index} response={faq.response} title={faq.title} />
	))

	return (
		<article className="content">
			<h1 className="title">FAQ</h1>
			<section className="list faq">{MappedFaqs}</section>
		</article>
	)
}

export default Faq
