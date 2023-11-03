import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { Blog } from '../types/Blog'

const BlogAddScreen = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<Blog>()
      const onSubmit: SubmitHandler<Blog> = (data) => console.log(data)
      console.log(watch("Detail")) // watch input value by passing the name of it

  return (
      /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
      <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input {...register("Title")} />

      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("Detail", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.Detail && <span>This field is required</span>}

      <input type="submit" />
    </form>
  )
}

export default BlogAddScreen