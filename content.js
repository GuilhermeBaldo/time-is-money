chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "convertCurrencyToHours") {
        const { salary, worked_hours } = message;

        salary_per_hour = salary / worked_hours;

        console.log(salary_per_hour)

        const elements = document.querySelectorAll("p, span, div");
        
        elements.forEach(element => {
            const text = element.innerText;
            const match = text.match(/\$\d+(\.\d+)?/g);

            if (match) {
                const price = parseFloat(match[0].slice(1));
                const hours = price / salary_per_hour;

                console.log(hours)

                element.innerText = text.replace(match[0], `$${hours.toFixed(2)}`);

            }
        });
    }
});