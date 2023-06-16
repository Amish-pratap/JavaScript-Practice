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

const makeChart = (games, targetTeam) => {
  const ulParent = document.createElement('ul');
  for (let game of games) {
    const gameLi = document.createElement('li');
    // console.log(awayTeam.team, homeTeam.team);

    gameLi.classList.add(isWinner(game, targetTeam) ? 'win' : 'loss');
    gameLi.innerHTML = getScoreLine(game);
    // console.log(scoreLine);
    ulParent.appendChild(gameLi);
  }
  return ulParent;
}

const isWinner = ({ homeTeam, awayTeam },targetTeam) => {
  const target = homeTeam.team === targetTeam ? homeTeam : awayTeam;
  return target.isWinner;
}

const getScoreLine = ({ homeTeam, awayTeam }) => {
  const { team: hTeam, points: hPoints } = homeTeam;
  const { team: aTeam, points: aPoints } = awayTeam;
  const teamName = `${aTeam} @ ${hTeam}`;
  let scoreLine;
  if (aPoints > hPoints) {
    scoreLine = `${aPoints}-<b>${hPoints}</b>`;
  } else {
    scoreLine = `<b>${aPoints}</b>-${hPoints}`;
  }
  return `${teamName} ${scoreLine}`;

}


const gsSection = document.querySelector('#gs');
const houstonSection = document.querySelector('#hr');
const gschart= makeChart(warriorsGames,'Golden State');
const hrchart= makeChart(warriorsGames,'Houston');

gsSection.appendChild(gschart);
houstonSection.appendChild(hrchart);
