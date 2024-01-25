import Header from "../components/common/Header"
import Tech from "../components/homepage/Tech"
import Projects from "../components/homepage/Projects"
import Footer from "../components/common/Footer"
import Head from "next/head"

const App = () => {
  return (
    
    <>
    <Head>
      <title>phlud logic.</title>
    </Head>
      <div className="flex flex-col gap-4 p-2 mx-auto antialiased max-w-7xl">
        <Header />
        <Tech />
        <Projects />
        <Footer />
      </div>
    </>
  )
}

export default App
