import React, {useState} from 'react'
import Affairs from './affairs/Affairs'
import s2 from '../../s1-main/App.module.css'


// types
export type AffairPriorityType = 'high' | 'middle' | 'low';
export type AffairType = {
  _id: number
  name: string
  priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: AffairType[] = [
  {_id: 1, name: 'React', priority: 'high'},
  {_id: 2, name: 'Anime', priority: 'low'},
  {_id: 3, name: 'Games', priority: 'low'},
  {_id: 4, name: 'Work', priority: 'high'},
  {_id: 5, name: 'HTML & CSS', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => {
  if (filter === 'all') {
    return affairs;
  }
  return affairs.filter((el) => el.priority === filter);
}
export const deleteAffair = (affairs: AffairType[], _id: number): AffairType[] => {

  return  affairs.filter((el) => el._id !== _id)
}

function HW2() {
  const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs)
  const [filter, setFilter] = useState<FilterType>('all')

  const filteredAffairs = filterAffairs(affairs, filter)
  const deleteAffairCallback = (_id: number) => {
    setAffairs(affairs.filter((el) => el._id !== _id))
  }

  return (
    <div id={'hw2'} className={s2.hw}>
      <div className={s2.hwTitle}>Homework #2</div>
      <div>
        <Affairs
          data={filteredAffairs}
          setFilter={setFilter}
          deleteAffairCallback={deleteAffairCallback}
          filter={filter}
        />
      </div>
    </div>
  )
}

export default HW2
