import { useState } from 'react';
import './index.css'
const SignUp = () => {
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
        cpassword: ''
    })
    function handleFormChange(key: string, value: string) {
        setForm({ ...form, [key]: value });
    }
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log('Form submitted:', form);
    }
    return (
        <section>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input value={form.username} onChange={(e) => handleFormChange('username', e.target.value)} type="text" id="username" name="username" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input value={form.email} onChange={(e) => handleFormChange('email', e.target.value)} type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input value={form.password} onChange={(e) => handleFormChange('password', e.target.value)} type="password" id="password" name="password" required />
                </div>
                <div>
                    <label htmlFor="cpassword">Confirm Password:</label>
                    <input value={form.cpassword} onChange={(e) => handleFormChange('cpassword', e.target.value)} type="password" id="cpassword" name="cpassword" required />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </section>
    )
}
export default SignUp;