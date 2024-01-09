import {getO} from "@/server/o";

export default function Home() {
  return (
    <main>
      <p>
        Call at /: {getO()}
      </p>
      <p>
        <a href='/some'>Call at /some</a>
      </p>
    </main>
  )
}
