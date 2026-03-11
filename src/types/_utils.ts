
//	utils

//	objects

export type Diff<T, U> = Exclude<
	{ [K in keyof T]: K extends keyof U ? never : K }[keyof T],
	undefined
>

export type Merge<A, B> = B & Omit<A, keyof B>


//	object keys

export type NonNeverKeys<T> = {
	[K in keyof T]: T[K] extends never ? never : K
}[keyof T]

export type OmitNever<T> = {
	[K in keyof T as T[K] extends never ? never : K]: T[K]
}

// Helper type to get all keys of a union (distributes keyof over the union)
export type UnionKeys<T> = T extends T ? keyof T : never

// Helper type to get only common keys present in all union members
export type CommonKeys<T extends object> = {
	[K in UnionKeys<T>]: K extends keyof T
		? T[K] extends never
			? never
			: K
		: never
}[UnionKeys<T>]


//	object properties

export type OmitSubstr<T, V extends string> =
	T extends `${infer Front}${V}${infer Back}`
		? `${Front}${Back}`	// root
		: T

export type CleanProps<T, V extends string> = {
	[P in keyof T as OmitSubstr<P, V>]: T[P]
}

