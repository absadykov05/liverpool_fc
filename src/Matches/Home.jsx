import { useEffect, useState } from 'react'
import { useGetCurrencyQuery } from '../../Redux/Reducers/currencyApi';
import '../App.css'
import axios from 'axios';

const Home = () => {
  const [data1, setData] = useState([]);
  // const { data } = useGetCurrencyQuery()

  async function GetData () {
    const url = 'https://sportscore1.p.rapidapi.com/teams/4/events?page=1';
    const options = {
	    method: 'GET',
	    headers: {
		    'X-RapidAPI-Key': '4ad836ce85mshf8aa6c4b4a4a731p1df334jsnf6687a397d99',
		    'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
	    }
    };

    try {
	    const response = await fetch(url, options);
	    const result = await response.json();
	    setData(result.data);
      console.log(result.data)
    } catch (error) {
	    console.error(error);
    }
  }   

  useEffect(() => {
    // GetData();
  }, [])

  console.log(data)
  
  return (
      <div className = 'main'>
        {data1.map((el, idx) => {
         const teamName = el.teamId;
         return (
            <div key = {idx} className = 'block'>
              <div className = 'league'>
                <img className = 'league_logo' src = {el.league.logo}/>
                <div>{el.league.name}</div>
              </div>
              <div style = {{fontWeight: 450}}>{el.date}</div>
                <div className = 'teams'>
                <div className = 'team'>
                  <img className = 'logo' src = {el.home_team.logo}/>
                  <div className = 'team_name'>{el.home_team.name}</div>
                </div>
                <div className = 'game_result'>{el.status == 'notstarted' ? 'not started' : `${el.home_score.current} - ${el.away_score.current}`}</div>
                <div className = 'team'>
                  <img className = 'logo' src = {el.away_team.logo}/>
                  <div className = 'team_name'>{el.away_team.name}</div>
                </div>
              </div>
            </div>
         )
        })}
      </div>
    );
  };

export default Home;
