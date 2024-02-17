import { render, screen } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "./mocks/MockResListData.json"
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

// global.fetch = jest.fn(() => {
//     return Promise.resolve({
//         json: () => {
//             return Promise.resolve(MOCK_DATA)
//         }
//     })
// })



it("should reder the body compnent with search", async () => {
    jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve(MOCK_DATA)
        })
    );

    await act(async () => {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        );
    });


    const searchbtn = screen.getByRole("button", { name: "Search" })
    console.log(searchbtn)
    expect(searchbtn).toBeInTheDocument();

});