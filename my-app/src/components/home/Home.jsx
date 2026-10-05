import {useState} from 'react';
import './home.css';
import profileImage from '../../assets/profile.jpg'
const list = [
    {id: 1, item: 'Go Shopping', completed: false},
    {id: 2, item: 'Make Hair', completed: false},
]

function Home() {
    const [counter, setCounter] = useState(0)
    const [todo, setTodo] =  useState(list)
    const [input, setInput] = useState('')

    function increamentCounter() {
        setCounter(counter + 1)
    }

    function handleDecreament () {
        setCounter(counter <= 0 ? 0 : counter -1 )
    }

    function addTodoItem (){
        const newTodo = [...todo, {id: todo.length + 1, item: input}]
        setTodo(newTodo)
        setInput('')
    }

    function handleCompleteTask(id) {
         const transformedTodo = todo.map(todoItem => todoItem.id === id ? {...todoItem, completed: true}: todoItem)
         setTodo(transformedTodo)
    }
    return (
        < >
        <p className="text-3xl font-bold underline">Official Home page</p>
        <div>
            <button onClick={increamentCounter}>+</button>
            <button onClick={handleDecreament}>-</button>
            
        </div>
        
        

        <h3>{counter}</h3>
        <div>
            <input
            type='text'
            value={input}
            onChange={(e) =>setInput(e.target.value) }
            />
            <button onClick={addTodoItem}>Add</button>
            <ul>
                {todo.map((todoItem) => (
                    <div key={todoItem.id} style={{display: 'flex', gap: '20px'}}> 
                        <li className={`listDisplay ${todoItem.completed ? 'done' : ''}`}>{todoItem.item}</li>
                        
                        <button onClick={() => handleCompleteTask(todoItem.id)}>Done</button>
                       
                       
                    </div>
                    
                ))}
            </ul>
            
        </div>
        <div className='bg-amber-500'>
            
            <h1 className='text-4xl font-bold'>Let us learn Tailwind</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi repellat dolor sed maxime ullam sequi eveniet ipsam voluptatem atque voluptates quae, a quis dolorum. Nostrum eum cumque distinctio fugiat deleniti.</p>
            <a href=''>Click here</a>
        </div>
        <p style={{textAlign: 'center'}}>I want to center you</p>
        <div className='flex flex-col sm:flex-row sm:gap-6'>
            <img className='h-20 w-20 rounded-full' src={profileImage} alt='profile Image'/>
            <div>
                <p>Hi, my name is Annette, welcome to my profile</p>
                <p>I am a frontend Engineer and I love working on extiting UI</p>
            </div>
        </div>
        <div className='grid grid-cols-2 gap-8 sm:grid-cols-4'>
            <div className='bg-amber-300 aspect-square'>1</div>
            <div className='bg-amber-300 aspect-3/2'>2</div>
            <div className='bg-amber-300 aspect-square'>3</div>
            <div className='bg-amber-300 aspect-square'>4</div>
            <div className='bg-amber-300 aspect-3/2'>5</div>
            <div className='bg-amber-300 aspect-square'>6</div>
            
        </div>
        <div className='bg-blue-400 h-32 relative w-64'>
            <p className='bg-blue-300'>Static Parent</p>
            <div className='bg-blue-600 absolute bottom-0 left-0'>
                <p className='invisible'>Absolute Child</p>
            </div>
        </div>
        </>
    )
}

export default Home;