import React, { FormEvent } from "react";

const Signup = () => {

    const [fn, setfn] = React.useState('')
    const [ln, setln] = React.useState('')
    const [email, setem] = React.useState('')
    const [gh, setgh] = React.useState('');
    const [submitclicked, setsubmitclicked] = React.useState(false)

    const submithandler = async (e: FormEvent) => {
        e.preventDefault();
        setsubmitclicked(true);
        const payload = {
            first_name: fn,
            last_name: ln,
            email: email,
            github: gh,
        }
        const data = await window.fetch('/api/user/new',
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            }
        )
    }



    return (
        <>
            <form onSubmit={(e) => { submithandler(e) }}>
                <label>
                    FirstName:
                    <input type="text" value={fn} onChange={(e) => { setfn(e.target.value) }} />
                </label>
                <label>
                    LastName:
                    <input type="text" value={ln} onChange={(e) => { setln(e.target.value) }} />
                </label>
                <label>
                    GitHub:
                    <input type="text" value={gh} onChange={(e) => { setgh(e.target.value) }} />
                </label>
                <label>
                    Email:
                    <input type="text" value={email} onChange={(e) => { setem(e.target.value) }} />
                </label>
                <label>
                    <input type="submit"/>
                </label>
            </form>
        </>
    )
}
export default Signup; 