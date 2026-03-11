import type { FindID, IDsMap, ValuesOfIDs } from '@/types/catalog'
import type { ImageItem } from '@/types/base'
import type { MenuItem, SeedItem } from '@/types/item'


const listIDs = <
	K extends string,
	V extends ValuesOfIDs = null,
>(
	key: K,
	value: V = null as V,
): IDsMap<K, V> => ({
	image: `${key}:image:${value}`,
	item: `item:${key}`,
	price: `${key}:price:${value}`,
} satisfies ReturnType<typeof listIDs<K, V>>)

export const createIDFrom = <
	K extends string,
	V extends ValuesOfIDs = null,
>(
	target: keyof ReturnType<typeof listIDs<K, V>>,
	key: K,
	value: V = null as V,
): FindID<K, V> => listIDs(key, value)[target] as FindID<K, V>


export const createSlugFrom = ({ title }: SeedItem): MenuItem['slug'] => title
	.toLowerCase()
	.trim()
	.replace(/[^a-z0-9\s-]/u, '')
	.replace(/\s+/u, '-')
	.replace(/-+/u, '-')


export const getImagesFromURLs = ({
	key,
	title,
	imageUrls,
}: SeedItem): MenuItem['images'] => (
	imageUrls.map((src, i): ImageItem => ({
		// id: `${key}:image:${i + 1}`,
		id: createIDFrom('image', key, i + 1),
		src,
		alt: `${title} image #${i + 1}`,
	}))
)
