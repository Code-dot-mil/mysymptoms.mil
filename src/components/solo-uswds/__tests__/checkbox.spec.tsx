import React from 'react'
import { render, fireEvent, waitFor } from 'test-utils'
import { Checkbox } from 'components/solo-uswds'

describe('Checkbox component', () => {
	const changeMock = jest.fn()

	afterEach(() => {
		changeMock.mockReset()
	})

	it('calls on change on checked change', async () => {
		const { getByTitle } = render(
			<Checkbox onChange={changeMock} checked={false} title='testcheck' />,
		)
		const inp = getByTitle('testcheck')
		fireEvent.click(inp)
		await waitFor(() => {
			expect(changeMock).toHaveBeenCalled()
		})
	})
})
