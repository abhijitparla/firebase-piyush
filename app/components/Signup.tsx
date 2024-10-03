'use client'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import {app} from '../../app/firebase'
import { getAuth } from 'firebase/auth'
import { useFirebase } from '../context/Firebase'
import { useRouter } from 'next/navigation'

const auth = getAuth(app)

const Signup = () => {

  const firebase = useFirebase()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()
    const handleSumit = (e) => {
        e.preventDefault()
        console.log("inside handle sumbit", email, password, firebase)
        firebase.signupWithEmailAndPassword(email, password)
        router.push('/signin')
        // createUserWithEmailAndPassword(auth, email, password).then((value) => console.log(value))
    }

  return (
    <div>
      <h1>Sign up page</h1>
      <form onSubmit={handleSumit}>
        <input type="email" required placeholder='Email' className='text-slate-900' onChange={(e) => setEmail(e.target.value)} value={email}/>
        <input type="password" required placeholder='Password' className='text-slate-900' onChange={(e) => setPassword(e.target.value)} value={password}/>
        <button type="submit">Sign up</button>
      </form>
    </div>
  )
}

export default Signup
