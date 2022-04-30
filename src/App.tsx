import React from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import { selectAll } from './state/slice'

import { useTypedSelector } from './hooks'
import { sagaActions } from './state/sagaActions'

function App() {
    const state = useTypedSelector(selectAll)

    const dispatch = useDispatch()

    return (
        <div className="App">
            <button onClick={() => dispatch({ type: sagaActions.FETCH_DATA })}>get</button>
            <ul>{state ? state.map((s: any) => <li key={s.id}>{s.title}</li>) : null}</ul>
        </div>
    )
}

export default App
