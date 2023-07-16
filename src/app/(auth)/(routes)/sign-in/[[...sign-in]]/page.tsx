import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <section className="h-full">
      <div className="relative isolate h-full overflow-hidden pt-14">
        <video
          preload="auto"
          playsInline
          autoPlay
          muted
          loop
          className="fixed inset-0 -z-10 h-full w-full object-cover"
        >
          <source src="/videos/future-store.mp4" type="video/mp4" />
        </video>
        <SignIn />
      </div>
    </section>
  )
}
