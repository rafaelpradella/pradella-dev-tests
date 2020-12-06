import mockData from "./mockdata.js";
import { fireEvent, render, screen, waitFor } from "@testing-library/vue";
import TrainItem from "../components/TrainItem.vue"

const mockObject = mockData.trains[0]
const customProps = { props: { content: mockObject }}

test("Element mounting", () => {
    render(TrainItem, customProps);
})

test("Basic info rendering", () => {
    render(TrainItem, customProps);
    const Title = screen.getByTestId("title");
    expect(Title.innerHTML).toBe(mockObject.name);
})

test("change button label on click", async() => {
    render(TrainItem, customProps)
    const Button = screen.getByTestId("button");
    let startText = Button.innerHTML;
    
    await fireEvent.click(Button)
    expect(Button.innerHTML).toBeTruthy();
    expect(Button.innerHTML).not.toEqual(startText)
    await fireEvent.click(Button)
    expect(Button.innerHTML).toEqual(startText)
})

test("image is loaded on click", async() => {
    render(TrainItem, customProps)
    let Button = screen.getByRole("button");
    let Image = screen.getByTestId("image");

    expect(Image.currentSrc).toBeFalsy();
    await fireEvent.mouseDown(Button);
    await waitFor(() => {
        expect(Image.getAttribute("src")).toEqual(mockObject.photo)
    })
})

test("image is loaded on focus", async() => {
    render(TrainItem, customProps)
    let Button = screen.getByRole("button");
    let Image = screen.getByTestId("image");

    expect(Image.currentSrc).toBeFalsy();
    await Button.focus();
    await waitFor(() => {
        expect(Image.getAttribute("src")).toEqual(mockObject.photo)
    })
})