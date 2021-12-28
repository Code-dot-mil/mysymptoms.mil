import React from 'react'
import { OfficialSiteBanner } from 'components/solo-uswds'
import { render, fireEvent, waitFor } from '@testing-library/react'

describe('Official site banner component', () => {
	it('matches snapshot', () => {
		const { asFragment } = render(<OfficialSiteBanner />)
		expect(asFragment()).toMatchSnapshot()
	})

	it('starts off closed', async () => {
		const { queryByText } = render(<OfficialSiteBanner />)
		expect(queryByText(/site is secure./)).not.toBeInTheDocument()
		expect(queryByText(/.mil means it's official./)).not.toBeInTheDocument()
	})

	it("toggles here's how you know click", async () => {
		const { getByText, queryByText } = render(<OfficialSiteBanner />)
		const toggleElem = getByText("Here's how you know")
		expect(toggleElem).toBeInTheDocument()
		fireEvent.click(toggleElem)
		await waitFor(() => {
			expect(getByText(/site is secure/)).toBeInTheDocument()
			expect(getByText(/mil means it's official./)).toBeInTheDocument()
		})
		fireEvent.click(toggleElem)
		await waitFor(() => {
			expect(queryByText(/site is secure/)).not.toBeInTheDocument()
			expect(queryByText(/mil means it's official./)).not.toBeInTheDocument()
		})
	})
})
