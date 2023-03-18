import React from 'react'

import Head from 'next/head'
import { Layout } from '~/components'
import ContactForm from '~/components/contact-form'

export default function submit() {
    return (
        <Layout>
            <Head>
                <title>supg</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
      <section className="my-16 mx-auto max-w-5xl px-4 lg:my-32">
        <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-gray-100 md:text-3xl lg:text-4xl">
          Submit your story
        </h2>
        <ContactForm />
      </section>
        </Layout>
    )
}
