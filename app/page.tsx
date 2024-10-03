'use client'
import { useEffect, useState } from 'react';
import Flow from './components/Flow';
import Signin from './components/Signin';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useFirebase } from './context/Firebase';
import { app } from './firebase';
// import Signup from './components/Signup';


const auth = getAuth(app)
export default function Home() {
  const firebase = useFirebase()
  const [user, setUser] = useState("")
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user){
        console.log(user)
        setUser(user)
      }else{
        setUser("")
      }
})
    console.log("user ",user)
    
  }, [])

  if(!user) {
    return (
    <div className='grid justify-center'>
        <Flow/>
      </div>
    )
  }else{
    return (
      <div>
        <p>Welcome to the party - {user?.email}</p>
        <button onClick={firebase.logout}>Logout</button>
      </div>
      
    )
  }

}
