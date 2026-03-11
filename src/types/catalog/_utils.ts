
export type RemovePlural<S extends string> =
	S extends `${infer Root}s` ? Root : S

export type NotStartsWith<
	T extends string,
	S extends string,
> = // eslint-disable-next-line @typescript-eslint/no-unused-vars
	T extends `${S}${infer _}` ? never : T


export type ReplacePrefix<
	S extends string,
	P extends string,
	V extends string,
> =
	S extends `${P}${infer Size}`
		? `${V}${Capitalize<Size>}`
		: Capitalize<S>

export type TogglePartial<
	T,
	B extends boolean,
> =
	B extends true ? Partial<T> : T

export type Delta<
	K extends string,
	B extends boolean = true,
> =
	| TogglePartial<Record<K, number>, B>
	| number

