import Link from 'next/link'
import Head from 'next/head'

import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'

import { getSortedPostsData } from '../lib/posts'

import utilStyles from '../styles/utils.module.css'

const {
  headingMd,
  headingLg,
  list,
  listItem,
  padding1px,
  lightText
} = utilStyles;

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{ siteTitle }</title>
      </Head>
      <section className={headingMd}>
        <p>Hi I'm Nick. I'm a senior JavaScript developer with 4.5+ years of experience and native Austinite. You can contact me on <a href="https://www.linkedin.com/in/nickvirden/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
      </section>
      <section className={`${headingMd} ${padding1px}`}>
        <h2 className={headingLg}>Blog</h2>
        <ul className={list}>
          {
            allPostsData.map(({ id, date, title }) => (
              <li className={listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))
          }
        </ul>
      </section>
    </Layout>
  )
}