import mockData from "./mockdata.js";
import axios from "axios";
import { render, waitFor, screen } from "@testing-library/vue";
import TrainsList from "../components/TrainsList.vue"

jest.spyOn(axios, 'get');

test("Element mounting", () => {
    render(TrainsList);
})

//
test("Show TrainItem when fetching is OK", async() => {
    axios.get.mockResolvedValue({ data: mockData });

    render(TrainsList);
    const TrainItem = screen.findAllByTestId("list-item");
    await waitFor(() => expect(TrainItem).toBeTruthy())
})

test("Show NetworkWarn when fetching returns errors", async() => {
    axios.get.mockRejectedValue(new Error("Error fetching data from server"));

    render(TrainsList);
    const NetworkWarn = screen.findAllByTestId("warn");
    await waitFor(() => expect(NetworkWarn).toBeTruthy())
})
