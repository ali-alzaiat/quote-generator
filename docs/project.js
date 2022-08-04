var newQuote = document.querySelector(".newQuote");
var quote = document.querySelector(".quote");
var person = document.querySelector(".person");
var quotes = [{
		quote: "The way to get started is to quit talking and begin doing.",
		person: "-Walt Disney"
	},
	{
		quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
		person: "-Steve Jobs"
	},
	{
		quote: "If life were predictable it would cease to be life, and be without flavor.",
		person: "-Eleanor Roosevelt"
	},
		{
		quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
		person: "-Oprah Winfrey"
	},

	{
		quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
		person: "-James Cameron"
	},
	{
		quote: "Life is what happens when you're busy making other plans.",
		person: "-John Lennon"
	},
	{
		quote: "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.",
		person: "-Helen Keller"
	},
	{
		quote: "It is during our darkest moments that we must focus to see the light.",
		person: "-Aristotle"
	},
	{
		quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
		person: "-NELSON MANDELA"
	},
]


newQuote.addEventListener("click",function(){
	let n = Math.floor(Math.random() * quotes.length);
	quote.innerText = quotes[n].quote;
	person.innerText = quotes[n].person;
});
