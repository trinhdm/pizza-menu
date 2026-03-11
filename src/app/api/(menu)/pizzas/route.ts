import type { MenuItem } from '@/types/item'
import { NextResponse } from 'next/server'
import { menuItems } from '@/data/menu'
import { unstable_noStore as noStore } from 'next/cache'


export const dynamic = 'force-dynamic'

export const GET = (): NextResponse<{ items: MenuItem[] }> => {
	noStore()
	return NextResponse.json({ items: menuItems })
}
