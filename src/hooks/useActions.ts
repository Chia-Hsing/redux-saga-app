import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import { actionCreators, Dispatch } from '../state'

export const useActions = () => {
    const dispatch = useDispatch<Dispatch>()

    return useMemo(() => {
        return bindActionCreators(actionCreators, dispatch)
    }, [dispatch])
}
