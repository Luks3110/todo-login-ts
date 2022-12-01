import { FC, ReactElement } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { User, UserSchema } from "../../models/Login/Login.models"
import "./form.scss"
import { signIn } from "../../services/auth"
import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"

const Login: FC = (): ReactElement => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { dirtyFields },
  } = useForm<User>({
    resolver: zodResolver(UserSchema),
  })

  const navigate = useNavigate()

  const { mutateAsync: loginUser, isSuccess } = useMutation((input: User) => signIn(input))

  const onSubmit: SubmitHandler<User> = async (userInfo: User) => {
    try {
      await loginUser(userInfo)
    } catch (error) {
      console.error(error)
    }
  }

  if (isSuccess) {
    navigate("/todos")
  }

  const email = UserSchema.shape.email.safeParse(watch("email"))
  const password = UserSchema.shape.password.safeParse(watch("password"))

  return (
    <AnimatePresence>
      <motion.div
        className='form'
        transition={{ ease: "easeInOut", duration: 0.8 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Rapptr Labs</h1>
          <div className='field'>
            <label htmlFor='email'>Email</label>
            <input
              className='form_input'
              type='email'
              placeholder='user@rapptrlabs.com'
              {...register("email")}
            />
            {!email.success && dirtyFields.email ? <p>{email?.error.format()._errors}</p> : null}
          </div>
          <div className='field'>
            <label htmlFor='password'>Password</label>
            <input
              className='form_input'
              type='password'
              placeholder='Password'
              {...register("password")}
            />
            {!password.success && dirtyFields.password ? (
              <p>{password?.error.format()._errors}</p>
            ) : null}
          </div>
          {email.success && password.success ? (
            <motion.div
              className='form_button_wrapper'
              whileHover={{ scale: 1.3, opacity: 0.8 }}
              whileTap={{ scale: 0.8 }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ ease: "easeInOut", duration: 0.2 }}
            >
              <button className='form_submit' type='submit'>
                Login
              </button>
            </motion.div>
          ) : null}
        </form>
      </motion.div>
    </AnimatePresence>
  )
}

export default Login
