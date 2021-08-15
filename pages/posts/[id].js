import Head from 'next/head'

import Date from '../../components/date'
import Layout from '../../components/layout'

import { getAllPostIds, getPostData } from '../../lib/posts'

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export default function Post({
  postData: {
    id,
    title,
    date,
    contentHtml
  }
}) {

  return (
    <Layout>
      <Head>
        <title>{ title }</title>
      </Head>
      { title }
      <br />
      { id }
      <br />
      <Date dateString={postData.date} />
      <br />
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </Layout>
  )
}