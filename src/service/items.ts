import type { ItemProps } from '../types'
import axios from './api'

const itemsService = {
	async getItems(): Promise<ItemProps[]> {
		const { data } = await axios.get('/items')
		return data
	},

	async getItemDetail(id: string): Promise<ItemProps> {
		const { data } = await axios.get(`/items/${id}`)
		return data
	},

	async postItem(item: Omit<ItemProps, 'id'>): Promise<ItemProps> {
		const { data } = await axios.post('/items', item)
		return data
	},

	async removeItem(id: string): Promise<void> {
		await axios.delete(`/items/${id}`)
	},

	async editItem(id: string, item: Partial<ItemProps>): Promise<ItemProps> {
		const { data } = await axios.put(`/items/${id}`, item)
		return data
	},
}

export default itemsService
