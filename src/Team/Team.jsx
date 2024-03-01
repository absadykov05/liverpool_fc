import React from 'react'
import s from './Team.module.css'

const Team = () => {
  return (
    <div className={s.main}>
	<div style={{fontWeight: 'bold', marginBlockStart: 15}}>Goalkeepers</div>
	<div className={s.category}>
		<div className={s.player}>
			<img src = 'https://resources.premierleague.com/premierleague/photos/players/110x140/p116535.png'/>
			Alisson Becker
		</div>
	</div>
	<div style={{fontWeight: 'bold'}}>Defenders</div>
	<div className={s.category}>
		<div className={s.player}>
			<img src = 'https://resources.premierleague.com/premierleague/photos/players/110x140/p97032.png'/>
			Virgil van Dijk
		</div>
		<div className={s.player}>
			<img src = 'https://resources.premierleague.com/premierleague/photos/players/110x140/p122798.png'/>
			Andy Robertson
		</div>
		<div className={s.player}>
			<img src = 'https://resources.premierleague.com/premierleague/photos/players/110x140/p169187.png'/>
			Alexander-Arnold
		</div>
		<div className={s.player}>
			<img src = 'https://resources.premierleague.com/premierleague/photos/players/110x140/p60914.png'/>
			Joel Matip
		</div>
	</div>
	<div style={{fontWeight: 'bold'}}>Midfielders</div>
	<div className={s.category}>
		<div className={s.player}>
			<img src = 'https://resources.premierleague.com/premierleague/photos/players/110x140/p424876.png'/>
			Dominik Szoboszlai
		</div>
		<div className={s.player}>
			<img src = 'https://resources.premierleague.com/premierleague/photos/players/110x140/p158983.png'/>
			Wataru Endo
		</div>
		<div className={s.player}>
			<img src = 'https://resources.premierleague.com/premierleague/photos/players/110x140/p243016.png'/>
			Alexis Mac Allister
		</div>
	</div>
	<div style={{fontWeight: 'bold'}}>Forwards</div>
	<div className={s.category}>
		<div className={s.player}>
			<img src = 'https://resources.premierleague.com/premierleague/photos/players/110x140/p244731.png'/>
			Luis Diaz
		</div>
		<div className={s.player}>
			<img src = 'https://resources.premierleague.com/premierleague/photos/players/110x140/p194634.png'/>
			Diogo Jota
		</div>
		<div className={s.player}>
			<img src = 'https://resources.premierleague.com/premierleague/photos/players/110x140/p118748.png'/>
			Mohamed Salah
		</div>
		<div className={s.player}>
			<img src = 'https://resources.premierleague.com/premierleague/photos/players/110x140/p447203.png'/>
			Darwin Nunez
		</div>		
	</div>
	<div className={s.category}>
		STAFF
	</div>
    </div>
  )
}

export default Team;
