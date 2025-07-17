const readline = require("readline");
const axios = require("axios");

const baseUrl = "https://jsonmock.hackerrank.com/api/football_matches";

async function fetchGoalsByTeam(teamRole, year, teamName) {
  let totalGoals = 0;
  let page = 1;
  let totalPages = 1;

  while (page <= totalPages) {
    const url = `${baseUrl}?year=${year}&${teamRole}=${encodeURIComponent(
      teamName
    )}&page=${page}`;

    try {
      const response = await axios.get(url);
      const result = response.data;
      console.log(
        `Fetching page ${page}, ${teamRole} of ${result.total_pages}`
      );

      if (page === 1) {
        totalPages = result.total_pages;
      }

      result.data.forEach((match) => {
        const goals =
          teamRole === "team1"
            ? parseInt(match.team1goals)
            : parseInt(match.team2goals);
        totalGoals += goals;
      });

      page++;
    } catch (error) {
      console.error(`Error fetching data for page ${page}: ${error.message}`);
      break;
    }
  }

  return totalGoals;
}

async function getTotalGoals(teamName, year) {
  const team1goals = await fetchGoalsByTeam("team1", year, teamName);
  const team2goals = await fetchGoalsByTeam("team2", year, teamName);
  //   console.log(
  //     `Total goals by ${teamName} in ${year}: Team1 - ${team1goals}, Team2 - ${team2goals}`
  //   );
  return team1goals + team2goals;
}

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const ask = (question) =>
    new Promise((resolve) => {
      rl.question(question, resolve);
    });

  try {
    const teamName = await ask("Enter team name: ");
    const year = await ask("Enter year: ");
    if (!teamName || isNaN(year)) {
      console.error("Team name and year must be valid.");
      rl.close();
      return;
    }

    const total = await getTotalGoals(teamName, year);
    console.log(`\nTotal goals by ${teamName} in ${year}: ${total}`);
  } catch (error) {
    console.error("An error occurred:", error.message);
  } finally {
    rl.close();
  }
}

main();

// run the code in terminal  :
// node challenge1/totalGoals.js

//example :
// Enter team name: Barcelona
// Enter year: 2011
