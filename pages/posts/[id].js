import Head from 'next/head'

import Date from '../../components/date'
import Layout from '../../components/layout'

import { getAllPostIds, getPostData } from '../../lib/posts'

import utilStyles from '../../styles/utils.module.css'

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

const { headingXl, lightText } = utilStyles;

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
      <article>
        <h1 className={headingXl}>{ title }</h1>
        <div className={lightText}>
          <Date dateString={ date } />
        </div>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>
    </Layout>
  )
}