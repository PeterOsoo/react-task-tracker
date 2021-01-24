import { useState } from "react"

import "./App.css"
import Header from "./components/Header"
import Tasks from "./components/Tasks"

const App = () => {
	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: "visit doc",
			day: "feb 4th at 4pm",
			reminder: true,
		},
		{
			id: 2,
			text: "go to gym",
			day: "feb 14th at 2pm",
			reminder: false,
		},
		{
			id: 1,
			text: "send mails",
			day: "may 27th at 8pm",
			reminder: true,
		},
	])

	return (
		<div className="container">
			<Header />
			<Tasks tasks={tasks} />
		</div>
	)
}

export default App
