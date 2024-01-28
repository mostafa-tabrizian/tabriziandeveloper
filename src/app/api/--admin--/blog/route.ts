import { NextResponse } from 'next/server'

import dbConnect from '@/utils/dbConnect'
import Blog from '@/models/blog'

export async function POST(request: Request) {
    const {
        active,
        lang,
        title,
        thumbnail,
        readTime,
        authorId,
        text
    }: {
        active: boolean,
        lang: ['fa', 'en'],
        title: string,
        thumbnail: string,
        readTime: number,
        authorId: string,
        text: string
    } = await request.json()

    try {
        await dbConnect()
        const blog = await Blog.create({
            active,
            lang,
            title,
            thumbnail,
            readTime,
            authorId,
            text,
            comments: [],
            likes: []
        })

        return NextResponse.json(blog)
    } catch (error) {
        // @ts-ignore
        if (error.code == 11000) {
            return NextResponse.json({ message: 'notUnique' })
        } else {
            return NextResponse.json({ status: 500, message: error })
        }
    }
}


export async function PATCH(request: Request) {
    const {
        slug,
        active,
        lang,
        title,
        text,
        thumbnail,
        readTime
    }: {
        slug: string
        active: boolean
        lang: string
        title: string
        text: string
        thumbnail: string | null
        readTime: number
    } = await request.json()

    try {
        const values = {
            active,
            lang,
            title,
            text,
            readTime,
            modifiedAt: new Date()
        }

        // @ts-ignore
        if (thumbnail) values.thumbnail = thumbnail

        await dbConnect()
        const blog = await Blog.findOneAndUpdate(
            { slug },
            values
        )

        return NextResponse.json(blog)
    } catch (error) {
        return NextResponse.json({ status: 500, message: error })
    }
}

export async function DELETE(req: Request) {
    try {
        const { slug } = await req.json()

        await dbConnect()
        const blog = await Blog.findOneAndDelete({ slug })

        return NextResponse.json(blog)
    } catch (error) {
        console.error('Error deleting blog:', error)
        return NextResponse.json({ status: 500, message: error })
    }
}