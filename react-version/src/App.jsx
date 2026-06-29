import qrCode from "./assets/images/image-qr-code.webp";

export default function App() {
  return (
    <>
      <main className="bg-blue-100 h-screen flex items-center justify-center">
          <article className="bg-white w-xs p-4 flex gap-4 flex-col rounded-3xl">
              <img className="rounded-2xl" src={qrCode} alt="qr code" />
              <div className="flex flex-col gap-4 text-center p-2">
                <h1 className="font-bold text-xl">Improve your front-end skills by building projects</h1>
                <h2 className="font-normal text-base">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</h2>
              </div>
          </article>
      </main>
    </>
  )
}