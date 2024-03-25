import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

jest.mock("../assets/images/PopupButton.png", ()=> "../assets/images/PopupButton.png");
jest.mock("../assets/images/closeButton.png", ()=> "../assets/images/closeButton.png");
jest.mock("../assets/images/KillBill.png", ()=> "../assets/images/KillBill.png");
jest.mock("../assets/images/PulpFiction.png", ()=> "../assets/images/PulpFiction.png");
jest.mock("../assets/images/BohemianRhapsody.png", ()=> "../assets/images/BohemianRhapsody.png");
jest.mock("../assets/images/Dogs.png", ()=> "../assets/images/Dogs.png");
jest.mock("../assets/images/Inception.png", ()=> "../assets/images/Inception.png");
jest.mock("../assets/images/Avengers.png", ()=> "../assets/images/Avengers.png");
jest.mock("../assets/images/SearchButton.png", ()=> "../assets/images/SearchButton.png");
jest.mock("../assets/images/Arrow.png", ()=> "../assets/images/Arrow.png");
jest.mock("../assets/images/netflixroulette.png", ()=> "../assets/images/netflixroulette.png");

describe("App component", () => {
  it("should render correctly", () => {
    render(<App />);
    expect(screen.getByRole("AppComponent")).toBeTruthy();
  });
});
