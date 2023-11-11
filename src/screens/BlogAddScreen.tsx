
import { useForm, SubmitHandler, useFormState } from "react-hook-form"
import { Blog } from '../types/Blog'
import { Button,Container,Form } from 'semantic-ui-react'
import { BlogAddAsync } from '../Apis/BlogApiCalls'
import { useHref, useNavigate } from "react-router"
import { useEffect, useState } from "react"
import "../styles/BlogAddScreen.css"

const BlogAddScreen = () => {
  const [submitMessage, setSubmitMessage] = useState('');
   const navigate= useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<Blog>()
      const onSubmit: SubmitHandler<Blog> = (data) =>{
       
        BlogAddAsync(data, 
          (message) => { // onSuccess handler
            setSubmitMessage(message);
            
          },
          (message) => { // onError handler
            setSubmitMessage(message);
          }
          
      )
      setTimeout(() => {
        navigate('/');
      }, 3000);
    };
     
    const validateBlogData=(blog:Blog)=>{

    }

  return (
    <Container>
      <p>{submitMessage}</p>
        <Form onSubmit={handleSubmit(onSubmit)} className="form-content-side form-box-shadow" >
          <Form.Field>
            <label>Title</label>
            <input placeholder='Title'  {...register("Title", { required: true })}/>
            {errors.Title && <p>This field is required</p>}
          </Form.Field>
          <Form.Field>
            <label>Detail</label> 
            <textarea placeholder='Detail' {...register("Detail", { required: true })}/>
            {errors.Detail && <p>This field is required</p>}
          </Form.Field>
          <Button  className='button-default btn-submit' type='submit'>Submit</Button>
        </Form>
    </Container>
  )
}

export default BlogAddScreen