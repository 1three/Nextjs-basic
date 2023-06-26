import Link from "next/link"

export default function Home() {
  let name = 'kim'

  return (
    <div>
      <h3 className="title">Three Fresh</h3>
      <p className="title-sub">by three { name }</p>
    </div>
  )
}
