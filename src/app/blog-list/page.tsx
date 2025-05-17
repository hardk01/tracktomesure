import BlogList from '@/componets/blog-list/BlogList'
import Layout from '@/componets/layout/Layout'
import React from 'react'

const page = () => {
    return (
        <>
            <Layout>
                <BlogList />
            </Layout>
        </>
    )
}

export default page
