# Architect POC Application

This project is a POC to analyse the functionalities provided by Architect.
ARC is an IaC framework that lets developers define their serverless infrastructure

## Pre-requisities

- [Node.js](https://nodejs.org/en/)
- [AWS CLI](https://arc.codes/docs/en/get-started/detailed-aws-setup#aws-cli)
- [Architect ](https://arc.codes/docs/en/get-started/detailed-aws-setup#install-architect)

## Local Sandboxing

Run `npx arc sandbox` in your terminal, it will start a development server on a free port for you:

## Project manifest format

The app.arc file is the manifest file in the root of the project which contains definition of your architecture.The @app pragma defines the name of the app and is used to prefix all generated resources. The @http pragma lets you define serverless functions triggered by HTTP requests.
More details on the syntax of the manifest file can be found [here](https://arc.codes/docs/en/get-started/project-manifest)
