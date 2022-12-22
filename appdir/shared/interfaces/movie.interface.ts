import { IReview } from './review.interface'

export interface IMovie {
	id: number
	name: string
	raiting: string
	poster: string
	views: number
	reviews?: IReview[]
	fees: number
}
