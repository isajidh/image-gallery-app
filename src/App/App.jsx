import React from 'react'
import { BackTop, Layout } from 'antd'
import styles from './App.module.css'
import Content from './Content/Content'

const App = () => {
  return (
    <div
      className={styles.app}
    >
      <Layout>
        <Layout.Header>
          <h1>IMAGE GALLERY
          </h1>
        </Layout.Header>
        <Layout.Content>
          <Content />
          <BackTop className={styles.backTopBlue}/>
          </Layout.Content>
      </Layout>
    </div>
  )
}

export default App
