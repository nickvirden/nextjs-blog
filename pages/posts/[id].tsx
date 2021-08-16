import { GetStaticPaths, GetStaticProps } from 'next'

import Head from 'next/head'

import Date from '../../components/date'
import Layout from '../../components/layout'

import { getAllPostIds, getPostData } from '../../lib/posts'

import utilStyles from '../../styles/utils.module.css'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string)
  return {
    props: {
      postData
    }
  }
}

interface IPostData {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  }
}

const { headingXl, lightText } = utilStyles;

export default function Post({ postData }: IPostData) {
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