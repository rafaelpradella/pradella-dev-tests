const controller = new TransactionController();
document
    .querySelector("form")
    .addEventListener("submit", controller.add.bind(controller));
