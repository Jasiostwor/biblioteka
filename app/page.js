import Navbar from "../components/navbar/navbar"
import Book from "../components/book/book"
import "./page.css"

export default function Home() {
  return (
    <div className="container">
  <Navbar />
<h1 className="title">Twoje książki</h1>
    <ul>
 <li> <Book /> </li>
 <li> <Book /> </li>
 <li> <Book /> </li>
 <li> <Book /> </li>
 <li> <Book /> </li>
 <li> <Book /> </li>
 <li> <Book /> </li>
 <li> <Book /> </li>
 <li> <Book /> </li>
 <li> <Book /> </li>
 <li> <Book /> </li>
 <li> <Book /> </li>
 <li> <Book /> </li>
 <li> <Book /> </li>
 <li> <Book /> </li>
 <li> <Book /> </li>
  </ul>
    </div>
  )
}
