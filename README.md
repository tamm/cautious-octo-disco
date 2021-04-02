# cautious-octo-disco

WCGW?

## Installation / Getting it started

Just navigate to this folder and run

```
npm install
npm start
```

## Setup

You need to provide an Airtable set up with the following:

A table named exactly `Data Sources` with the columns:

```
{
    ID: '',
    Name: '',
    URL: ''
}
```

Then you need to provide a `.env` file or other valid `ENV` source with the following keys:
(The name of your database doesn't matter)

```
NODE_ENV=development
AIRTABLE_API_KEY=[your api key]
AIRTABLE_DATABASE_ID=[your table id]
AIRTABLE_ENDPOINT_URL=https://api.airtable.com
```
