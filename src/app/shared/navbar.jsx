import Link from 'next/link'
// import styles from '../../styles/navbar.module.css'

const routes = [
	{ name: "Anime", path: "/anime" },
]

export default function Navbar() {
	return (
		<>{routes.map(r =>
			<Link  key={r.path} href={r.path}>{r.name}</Link>
			)}
		</>
	)
}