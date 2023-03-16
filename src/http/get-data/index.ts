// This Lambda Function fetches data from a Dynamo DB Table
import AWS from "aws-sdk";
const docClient = new AWS.DynamoDB.DocumentClient();
const params = {
  TableName: "adInnovationBlueconicCDP",
  Key: {
    bcId: "36a10e4a-e8f0-4044-bbaa-900348b714d3",
  },
};
export async function handler(request: any, context: any): Promise<any> {
  try {
    const data = await docClient.get(params).promise();
    return { body: JSON.stringify(data) };
  } catch (err) {
    return { error: err };
  }
}
