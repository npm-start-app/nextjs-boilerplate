import { NextApiResponse } from 'next'
import Link from 'next/link'
import React from 'react'

interface ErrorPageOb1 {
    statusCode: string
}

interface ErrorPageOb2 {
    res: NextApiResponse,
    err: any
}

const ErrorPage = ({ statusCode } : ErrorPageOb1) => {
    return (
        <main style={{ height: '100vh' }} className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
                <p className="text-base font-semibold text-indigo-600">{ statusCode }</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
                <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                        href="/"
                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Main Page
                    </Link>
                </div>
            </div>
        </main>
    )
}

ErrorPage.getInitialProps = ({ res, err }: ErrorPageOb2) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode: statusCode + " Error" }
}

export default ErrorPage
