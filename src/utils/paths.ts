


export const ifPathExists = async (
	path: string,
	forType: 'image' | 'json' | 'text' = 'json',
): Promise<boolean> => {
	if (typeof window !== 'undefined') return false

	const baseUrl = process.env.BASE_URL,
		url = `${baseUrl}${path}`

	try {
		const response = await fetch(url, { method: 'HEAD' }),
			contentType = response.headers.get('content-type')

		const isContentType = {
			image: contentType?.startsWith('image/'),
			json: contentType?.endsWith('/json'),
			text: contentType?.startsWith('text/'),
		}[forType]

		return !!((response.ok || response.status === 200) && isContentType)
	} catch(error) {
		return false
	}
}
