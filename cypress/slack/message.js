const axios = require("axios");

const data = JSON.stringify({
  blocks: [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: ":white_check_mark: Passed! Tests**",
      },
    },
  ],
});

// const config = {
//   method: "POST",
//   headers: {
//     "Content-type": "application/json",
//   },
//   body: data,
// };

function send_slack_message() {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: data,
  };
  axios(
    "https://hooks.slack.com/services/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",
    requestOptions
  ).then((response) => response.json());
}

send_slack_message();
