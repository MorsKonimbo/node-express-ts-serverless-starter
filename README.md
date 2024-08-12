# js-express-ts-lambda-starter

> [!IMPORTANT]
> Change in `package.json` require.
> Scripts -> debug
> Change according to your system.

Please make sure to adjust all necessary parts of this template.


### Installation

#### Dependencies

```npm i @types/body-parser body-parser axios cors express serverless-http```

#### Dev Dependencies

```npm i -D @types/aws-lambda @types/axios @types/cors @types/express @types/node serverless serverless-offline serverless-plugin-typescript-express tsup typescript```

### Debug

idea - `vscode`

1. Run command ```npm run build```.
2. Play debugger.

### Deploy

> [!NOTICE]
> Remove `dist` folder before running the command.
> We compile the code with `tsup` and using `sourcemap`
> We dont want to expose the `sourcemap` to production.

1. Run command ```sls deploy`.