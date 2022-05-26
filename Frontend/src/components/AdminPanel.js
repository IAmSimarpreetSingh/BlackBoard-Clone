import '../css/adminPanel.css'
import { useState } from 'react'

const AdminPanel = () => {

    const [dataFields, setDataFields] = useState({
        section: "",
        name: "",
        uid: "",
        role: "",
        course1: "",
        course2: "",
        course3: "",
        course1code: "",
        course2code: "",
        course3code: "",
        course1teacher: "",
        course2teacher: "",
        course3teacher: "",
        passwd: "",
    })

    let name, value

    const inputHandler = (e) => {

        name = e.target.name
        value = e.target.value

        setDataFields({ ...dataFields, [name]: value })
    }

    const registerUser = async (e) => {
        e.preventDefault();

        const { section, name, uid, role, course1, course2, course3, course1code, course2code, course3code, course1teacher, course2teacher, course3teacher, passwd } = dataFields

        const res = await fetch('/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                section: section,
                name: name,
                uid: uid,
                role: role,
                courses: [
                    {
                        id: 0,
                        name: course1,
                        code: course1code,
                        teacher: course1teacher
                    },
                    {
                        id: 0,
                        name: course2,
                        code: course2code,
                        teacher: course2teacher
                    },
                    {
                        id: 0,
                        name: course3,
                        code: course3code,
                        teacher: course3teacher
                    }
                ],
                password: passwd
            })
        });

        const data = res.json();
        console.log(data)

        if (res.status === 400) {
            window.alert("INVALID");
        } else {
            alert("Data Entered!")
        }

    }

    return (
        <div className="adminPanelContainer">
            <h1>Add user</h1>
            <div className="dataInputContainer">
                <div className="dataInputFields">
                    <input type="text" placeholder="section" name='section' value={dataFields.section} onChange={inputHandler} />
                    <input type="text" placeholder="name" name='name' value={dataFields.name} onChange={inputHandler} />
                    <input type="text" placeholder="uid" name='uid' value={dataFields.uid} onChange={inputHandler} />
                    <input type="text" placeholder="role" name='role' value={dataFields.role} onChange={inputHandler} />
                    <input type="text" placeholder="password" name='passwd' value={dataFields.passwd} onChange={inputHandler} />
                </div>

                <div className="couseField">
                    <div className="courseNames">
                        <input type="text" placeholder="course name" name='course1' value={dataFields.course1} onChange={inputHandler} />
                        <input type="text" placeholder="course name" name='course2' value={dataFields.course2} onChange={inputHandler} />
                        <input type="text" placeholder="course name" name='course3' value={dataFields.course3} onChange={inputHandler} />
                    </div>
                    <div className="courseCode">
                        <input type="text" placeholder="course code" name='course1code' value={dataFields.course1code} onChange={inputHandler} />
                        <input type="text" placeholder="course code" name='course2code' value={dataFields.course2code} onChange={inputHandler} />
                        <input type="text" placeholder="course code" name='course3code' value={dataFields.course3code} onChange={inputHandler} />
                    </div>
                    <div className="courseTeacherNames">
                        <input type="text" placeholder="course teacher" name='course1teacher' value={dataFields.course1teacher} onChange={inputHandler} />
                        <input type="text" placeholder="course teacher" name='course2teacher' value={dataFields.course2teacher} onChange={inputHandler} />
                        <input type="text" placeholder="course teacher" name='course3teacher' value={dataFields.course3teacher} onChange={inputHandler} />
                    </div>
                </div>

                <button onClick={registerUser} >Add User</button>

            </div>
        </div>
    )
}

export default AdminPanel