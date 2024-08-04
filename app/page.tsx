import Header from "../components/Header"
import Image from "next/image"
import logoPng from "../public/logo.png"

export default function Home() {
  return (
    <main className="container max-w-screen-xl mx-auto">
      <Header />
      <div className="flex items-center justify-between relative isolate mt-32">
	<div className="text-wrap">
	  <h1 className="text-6xl text-left font-medium tracking-tighter leading-none">Embrace Effectiveness</h1>
	  <h1 className="text-6xl text-left font-medium tracking-tighter leading-none">Embrace Security</h1>
	  <h1 className="text-6xl text-left font-medium tracking-tighter leading-none">Embrace <a className="text-purple-600">Nirvax</a></h1>
	  <p className="text-gray-300 text-left max-w-2xl">
  Recusandae et est est quis. Et aliquid eum impedit ratione debitis autem error. Sit optio saepe quidem sed. Doloribus voluptatum deleniti vel itaque molestias voluptatibus ratione. Ut consectetur culpa quisquam quia quae. Maiores deserunt sint amet velit.
</p>
	</div>
	<div>
	  <Image src={logoPng} alt="" width={400} height={400} />
	</div>
      </div>
    </main>
  );
}
