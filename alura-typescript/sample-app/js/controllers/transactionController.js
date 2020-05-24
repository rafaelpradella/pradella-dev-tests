class TransactionController {
    constructor() {
        this.inputData = document.querySelector("#data");
        this.inputQuantity = document.querySelector("#quantidade");
        this.inputValue = document.querySelector("#valor");
    }
    add(event) {
        event.preventDefault();
        const transaction = new Transaction(new Date(this.inputData.value.replace(/-/g, "/")), parseInt(this.inputQuantity.value), parseFloat(this.inputValue.value));
        console.log(transaction);
    }
}
