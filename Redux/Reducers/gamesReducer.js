import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  games: [
    {
      homeTeam: ['', ''],
      awayTeam: ['', ''],
      date: '',
      league: ['', ''],
      score: '',
    },
  ]
}

export const gamesReducer = createSlice({
  name: 'games',
  initialState,
  reducers: {
    
  },
})

export const {} = gamesReducer.actions

export default gamesReducer.reducer