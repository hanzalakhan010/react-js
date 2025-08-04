import { useState, type ChangeEvent, type FormEvent } from 'react'
import './newsletter.css'
const NewsLetter = () => {
    const [email, setEmail] = useState('')
    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(email)
    }
    return (
        <section className='newsletter-section'>
            <h2 className='newsletter-heading'>Suscribe to my newsletter</h2>
            <form className='newsletter-form' onSubmit={handleSubmit} >
                <label htmlFor="email">Email</label>
                <input id='email' type="email" value={email} onChange={handleEmailChange} />
                <button type="submit">Submit</button>
            </form>
        </section>)
}

export default NewsLetter