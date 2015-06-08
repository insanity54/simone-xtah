# simone-xtah
ROJATONE

This program is meant to act as a low cost way of remotely monitoring a simon xt. The only cost is the Plivo service. The program works with Plivo to record calls from the simon xt and send the sound clip to a list of e-mail addresses.


## Setup

In the project root, create a file config.json:

```
{
    "PLIVO_ID": "enter_your_plivo_account_id_here",
    "PLIVO_TOKEN": "enter_your_plivo_token_here",
    "SITES": {
        "Industrial Communications Spokane": {
            "numbers": [
                "12345678901",
                "19012344566"
            ],
            "notifies": [
                "chris@example.com",
                "pete@example.com",
                "roger@example.com"
            ]
        }
    }
}
```

the SITES directive declares the different simon xts that may call this program. any calls received from these phone numbers will be recorded. If you have a small business PBX and the sion xt could ring from any number in your trunk, enter all the numbers for that site.

Use `npm install` to satisfy package dependencies

Use `npm start` to run the server