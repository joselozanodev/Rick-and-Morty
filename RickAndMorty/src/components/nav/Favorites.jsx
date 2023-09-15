/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux'
import Card from '../cards/Card'
import styles from './Favorites.css'
import { useDispatch } from 'react-redux'
import { filterCards, orderCards } from '../../redux/actions'
import { useState } from 'react'

function Favorites() {
  const favorites = useSelector(state=> state.myFavorites)

  const [aux, setAux] = useState(false)

  const dispatch = useDispatch()

  const handleOrder = ({target})=>{
    dispatch(orderCards(target.value))
    setAux(true)
  }

  const handleFilter = ({target})=>{
    dispatch(filterCards(target.value))
  }

  return (
    <div className='container-fav'>

        <select style={{height:"50px"}}  onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>

        <select style={{height:"50px"}} onChange={handleFilter}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>

      {
        favorites.map(({id, name, status, species, gender, origin, image, onClose})=>{
          return(
          <Card 
          id={id}
          key={id}
          name={name}
          status={status}
          species={species}
          gender={gender}
          origin={origin.name}
          image={image}
          />)
        })
      }
    </div>
  )
}


export default Favorites
