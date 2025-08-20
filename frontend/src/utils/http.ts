import axios from "axios";
const baseUrl = "https://4uma4ssz71.execute-api.us-east-1.amazonaws.com/dev/questions?"
const url = "https://4uma4ssz71.execute-api.us-east-1.amazonaws.com/dev/questions?querytype=get&examcode=SAA-C03&section_module=2"
async function getQuestions(examCode:string, section_module:string){
  try {
    // Add the missing querytype=get parameter to the URL
    const response = await axios.get(`${baseUrl}querytype=get&examcode=${examCode}&section_module=${section_module}`);
    if (response.status !== 200) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}


export async function getQuestionsTwo(){
    const res = await axios.get(url);
    console.log(res)
    return res
}

export default getQuestions
// https://4uma4ssz71.execute-api.us-east-1.amazonaws.com/dev/questions?examcode=SAA-CO3&section_module=1