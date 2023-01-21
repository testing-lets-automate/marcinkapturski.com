const fetch = require("isomorphic-fetch");

const data = JSON.stringify({
  blocks: [
    {
      type: "divider",
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `:white_check_mark: Passed! *Tests*`,
      },
      accessory: {
        type: "button",
        text: {
          type: "plain_text",
          text: "Test Results",
          emoji: true,
        },
        style: "primary",
        url: `https://blockfi.atlassian.net/browse/`,
        value: "test_results",
        action_id: "button-action",
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
  fetch(
    "https://hooks.slack.com/services/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",
    config
  )
    .then((response) => console.log(response))
    .then((json) => console.log(json));
}

send_slack_message();
