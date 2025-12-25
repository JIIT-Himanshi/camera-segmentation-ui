import React from 'react'
import Section1 from './components/Section1/Section1.jsx'

const App = () => {
  const users = [
      {
        img: 'https://images.unsplash.com/photo-1724627561609-9cd3facba8d4?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        intro: 'Freelance shooters needing backup bodies before last-minute event bookings or travel assignments.',
        tag: 'Prepared'
      },

      {
        img: 'https://images.unsplash.com/photo-1618847542523-de72df132f51?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        intro: 'Pro photographers upgrading cameras with flexible financing and fast approvals to get gear when needed.',
        tag: 'Satisfied' 
      },

      {
        img: 'https://images.unsplash.com/photo-1643651577367-6a4f572aadfa?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        intro: 'Travel vloggers opting for lightweight mirrorless kits and gimbals to capture fluid footage on go.',
        tag: 'Nomadic'
      },

      {
        img: 'https://images.unsplash.com/photo-1652090504210-438ea92793a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
        intro: 'Beginners moving beyond kit lenses with guided portrait bundles and easy monthly plans long-term.',
        tag: 'Emerging'
      },

      {
        img: 'https://images.unsplash.com/photo-1632255977243-2c666c2f26c4?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        intro: 'Hybrid creators needing high frame-rate bodies, mics, and ND filters to shoot both video and photos.',
        tag: 'Versatile'
      },

      {
        img: 'https://images.unsplash.com/photo-1576262674899-d260b15b733c?q=80&w=673&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        intro: 'Students choosing certified pre-owned cameras with easy monthly payments to build skills on a budget.',
        tag: 'Hobbyists'
      }
    ]
  return (
    <div>
      <Section1 users={users} />
    </div>
  )
}

export default App
