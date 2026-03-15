function mark() {

const studentId = document.getElementById("studentId").value;
const status = document.getElementById("status").value;

fetch("http://localhost:5000/attendance/mark", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
studentId: studentId,
date: new Date().toISOString(),
status: status
})
})

.then(res => res.json())
.then(data => alert("Attendance Marked"));

}