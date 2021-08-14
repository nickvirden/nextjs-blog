import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi I'm Nick. I'm a software engineer and native Austinite. You can contact me on <a href="https://www.linkedin.com/in/nickvirden/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
      </section>
    </Layout>
  )
}