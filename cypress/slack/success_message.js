const fetch = require("isomorphic-fetch");

const args = process.argv;
const slackWebHook = args[2];
const githubEvent = args[3];
const branchName = args[4];
const runUrl = args[5];

const data = JSON.stringify({
  blocks: [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `:white_check_mark: Tests Passed! for: *${githubEvent}*, /nbranch name: *${branchName}* /n${runUrl}`,
      },
    },
  ],
});

const config = {
  method: "POST",
  headers: {
    "Content-type": "application/json",
  },
  body: data,
};

function send_slack_message() {
  fetch(`https://hooks.slack.com/services/${slackWebHook}`, config)
    .then((response) => console.log(response))
    .then((json) => console.log(json));
}

send_slack_message();
