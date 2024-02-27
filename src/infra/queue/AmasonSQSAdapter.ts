import Queue from "./Queue";
import aws from "aws-sdk";

export default class AmazonSQSAdapter implements Queue {
  sqs: aws.SQS;
  constructor() {
    aws.config.update({
      region: "sa-east-1",
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY as string,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
      },
    });

    this.sqs = new aws.SQS();
  }

  async on(
    queueName: string,
    callback: (x: aws.AWSError, y: aws.SQS.ReceiveMessageResult) => void
  ): Promise<void> {
    this.sqs.receiveMessage(
      {
        MaxNumberOfMessages: 10,
        QueueUrl: queueName,
        WaitTimeSeconds: 5,
      },
      callback
    );
  }

  async publish(queueName: string, data: any) {
    this.sqs.sendMessage(
      { MessageBody: data, QueueUrl: queueName },
      (err, _data) => {
        if (err) {
          throw new Error(err.message);
        }
      }
    );
  }
}
