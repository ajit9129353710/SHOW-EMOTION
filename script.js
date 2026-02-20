function analyze() {
  let text = document.getElementById("text").value.toLowerCase();
  let result = document.getElementById("result");

  if (text.includes("happy") || text.includes("good") || text.includes("great")) {
    result.innerText = "😊 Sentiment: Positive";
  } 
  else if (text.includes("sad") || text.includes("bad") || text.includes("angry")) {
    result.innerText = "😢 Sentiment: Negative";
  } 
  else {
    result.innerText = "😐 Sentiment: Neutral";
  }
}
  