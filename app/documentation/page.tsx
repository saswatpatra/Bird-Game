import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Documentation() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f4f1de]">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-start pt-8 px-4 pb-6">
        <h1 className="text-4xl sm:text-5xl font-bold mt-4 mb-4 text-[#3d405b] text-center">Documentation</h1>
        <p className="text-lg sm:text-xl mb-6 text-[#3d405b] text-center max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur
          interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc. Sed euismod, nisi vel
          consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc.
        </p>
      </main>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  )
}

