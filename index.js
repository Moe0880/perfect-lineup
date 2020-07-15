function calculateTotalSalary(lineup) {
  return lineup.reduce((salary, player) => salary + player.salary, 0)
}

function PositionCounts(lineup) {
  return lineup.reduce((counts, player) => {
    counts[player.position] =
      counts[player.position] === undefined ? 1 : counts[player.position] + 1

    return counts
  }, {})
}

function GameCounts(lineup) {
  return lineup.reduce((games, player) => {
    games[player.gameId] =
      games[player.gameId] === undefined ? 1 : games[player.gameId] + 1

    return games
  }, {})
}

function TeamCounts(lineup) {
  return lineup.reduce((teams, player) => {
    teams[player.teamId] =
      teams[player.teamId] === undefined ? 1 : teams[player.teamId] + 1

    return teams
  }, {})
}

function checkGameCount(games) {
  return Object.values(games).some((count) => count > 3)
}

function checkPositionCount(positions) {
  return (
    positions['P'] !== 1 ||
    positions['C'] !== 1 ||
    positions['1B'] !== 1 ||
    positions['2B'] !== 1 ||
    positions['3B'] !== 1 ||
    positions['SS'] !== 1 ||
    positions['OF'] !== 3
  )
}

function checkSalary(lineup) {
  return calculateTotalSalary(lineup) > 45000
}

function checkTeamCount(teams) {
  return Object.values(teams).some((count) => {
    return count > 2
  })
}

function validateLineup(lineup) {
  const gameCounts = GameCounts(lineup)
  const teamCounts = TeamCounts(lineup)
  const positionCounts = PositionCounts(lineup)

  return (
    !checkGameCount(gameCounts) &&
    !checkSalary(lineup) &&
    !checkTeamCount(teamCounts) &&
    !checkPositionCount(positionCounts)
  )
}

module.exports = validateLineup
