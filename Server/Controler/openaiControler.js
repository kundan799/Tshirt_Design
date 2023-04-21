const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const genrateImage = async (req, res) => {
  try {
    const responce = await openai.createImage({
      prompt: "a white siamese cat",
      n: 1,
      size: "1024x1024",
    });
    const image_URL = responce.data.data[0].url;
    res.status(200).json({
      success: true,
      data: image_URL,
    });
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
    res.status(400).json({
      success: false,
      error: "the image could not be genrated",
    });
  }
};

module.exports = { genrateImage };
