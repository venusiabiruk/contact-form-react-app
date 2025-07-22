import { useForm } from 'react-hook-form'
import "../styles/ContactForm.css"

type FormData = {
  name: string
  email: string
  message: string
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log(data)
    reset()
  }

  return (
    <div className="contact-container">
      <h2>🌟 Get in Touch 🌟</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
        <input
          type="text"
          placeholder="Your Name"
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && <p className="error">{errors.name.message}</p>}

        <input
          type="email"
          placeholder="Your Email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Invalid email format',
            },
          })}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}

        <textarea
          placeholder="Your Message"
          {...register('message', { required: 'Message is required' })}
        ></textarea>
        {errors.message && <p className="error">{errors.message.message}</p>}

        <button type="submit">Send 💌</button>

        {isSubmitSuccessful && (
          <p className="success">Thanks! Your message was sent ✅</p>
        )}
      </form>
    </div>
  )
}

export default ContactForm
