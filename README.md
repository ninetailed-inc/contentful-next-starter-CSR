#  A website template for Ninetailed personalization with contentful and next.js



Testing Branch
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fninetailed-inc%2Fcontentful-next-starter-CSR%2Ftree%2Ftesting_deploy-routine&env=NEXT_PUBLIC_NINETAILED_CLIENT_ID,NEXT_PUBLIC_NINETAILED_MANAGEMENT_CLIENT_ID,NEXT_PUBLIC_NINETAILED_MANAGEMENT_SECRET,CONTENTFUL_SPACE_ID,CONTENTFUL_TOKEN,CONTENTFUL_PREVIEW_TOKEN,CONTENTFUL_MANAGEMENT_TOKEN&project-name=ninetailed-contentful-next-starter&repository-name=ninetailed-contentful-next-starter&build-command=npm%20run%20build-and-setup)


![](docs/ninetailed-contentful-next-starter-screenshot.png)

The illustrated website example demonstrates the Ninetailed content personalization integration for Contentful using Next.js as the web framework.

- [Live Demo](#Live-Demo)
- [Deploy Your Own Playground Without Code](#Deploy-Your Own Playground Without Code)
  - [Create a Ninetailed account](#Step 1.-Create a Ninetailed account)
  - [Create a Contentful account and space](#Step 2.-Create a Contentful account and space)
  - [Connect Contentful with Ninetailed](#Step 3.-Connect Contentful with Ninetailed)
  - [Create Contentful API credentials](#Step 4.-Create Contentful API credentials)
  - [Create Ninetailed API credentials](#Step 5.-Create Ninetailed API credentials)
  - [Deploy Your Personal Playground On Vercel](#Step 6.-Deploy Your Personal Playground On Vercel)
  - [Final Remark](#Step 7.-Final Remark)
- [Developer Section](#Developer Section)

## Live Demo

If you like to discover how content personalization can be applied to a website visit our live demo here.

## Deploy Your Own Playground Without Code
If you are interested in exploring the capabilities of content personalization with Ninetailed and Contentful in more depth you can deploy your own environment.\
For that, simply follow the instructions which will guide you through the necessary steps.

### Step 1. Create A Ninetailed Account
- [Click here to sign-up on Ninetailed](https://app.ninetailed.io/account/sign-up).

### Step 2. Create A Contentful Account And Space
- First, [sign-up on Contentful](https://www.contentful.com/sign-up/).
- Next, create a new empty **space** from the Contentful dashboard. You can choose any name of your liking for the space.

### Step 3. Connect Contentful With Ninetailed
- Within your Contentful space, navigate to **Apps** in the navbar and click on **manage apps** in the dropdown.
- On the next page, scroll down the provided list of available apps and click on the **Ninetailed Personalization** application.
- Install the Ninetailed Personalization application and authorize access to your space.
- Afterwards simply click on connect. You will be automatically redirected to your Ninetailed account.
- Next, authenticate with Contentful
- At last, select the Contentful space you want to connect to Ninetailed, provide a name for the connection and confirm with **create content source**.

### Step 4. Create Contentful API Credentials
> ⚠️ **HINT:** Save the created API credentials temporarily in a note or separate file, as you will need to provide them in the last step.
- Within your Contentful space, navigate to the navigation bar, go to **Settings** and click on **API keys** in the dropdown.
- Click on **Add API key**.
- Enter a name for your API key and save it. 
- Copy the following credentials to your note for later use:
  - **Space ID** (CONTENTFUL_SPACE_ID)
  - **Content Delivery API - access token** (CONTENTFUL_TOKEN)
  - **Content Preview API - access token** (CONTENTFUL_PREVIEW_TOKEN)
- Go back and select the **Content management tokens** tab.
- Generate a **Personal Access Token** (CONTENTFUL_MANAGEMENT_TOKEN) and make sure to copy it immediately to your note.

### Step 5. Create Ninetailed API Credentials
> ⚠️ **HINT:** Save the created API credentials temporarily in a note or separate file, as you will need to provide them in the last step.
- Within your Ninetailed account, click onto **API Key** in the sidebar.
- Save the shown **API Key** (NINETAILED_CLIENT_ID) to your notes. 
- Next, in the sidebar go to Settings. In the appearing modal navigate to **API Tokens**.
- Click on **Generate Token**, enter a descriptive phrase and select **Read Only** as a role.
- After creation, save the **Client ID** (NINETAILED_MANAGEMENT_CLIENT_ID) and the **Secret Key** (NINETAILED_MANAGEMENT_SECRET).

### Step 6. Deploy Your Personal Playground On Vercel

- As the last step, click **Deploy**, and you will automatically be redirected to Vercel.
- There, just simply create your repository type in the saved credentials.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fninetailed-inc%2Fcontentful-next-starter-CSR&env=NEXT_PUBLIC_NINETAILED_CLIENT_ID,NEXT_PUBLIC_NINETAILED_MANAGEMENT_CLIENT_ID,NEXT_PUBLIC_NINETAILED_MANAGEMENT_SECRET,CONTENTFUL_SPACE_ID,CONTENTFUL_TOKEN,CONTENTFUL_PREVIEW_TOKEN,CONTENTFUL_MANAGEMENT_TOKEN&project-name=ninetailed-contentful-next-starter&repository-name=ninetailed-contentful-next-starter&build-command=npm%20run%20build-and-setup)

Mnemonic for the credential correlation:

``` bash
NEXT_PUBLIC_NINETAILED_CLIENT_ID = "API Key"
NEXT_PUBLIC_NINETAILED_MANAGEMENT_CLIENT_ID = "API Token - Client ID"
NEXT_PUBLIC_NINETAILED_MANAGEMENT_SECRET = "API Token - Secret Key"
CONTENTFUL_SPACE_ID = "Space ID"
CONTENTFUL_TOKEN = "Content Delivery API - access token"
CONTENTFUL_PREVIEW_TOKEN = "Content Preview API - access token"
CONTENTFUL_MANAGEMENT_TOKEN= "Personal Access Token"
```

### Step 7. Final Remark

If you like to make changes to
Change the Vercel buidl command on not ovveride


## Developer Section


### Getting Started

Run the development server:
```bash
npm run dev
# or
yarn dev
```

Provide the required environment variables to your .env file:

```bash
NEXT_PUBLIC_NINETAILED_CLIENT_ID=XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
NEXT_PUBLIC_NINETAILED_ENVIRONMENT=main
NEXT_PUBLIC_NINETAILED_MANAGEMENT_CLIENT_ID=XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
NEXT_PUBLIC_NINETAILED_MANAGEMENT_SECRET=XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX

CONTENTFUL_SPACE_ID=XXXXXXXXXXXX
CONTENTFUL_TOKEN=XXXXXXXXXXXXX_XXXXXXXXXXXXXXXXXXXXXXXXXX_XX
CONTENTFUL_PREVIEW_TOKEN=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
CONTENTFUL_MANAGEMENT_TOKEN=XXXXX-XXXXX-XXXX-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
CONTENTFUL_ENVIRONMENT=master
CONTENTFUL_SPACE_DATA_LOCATION=path/to/your/jsonData.json
```

### Import and Export Data To Contentful

```bash
npm run setup
# or
yarn setup

npm run export
# or
yarn export
```

### Advanced Features

```bash
npm run contentful-typescript-codegen
# or
yarn contentful-typescript-codegen

```
