const {OpenAI} = require("openai");


export async function getQuestions(diff, prompt) {


  const openai = new OpenAI({
    apiKey: "",
    dangerouslyAllowBrowser: true
   
  });


  let difficulty = "easy";


  if (diff == 1) difficulty = "easy";
  else if (diff == 2) difficulty = "medium";
  else if (diff == 3) difficulty = "hard";


  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "Give me Three " +
          prompt +
          " questions. Each question must be a multiple choice with 4 options with one answer " +
          " Make the questions " +
          difficulty +
          " level of difficulty" +
          ". Format the output as a json object with keys question, options(as an array 0-3) and correct_answer(should be the index of the option) inside a key of questions with an array of questions",
      },
    ],
  });


  var response = JSON.parse(completion.choices[0].message.content);
  console.log(response);


  return response;
}
