import Image from 'next/image'
import Layout from '../components/shared/Layout'
import SearchBar from '../components/shared/SearchBar'

const IndexPage = () => {
  return (
    <Layout title="Trippa Visor | Intro">
      <Image src="/assets/images/shared/logo.svg" width={224} height={64} />
      <SearchBar />
    </Layout>
  )
}

export default IndexPage
