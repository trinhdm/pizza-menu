import type { MenuItem } from '@/types/item'
import { NextResponse } from 'next/server'
import { menuItemsBySlug } from '@/data/menu'


interface RouteContext {
	params: Promise<{ slug: string }>
}

export const dynamic = 'force-dynamic'

export const GET = async (
	_request: Request,
	{ params }: RouteContext,
): Promise<NextResponse<{ item: MenuItem }> | NextResponse<{ message: string }>> => {
	const { slug } = await params

	if (!slug) return NextResponse.json({ message: 'Not Found' }, { status: 404 })
	const item = menuItemsBySlug[slug]

	return NextResponse.json({ item })
}
