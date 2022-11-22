import React, {useState, useEffect} from 'react'
import { Link, useLocation ,useNavigate,useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button, Row, Col } from 'react-bootstrap'
import Loader from '../components/Loadar'
import Message from '../components/Messages'
import FormContainer from '../components/FormContainer'
import { getUserDetails } from '../actions/userAction'

function EditUserScreen() {
    const match = useParams();
    const userId = match.id
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [isAdmin,setAdmin] = useState(false)
    const dispatch = useDispatch()

    


    const userDetails = useSelector(state => state.userDetails)
    const { error, user , loading} = userDetails
    console.log(user)

    useEffect(()=>{
      if(! user.name || user._id !== Number(userId)){
        dispatch(getUserDetails(userId))
       }else{
         setName(user.name)
         setEmail(user.email)
         setAdmin(user.isAdmin)
       }

      
    },[dispatch, userId,user._id, user.email, user.isAdmin, user.name ])


    const submitHandler = (e) => {
        e.preventDefault()
    }

  return (
    <div>
        <Link to ='/admin/userlist'>
        Go Back
        </Link>
        <FormContainer>
            <h1>Edit user</h1>
            {loading ? <Loader /> :error ? <Message variant = 'danger'>{error}</Message> :(
                  <Form onSubmit = {submitHandler}>
                  <Form.Group controlId = 'name'>
                              <Form.Label>Name</Form.Label>
                              <Form.Control  type='name' placeholder = 'Enter Name' value={name} onChange={(e) => setName(e.target.value)}></Form.Control>
                  </Form.Group>
                  <Form.Group controlId = 'email'>
                              <Form.Label>Email Address</Form.Label>
                              <Form.Control  type='email' placeholder = 'Enter Email' value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
                  </Form.Group>
      
                  <Form.Group controlId = 'isAdmin'>
                              <Form.Check  type='checkbox' label='Is Admin' checked={isAdmin} onChange={(e) => setAdmin(e.target.checked)}></Form.Check>
                  </Form.Group>
      
                  <Button type='submit' variant = 'primary'>Update</Button>
                  </Form>
            )}
        </FormContainer>
    </div>
  )
}

export default EditUserScreen