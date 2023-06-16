const warriorsGames = [{
  awayTeam: {
    team: 'Golden State',
    points: 119,
    isWinner: true
  },
  homeTeam: {
    team: 'Houston',
    points: 106,
    isWinner: false
  }
},
{
  awayTeam: {
    team: 'Golden State',
    points: 105,
    isWinner: false
  },
  homeTeam: {
    team: 'Houston',
    points: 127,
    isWinner: true
  }
},
{
  homeTeam: {
    team: 'Golden State',
    points: 126,
    isWinner: true
  },
  awayTeam: {
    team: 'Houston',
    points: 85,
    isWinner: false
  }
},
{
  homeTeam: {
    team: 'Golden State',
    points: 92,
    isWinner: false
  },
  awayTeam: {
    team: 'Houston',
    points: 95,
    isWinner: true
  }
},
{
  awayTeam: {
    team: 'Golden State',
    points: 94,
    isWinner: false
  },
  homeTeam: {
    team: 'Houston',
    points: 98,
    isWinner: true
  }
},
{
  homeTeam: {
    team: 'Golden State',
    points: 115,
    isWinner: true
  },
  awayTeam: {
    team: 'Houston',
    points: 86,
    isWinner: false
  }
},
{
  awayTeam: {
    team: 'Golden State',
    points: 101,
    isWinner: true
  },
  homeTeam: {
    team: 'Houston',
    points: 92,
    isWinner: false
  }
}
]

const ulParent = document.createElement('ul');
for (let game of warriorsGames) {
  const { homeTeam, awayTeam } = game;
  const { team: hTeam, points: hPoints } = homeTeam;
  const { team: aTeam, points: aPoints } = awayTeam;
  const gameLi = document.createElement('li');
  const teamName = `${aTeam} @ ${hTeam}`;
  // console.log(awayTeam.team, homeTeam.team);
  let scoreLine;
  if(aPoints> hPoints){
    scoreLine = `<b>${aPoints}</b>-${hPoints}`;
  }else{
    scoreLine = `${aPoints}-<b>${hPoints}</b>`;
  }
  const worriors = hTeam === 'Golden State' ? homeTeam : awayTeam;
  gameLi.classList.add(worriors.isWinner?'win':'loss');
  gameLi.innerHTML = `${teamName} ${scoreLine}`;
  // console.log(scoreLine);
  ulParent.appendChild(gameLi);
}

document.body.prepend(ulParent);
