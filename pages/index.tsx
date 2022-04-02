import type { NextPage } from 'next'
import { Layout } from '../components/layouts';

const Home: NextPage = () => {
  return (
    //<div>hola</div>
    <div>
      <Layout type='home'>
        <h1>Home Layout</h1>
      </Layout>

    </div>

  )
}

export default Home
