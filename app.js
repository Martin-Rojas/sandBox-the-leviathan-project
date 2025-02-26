// const data = fetch(
//    "https://api.polygonscan.com/api?module=account&action=txlist&address=0x5a2220d56f56db9C9F5B0cb83ff35b42746503a2&sort=desc&startblock=0&apikey=34GWTJD7T7YUEGJX7KM8KEITYJM9PDPVD2"
// ).then((x) => x.json());
// console.log(data);

fetch(
   "https://api.polygonscan.com/api?module=account&action=txlist&address=0x326708210F6CC365aC4CaE597F959704C32e8541&sort=desc&startblock=0&apikey=34GWTJD7T7YUEGJX7KM8KEITYJM9PDPVD2"
)
   .then((response) => response.json()) // Parse JSON
   .then((data) => {
      // transaction 1
      const transaction = data.result[0];

      // Display data into the web page
      document.getElementById(
         `block-number`
      ).innerText = `BlockNumber: ${transaction.blockNumber}`;
      document.getElementById(`from`).innerText = `from: ${transaction.from}`;
      document.getElementById(`to`).innerText = `to: ${transaction.to}`;
      document.getElementById(
         `value`
      ).innerText = `value: ${transaction.value}`;
      document.getElementById(
         `time`
      ).innerText = `time: ${transaction.timeStamp}`;

      console.log(data.result);
   }) // Work with JSON data
   .catch((error) => console.error("Error fetching JSON:", error));
