const aws = require("aws-sdk");
const { randomBytes } = require("crypto");
const { promisify } = require("util");

const region = "ap-south-1";
const bucketName = "movizine-imageupload";
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: "v4",
});

async function generateUploadUrl() {
  const randomBts = promisify(randomBytes);
  const rawBytes = await randomBts(16);
  const imgName = rawBytes.toString("hex") + ".jpg";

  const params = { Bucket: bucketName, Key: imgName, Expires: 60 };

  const uploadUrl = await s3.getSignedUrlPromise("putObject", params);
  return uploadUrl;
}

module.exports = { generateUploadUrl };
