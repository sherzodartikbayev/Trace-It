import { motion } from 'framer-motion'
import type { ElementType } from 'react'

interface MotionSectionProps {
	children: React.ReactNode
	as?: ElementType
	className?: string
}

const MotionSection = ({
	children,
	as = 'div',
	className,
}: MotionSectionProps) => {
	const MotionTag = motion(as)

	return (
		<MotionTag
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.4 }}
			transition={{ duration: 0.6, ease: 'easeOut' }}
			className={className}
		>
			{children}
		</MotionTag>
	)
}

export default MotionSection
