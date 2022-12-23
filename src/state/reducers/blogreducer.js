// This is a reducer file where all the implementation of action is defined here

const reducer = (state = defaultblogs, action) => {
  if (action.type === "add") {
    const d = new Date();
    action.payload.key = d.getTime().toString();
    return [action.payload].concat(state);

  } else if (action.type === "edit") {
    return state
      .filter((item) => item.key !== action.key)
      .concat(action.payload);
      
  } else if (action.type === "delete") {
    return state.filter((item) => item.key !== action.payload);

  } else {
    return state;
    
  }
};



// This is the default database created for doing operations via redux on it.
let defaultblogs = [
  {
    key: "0",
    title: "30 One-Sentence Stories From People Who Have Built Better Habits",
    categories: "Habits",
    content: "One of the central ideas in the book is the concept of building “identity-based habits”, which essentially recommends focusing on the type of person you wish to become rather than the outcome you wish to achieve.One reader named Roland used the idea to improve his eating habits.“I stopped eating unhealthy food via identity change,” he wrote. “I tried many times in the past, but it became easy — natural — only after I had made the conscious decision that I want to be someone who eats healthy. Instead of aiming for I want to stop eating bad food, I tried changing the mindset to I am someone that eats healthy and lives a healthy life. It changes how you approach things.”",
  },
  {
    key: "1",
    title: "The Ultimate Productivity Hack is Saying No",
    categories: "Focus",
    content: "The words “yes” and “no” get used in comparison to each other so often that it feels like they carry equal weight in conversation. In reality, they are not just opposite in meaning, but of entirely different magnitudes in commitment.When you say no, you are only saying no to one option. When you say yes, you are saying no to every other option.I like how the economist Tim Harford put it, “Every time we say yes to a request, we are also saying no to anything else we might accomplish with the time.” Once you have committed to something, you have already decided how that future block of time will be spent.",
  },
  {
    key: "2",
    title: "Creativity: How to Unlock Your Hidden Creative Genius",
    categories: "Creativity",
    content: "Let’s define creativity.The creative process is the act of making new connections between old ideas or recognizing relationships between concepts. Creative thinking is not about generating something new from a blank slate, but rather about taking what is already present and combining those bits and pieces in a way that has not been done previously.",
  },
];

export default reducer;
