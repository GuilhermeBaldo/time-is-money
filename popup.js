document.addEventListener("submit", (event) => {
    event.preventDefault();

    const salary = document.querySelector("#salary").value;
    const worked_hours = document.querySelector("#worked-hours").value;

    console.log(salary)
    console.log(worked_hours)

    // Send a message to the content script with the amount and source currency
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        chrome.tabs.sendMessage(tabs[0].id, {
            type: "convertCurrencyToHours", 
            salary, 
            worked_hours, 
        });
    });
});