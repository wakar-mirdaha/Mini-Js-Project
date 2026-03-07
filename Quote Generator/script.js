const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author');
const btn = document.getElementById('generatebtn');
const apiKey = "xRSVUz1pvwhLP7KuHVB4sqeVfbBTMDB3NNuSBDSo";

async function getQuote() {
    try {

        btn.innerText = "Loading...";
        btn.disabled = true;
        quoteEl.style.opacity = 0.4; 

        const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
            headers: { "X-Api-Key": apiKey }
        });

        if (!response.ok) throw new Error("Network response was not ok");

        const data = await response.json();
        const { quote, author, category } = data[0];

        
        quoteEl.innerText = quote;
        authorEl.innerText = author;
        document.getElementById('category').innerText = category;
        
       
        quoteEl.style.opacity = 1;

    } catch (error) {
        quoteEl.innerText = "Error: Could not fetch quote. Please check your connection.";
        console.error(error);
    } finally {
        btn.innerText = "Generate Quote";
        btn.disabled = false;
    }
}

btn.addEventListener('click', getQuote);
getQuote(); 