import AmazonSQSAdapter from "../../src/infra/queue/AmasonSQSAdapter";

export const sutSQSAdapter = () => {
  return new AmazonSQSAdapter();
};

describe("SQS", () => {
  it.skip("Should publish a message", async () => {
    const ownerID = "123456";
    const sqs = sutSQSAdapter();

    await sqs.publish(process.env.AWS_QUEUE as string, ownerID);
  });

  it("Should consume a message", async () => {
    const sqs = sutSQSAdapter();
    await sqs.on(process.env.AWS_QUEUE as string, (err, data) => {
      if (err) {
        throw new Error("Erro");
      } else if (data.Messages) {
      expect(data.Messages).toBeDefined()
      }
    });
  });
});
